import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/providers/toaster-provider";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "Mongodb and prisma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <main className="px-3 md:px-20 lg:px-80">{children}</main>
      </body>
    </html>
  );
}
