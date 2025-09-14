import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: {
    default: "DesignsYouLove – Custom Printed Apparel & Accessories",
    template: "%s | DesignsYouLove",
  },
  description:
    "Shop custom printed apparel and accessories at DesignsYouLove. High-quality, unique designs with fast shipping and unbeatable prices.",
  keywords: [
    "custom printed apparel",
    "custom hoodies",
    "unique t-shirts",
    "personalized accessories",
    "DesignsYouLove",
  ],
  authors: [{ name: "DesignsYouLove" }],
  openGraph: {
    title: "DesignsYouLove – Custom Printed Apparel & Accessories",
    description:
      "Shop custom printed apparel and accessories at DesignsYouLove. High-quality, unique designs with fast shipping and unbeatable prices.",
    url: "https://www.designsyoulove.com", // replace with your actual domain
    siteName: "DesignsYouLove",
    images: [
      {
        url: "/images/og-image.jpg", // upload an OG image (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "DesignsYouLove custom apparel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DesignsYouLove – Custom Printed Apparel & Accessories",
    description:
      "Shop custom printed apparel and accessories at DesignsYouLove. High-quality, unique designs with fast shipping and unbeatable prices.",
    images: ["/images/og-image.jpg"], // same as above
  },
  robots: {
    index: true,
    follow: true,
  },
};


// Add props type
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
         <Analytics />
        <Footer />
      </body>
    </html>
  );
}
