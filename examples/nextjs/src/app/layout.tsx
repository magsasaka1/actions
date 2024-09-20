import { Inter } from "next/font/google";
import "./globals.css";
import AppWalletProvider from "./components/AppWalletProvider"; // Import the wallet provider

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWalletProvider> {/* Wrap children with AppWalletProvider */}
          {children}
        </AppWalletProvider>
      </body>
    </html>
  );
}
