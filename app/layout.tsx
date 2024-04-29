import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moringa Dev Corporation ",
  description: "Moringa Development Corporation (MDC) is a private inititiative set-up in Zambia to promote investment in the entire Moringa Value Chain and in the process, help increase the income levels and improve the nutritional status of the general populace in the SADC region.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
