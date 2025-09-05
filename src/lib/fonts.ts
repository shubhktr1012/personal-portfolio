import { Inter } from "next/font/google";
import { Karla } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";

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