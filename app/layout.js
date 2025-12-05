import { Analytics } from "@vercel/analytics/react";
import "./globals.css";


export const metadata = {
title: "Divya Tej Pendela – Cybersecurity Portfolio",
description: "Cybersecurity student portfolio website",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
