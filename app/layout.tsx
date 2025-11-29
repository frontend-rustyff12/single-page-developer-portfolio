import type { Metadata } from "next";
import "./globals.css";
// import spaceGrotesk from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Frontend Mentor | Single-page developer portfolio",
  description: "Developer profile and portfolio for Adam Keyes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
