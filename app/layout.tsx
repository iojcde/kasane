import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Nav from "./nav";
import { Footer } from "./footer";
import { LenisProvider } from "./lenis";
import Preloader from "./preloader";
import "./cursor.css";

const inter = localFont({
  src: [
    {
      path: "../fonts/InterVariable.woff2",
    },
    {
      path: "../fonts/InterVariable-italic.woff2",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Kasane Studios",
  description:
    "Kasane Studios is a creative studio based in Seoul, South Korea. We are a collective of designers and developers who are passionate about creating beautiful, functional, and meaningful work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <LenisProvider>
          <Preloader />
          <Nav />
          <div className="relative z-10  ">{children}</div>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
