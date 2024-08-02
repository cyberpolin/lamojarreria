import { Roboto, Lilita_One } from 'next/font/google'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Viewport } from 'next'

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const lidia = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const lilitaOne = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lilita-one',
})

export const metadata: Metadata = {
  title: "La mojarreria | Villahermosa Tabasco | Mojarras fritas y asadas a domicílio",
  description: "La mojarreria | Villahermosa Tabasco | Mojarras fritas y asadas a domicílio",
};
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
}
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${lilitaOne.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
