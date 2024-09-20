"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head"; // Import Head for title and meta
import { IconBrandGithub } from "@tabler/icons-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  // Track whether the component has mounted to prevent SSR mismatches
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set mounted to true after component mounts
  }, []);

  return (
    <>
      <Head>
        {/* Basic Title and Description */}
        <title>magsasaka Blinks</title>
        <meta name="description" content="Follow the magsasaka Blinks Adventure" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24">
        <p>magsasaka Blinks Adventure</p>
        <a href="https://github.com/magsasaka1/actions">
          <IconBrandGithub stroke={2} />
        </a>

        {/* Only render the WalletMultiButton after the component has mounted */}
        {mounted ? (
          <div className="border hover:border-slate-900 rounded">
            <WalletMultiButton />
          </div>
        ) : null}
      </main>
    </>
  );
}
