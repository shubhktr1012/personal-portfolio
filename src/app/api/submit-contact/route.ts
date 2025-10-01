import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

async function sendContactEmail(data: any) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const emailHtml = `
        <h1>New Contact Form Submission</h1>
        <p>You've received a new submission from your portfolio's contact form.</p>
        
        <h2>Contact Details:</h2>
        <ul>
            <li><strong>Name:</strong> ${data.name}</li>
            <li><strong>Email:</strong> ${data.email}</li>
        </ul>
        
        <h2>Enquiry Details:</h2>
        <ul>
            <li><strong>Service of Interest:</strong> ${data.service}</li>
            <li><strong>Estimated Budget:</strong> ${data.budget}</li>
            <li><strong>Source:</strong> ${data.source}</li>
        </ul>

        <h2>Optional Details:</h2>
        <p>${data.details || 'No additional details provided.'}</p>
        <hr>
        
        <p><em>Received at: ${new Date(data.receivedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</em></p>
    `;

    const mailOptions = {
        from: `"Portfolio Contact Form" <${process.env.SMTP_EMAIL}>`,
        to: process.env.SMTP_EMAIL,
        subject: `New Contact Submission from ${data.name}`,
        html: emailHtml,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Contact email sent successfully.');
        return { success: true };
    } catch (error) {
        console.error('Error sending contact email:', error);
        return { success: false };
    }
}

async function updateContactSheet(data: any) {
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

        const newRow = [
            data.receivedAt,
            data.name,
            data.email,
            data.service,
            data.budget,
            data.source,
            data.details || '', // Ensure it's not undefined
        ];

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
            // This is where we specify the new tab name!
            range: 'contact_form!A:G', // Writes to the 7 columns in your 'contact_form' tab. Adjust if you have more/less.
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [newRow],
            },
        });

        return { success: true };
    } catch (error) {
        console.error('Error updating contact Google Sheet:', error);
        return { success: false };
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Basic validation
        if (!body.name || !body.email || !body.service || !body.budget) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }
        
        const contactData = { ...body, receivedAt: new Date().toISOString() };

        const emailResult = await sendContactEmail(contactData);
        const sheetResult = await updateContactSheet(contactData);

        if (!emailResult.success || !sheetResult.success) {
            throw new Error('Failed to process contact submission fully.');
        }

        return NextResponse.json({ message: 'Contact submission successful' }, { status: 200 });

    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json({ message: 'An error occurred', error: (error as Error).message }, { status: 500 });
    }
}
