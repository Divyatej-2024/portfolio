import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


export const metadata = {
  title: "Divya Tej Pendela | Cybersecurity Portfolio",
  description: "Projects, skills, and learning in cybersecurity, cloud infrastructure, and software engineering.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[#f7f7f4] text-[#17231e]">
        <Header />
        <main className="min-h-[60vh] flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
