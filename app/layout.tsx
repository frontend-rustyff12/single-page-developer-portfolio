import type { Metadata } from "next";
import "./globals.css";
import spaceGrotesk from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Adam Keys Developer Profile",
  description: "Developer profile and portfolio for Adam Keyes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>{children}</body>
    </html>
  );
}
