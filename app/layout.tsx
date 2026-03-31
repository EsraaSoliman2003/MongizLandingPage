import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "منجز",
  description: "Landing page inspired by the uploaded Monjaz design.",
  icons: {
    icon: "/sare3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
