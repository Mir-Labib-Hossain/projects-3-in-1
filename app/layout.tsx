import { ConfigProvider } from "antd";
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
        <ConfigProvider
          theme={{
            token: { colorPrimary: "#C71D66" },
          }}
        >
          <div className="min-h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col gap-5 w-[1200px] bg-white shadow-lg border-gray-100 border sm:rounded-3xl p-8 m-8">{children}</div>
          </div>
        </ConfigProvider>
      </body>
    </html>
  );
}
