import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const font = Urbanist({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "Welcome - SOLELUXRY",
  description: "Home of Quality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <ModalProvider />
        <ToastProvider />
        {children}
        <Footer />
      </body>
    </html>
  );
}
