import React from "react";
import { Header } from "../components/Header";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Admin header
      {children}
    </div>
  );
}
