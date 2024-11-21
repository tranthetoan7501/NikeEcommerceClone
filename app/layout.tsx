import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/app.scss";
import Header from "./components/Header";

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
  title: "Nike. Just Do It. Nike VN",
  description:
    "Nike delivers innovative products, experiences and services to inspire athletes. Free delivery and returns on every order with Nike Membership",
  icons: {
    icon: [
      {
        url: "/nike.png",
        href: "/nike.png",
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
