import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kent Plus — Pure Water. Delivered With Trust.",
  description:
    "Pure and fresh drinking water delivered to your doorstep. Experience premium 20L can supply, event water, and daily subscription plans across Bhagwanpur, Marwan, Kharauna, Pakri, Vastu Vihar Pakri, and 15+ service areas with Kent Plus.",
  keywords:
    "pure water delivery, drinking water cans, Bhagwanpur water, Marwan water delivery, Kharauna, Pakri, Vastu Vihar Pakri, wedding water supply, bulk water, 20L jar delivery, Kent Plus",
  authors: [{ name: "Kent Plus Water Supply Services" }],
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#052E2B] selection:bg-[#E8FFFA] selection:text-[#00A99D]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
