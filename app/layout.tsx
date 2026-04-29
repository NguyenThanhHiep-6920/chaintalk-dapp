import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "../components/ClientLayout"; // ← Dùng cái này thay vì Providers

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChainTalk - Web3 Chat",
  description: "E2EE Decentralized Messenger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}