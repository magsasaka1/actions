import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppWalletProvider from "./components/AppWalletProvider"; // Import the wallet provider
import Head from "next/head"; // Import Head for meta tags

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "magsasaka Blinks",
  description: "magsasaka Blinks Adventure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Basic Metadata */}
        <title>Donate SOL to magsasaka</title>
        <meta property="og:title" content="Donate SOL to magsasaka" />
        <meta property="og:description" content="Blink Enthusiast | Support my blink adventure with a donation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://actions.magsasaka.fun/blink/donate-sol" />
        <meta property="og:image" content="https://ucarecdn.com/6ae7b2c9-1a7b-4043-aadc-28ce4c93841d/WIDI1300.png" />
        <meta property="og:site_name" content="Magsasaka Blinks Adventure" />
        <meta property="og:locale" content="en_US" />

        {/* Structured Properties for og:image */}
        <meta property="og:image:secure_url" content="https://ucarecdn.com/6ae7b2c9-1a7b-4043-aadc-28ce4c93841d/WIDI1300.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Magsasaka Blink Adventure Icon" />
      </Head>
      <body className={inter.className}>
        <AppWalletProvider> {/* Wrap children with AppWalletProvider */}
          {children}
        </AppWalletProvider>
      </body>
    </html>
  );
}
