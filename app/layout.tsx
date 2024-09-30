import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Urbanist } from "next/font/google";
import { Bricolage_Grotesque as BricolageGrotesqueFont } from "next/font/google"; // Renamed import
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--poppins",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ], // Customize weights as needed
  variable: "--urbanist",
});

// Renamed the local variable to avoid conflict
const bricolageGrotesque = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ], // Customize weights as needed
  variable: "--bricolage_grotesque",
});

export const metadata: Metadata = {
  title: "Imet Global",
  description: "Coffee Shop Designed By Mursaleen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          
        </style>
      </head>
      <body
        className={`${poppins.variable} ${urbanist.variable} ${bricolageGrotesque.variable} `} // Updated local variable usage
      >
        {children}
      </body>
    </html>
  );
}
