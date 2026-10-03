import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


export const metadata = {
  title: "Divya Tej Pendela | Cyber Security Analyst Candidate",
  description: "First Class Cyber Security graduate seeking an entry-level Cyber Security Analyst or SOC Analyst role in the UK. Explore projects, skills, and learning.",
  openGraph: {
    title: "Divya Tej Pendela | Cyber Security Analyst Candidate",
    description: "First Class Cyber Security graduate seeking an entry-level Cyber Security Analyst or SOC Analyst role in the UK.",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[#f7f7f4] text-[#17231e]">
        <Header />
        <a href="#main-content" className="sr-only z-[60] bg-white p-3 text-[#17231e] focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to main content
        </a>
        <main id="main-content" tabIndex={-1} className="min-h-[60vh] flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
