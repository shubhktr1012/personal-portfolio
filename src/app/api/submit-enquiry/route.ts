import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

// This function now sends a real email.
async function sendEmail(data: any) {
    // Create a transporter object using the Gmail service
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    // Format the addons into an HTML list
    const addonsHtml = data.order.addons.length > 0
        ? `<ul>${data.order.addons.map((addon: any) => `<li>${addon.name} (Qty: ${addon.value === true ? 1 : addon.value})</li>`).join('')}</ul>`
        : '<p>None</p>';

    // Construct the HTML for the email body
    const emailHtml = `
        <h1>New Project Enquiry</h1>
        <p>You've received a new enquiry from your portfolio website.</p>
        
        <h2>Client Details:</h2>
        <ul>
            <li><strong>Name:</strong> ${data.clientInfo.name}</li>
            <li><strong>Email:</strong> ${data.clientInfo.email}</li>
        </ul>
        
        <h2>Project Brief:</h2>
        <p>${data.clientInfo.message}</p>
        <hr>
        
        <h2>Order Summary:</h2>
        <p><strong>Plan:</strong> ${data.order.plan} (${data.order.basePrice})</p>
        <h3>Selected Add-ons:</h3>
        ${addonsHtml}
        <h3><strong>Total Price: ${data.order.totalPrice}</strong></h3>
        <hr>
        
        <p><em>Received at: ${new Date(data.receivedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</em></p>
    `;

    const mailOptions = {
        from: `"Your Name/Brand" <${process.env.SMTP_EMAIL}>`, // You can customize the sender name
        to: process.env.SMTP_EMAIL,   // Send the notification to yourself
        subject: `New Project Enquiry from ${data.clientInfo.name}`,
        html: emailHtml,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false };
    }
}

// This function now contains the logic to update Google Sheets.
async function updateGoogleSheet(data: any) {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                // The private key needs to be correctly formatted to replace the literal \n with actual newlines.
                private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        const sheets = google.sheets({
            auth,
            version: 'v4',
        });

        const addonsText = data.order.addons.map((addon: any) => 
            `${addon.name} (Qty: ${addon.value === true ? 1 : addon.value})`
        ).join(', ');

        const newRow = [
            data.receivedAt,
            data.clientInfo.name,
            data.clientInfo.email,
            data.clientInfo.message,
            data.order.plan,
            addonsText || 'None', // Handle case with no addons
            data.order.totalPrice
        ];

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
            range: 'Sheet1!A:G', // Adjust 'Sheet1' if your sheet has a different name
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [newRow],
            },
        });

        return { success: true };
    } catch (error) {
        console.error('Error updating Google Sheet:', error);
        // In a real app, you might want more robust error handling,
        // but for now, we'll return false so the API can report a failure.
        return { success: false };
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // You can add validation here to ensure the body has the expected data.
        if (!body.name || !body.email || !body.message || !body.orderSummary) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // Combine all data into a single object for processing.
        const enquiryData = {
            clientInfo: {
                name: body.name,
                email: body.email,
                message: body.message,
            },
            order: body.orderSummary,
            receivedAt: new Date().toISOString(),
        };
        
        // Call the functions to process the data.
        const emailResult = await sendEmail(enquiryData);
        const sheetResult = await updateGoogleSheet(enquiryData);

        if (!emailResult.success || !sheetResult.success) {
            throw new Error('Failed to process enquiry fully.');
        }

        return NextResponse.json({ message: 'Enquiry submitted successfully' }, { status: 200 });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ message: 'An error occurred', error: (error as Error).message }, { status: 500 });
    }
}
