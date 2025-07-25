import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/Navbar/Navbar";
import { Inter } from 'next/font/google';

import { Space_Grotesk } from 'next/font/google';
import FooterComponent from "@/components/Footer/FooterComponent";
import Head from "next/head";

const basePath = process.env.NODE_ENV === 'production' ? '/UGAC-IITB' : '';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UGAC"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${basePath}/images/ugac.png`} />
      </head>
      <body
        // className = {`${inter.variable} ${geistSans.variable} ${geistMono.variable}` }
        style={{ fontFamily: 'Space Gortesk' }}
        className="bg-[#14213d]"
      >
        <NavbarComponent/>
        {children}
        <FooterComponent/>
      </body>
    </html>
  );
}
