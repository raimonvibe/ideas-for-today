import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://ideas-for-today.vercel.app";

const description =
  "A cozy dashboard of daily activity ideas with check-offs, stats, and local history.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ideas of What to Do Today",
  description,
  applicationName: "Ideas for Today",
  appleWebApp: {
    capable: true,
    title: "Ideas for Today",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    locale: "en",
    url: siteUrl,
    siteName: "Ideas of What to Do Today",
    title: "Ideas of What to Do Today",
    description,
    images: [
      {
        url: "/social-ideas.png",
        width: 312,
        height: 331,
        alt: "Ideas for Today — daily checklist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ideas of What to Do Today",
    description,
    images: ["/social-ideas.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff8f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0f2419" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
