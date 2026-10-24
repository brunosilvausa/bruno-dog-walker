import type { Metadata } from "next";
import localFont from "next/font/local";
import mascot from "@/design-system/assets/logos/bdw-mascot.png";
import "./globals.css";

const nunito = localFont({
  src: "../../design-system/assets/fonts/nunito-sans.ttf",
  variable: "--font-nunito", weight: "200 900", display: "swap",
});
const barlow = localFont({
  src: "../../design-system/assets/fonts/barlow-condensed-bold.ttf",
  variable: "--font-barlow", weight: "700", display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: mascot.src },
  title: "Bruno Dog Walker | Upper East Side, Manhattan",
  description:
    "Premium dog walking and pet care on the Upper East Side of Manhattan, NYC.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${nunito.variable} ${barlow.variable}`}><body>{children}</body></html>;
}
