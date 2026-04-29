import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import file Providers bạn vừa tạo
import { Providers } from "../components/Providers";

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
        {/* Bọc toàn bộ nội dung web vào trong Providers */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}