import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/app.scss";
import { Header } from "./components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Oé - Buy organic wines made with zero pesticides. Certified B Corp.",
  description:
    "Buy organic wines made with zero pesticides from the Oé boutique. Certified B Corp with quick delivery anywhere in Europe. Drink with purpose.",
  icons: {
    icon: [
      {
        url: "/app-icon.png",
        href: "/app-icon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
