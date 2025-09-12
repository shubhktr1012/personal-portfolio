import { Inter, Karla, IBM_Plex_Mono, Oswald, Montserrat } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
});

export const karla = Karla({
  subsets: ["latin"],
})

export const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // 400: Regular, 500: Medium, 600: SemiBold, 700: Bold
})

export const oswald = Oswald({
  subsets: ["latin"],
}) 

export const mont = Montserrat({
  subsets: ["latin"],
})

export const sfMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sf-mono",
})