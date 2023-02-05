"use client";
import "./globals.css";
import { ReactNode } from "react";
import LayoutHeader from "@/components/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-primary-150 overflow-y-scroll">
        <LayoutHeader />
        <div className="px-[150px] bg-inherit">{children}</div>
      </body>
    </html>
  );
}
