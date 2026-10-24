import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bruno Dog Walker | Upper East Side, Manhattan",
  description:
    "Premium dog walking and pet care on the Upper East Side of Manhattan, NYC.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
