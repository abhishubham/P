import type { Metadata } from "next";
import { Dancing_Script, Playfair_Display } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "I Love You, P 💕",
  description: "A little something made with all my heart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dancingScript.variable} ${playfair.variable}`}>
      <body className="m-0 p-0 overflow-hidden">{children}</body>
    </html>
  );
}
