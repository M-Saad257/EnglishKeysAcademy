import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "EnglishKeys Academy | Unlock Your English Potential",
  description: "Join 140,000+ learners at EnglishKeys Academy (EKA). Quality English language learning, career counselling, and spoken English mastery by Sir Naeem Haider.",
  keywords: "English learning, spoken English, grammar mastery, EnglishKeys Academy, Sir Naeem Haider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        {children}
        <a 
          href="https://wa.me/923111537563?text=Assalamualaikum,%20I%20want%20to%20inquire%20about%20your%20courses" 
          className="floating-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </body>
    </html>
  );
}
