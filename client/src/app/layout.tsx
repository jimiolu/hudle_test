import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Viga } from "next/font/google";
import "@/styles/globals.css";

/////////////////////////////////////////// GOOGLE FONTS ////////////////////////////////////////////
const viga = Viga({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-viga",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hudle: Indigenous Collaborative Data Platform",
  description: "Collaborative Data Platform for Indigenous Peoples",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} ${viga.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
