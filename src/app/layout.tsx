import { Sora, Unbounded } from "next/font/google";
import React from "react";
import Footer from "./components/Footer";
import "./globals.css";
import Navbar from "./components/navbar";

const sora = Sora({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Lilia Makeup | Artistry Studio",
  description: "Portfólio de Lilia Dionísio — maquilhadora profissional. Arte, elegância e transformação.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${unbounded.variable} bg-aurora min-h-screen text-slate-100 antialiased font-body`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
