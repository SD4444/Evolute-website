import { type Metadata } from "next";
import { Fragment_Mono, Inter, Space_Grotesk } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  variable: "--font-fragment-mono",
  weight: "400",
});

export const metadata: Metadata = {
  description:
    "Evolute is a boutique corporate finance advisor for deep-tech founders and their investors.",
  icons: {
    apple: "/images/apple-touch-icon.png",
  },
  metadataBase: new URL("https://evolute.partners"),
  openGraph: {
    images: ["/images/og-image.jpg"],
  },
  title: {
    default: "Evolute — Capital partners for deep tech",
    template: "%s — Evolute",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        inter.variable,
        spaceGrotesk.variable,
        fragmentMono.variable,
      )}
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <TooltipProvider>
          <SiteNav />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </TooltipProvider>
      </body>
    </html>
  );
}
