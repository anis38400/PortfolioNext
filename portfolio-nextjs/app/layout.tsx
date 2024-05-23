import { cn } from "@/lib/utils"
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";


const AnekTelugu = Anek_Telugu({ subsets: ["latin"],
  variable: "--font-caption"
 });

export const metadata: Metadata = {
  title: "Anis Belahadji . Software Engineer",
  description: "Sofware Engineer and Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(
        GeistSans.variable, 
        GeistMono.variable,
        AnekTelugu.variable, "font-sans h-full bg-background text-foreground")}>
        {children}
        </body>
    </html>
  );
}