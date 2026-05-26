import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


export const metadata = {
  title: "Divya Tej Pendela – Cybersecurity Portfolio",
  description: "Cybersecurity student portfolio website",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100">
        <Header />
        <main className="min-h-[60vh]">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
