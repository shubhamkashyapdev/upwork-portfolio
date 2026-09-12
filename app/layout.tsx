import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  defaultDescription,
  defaultTitle,
  getSiteUrl,
  ogImage,
  siteName,
} from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: defaultTitle,
    template: "%s",
  },
  description: defaultDescription,
  applicationName: siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage.url],
  },
  icons: {
    icon: [{ url: "/profile.jpg", type: "image/jpeg", sizes: "1024x1024" }],
    apple: [{ url: "/profile.jpg", type: "image/jpeg", sizes: "1024x1024" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
