import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Partner Energético | Optimización de Facturas",
  description: "Auditoría gratuita de facturas de luz y gas. Sin costes, sin compromiso.",
  keywords: ["energía", "auditoría", "facturas", "ahorro", "optimización", "Partner Energético"],
  authors: [{ name: "Partner Energético" }],
  openGraph: {
    title: "Partner Energético | Optimización de Facturas",
    description: "Auditoría gratuita de facturas de luz y gas. Sin costes, sin compromiso.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${syne.variable} antialiased bg-dark-900 text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
