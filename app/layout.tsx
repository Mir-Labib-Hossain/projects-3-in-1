import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3 in 1 Projects",
  description: "Form Validation | Vat | Movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen w-screen flex justify-center items-center bg-white">
          <div className="flex flex-col gap-5 w-[1000px] shadow-md p-5">{children}</div>
        </div>
      </body>
    </html>
  );
}
