"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head"; // Import Head for title and meta
import { IconBrandGithub } from "@tabler/icons-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link"; // Import Link for internal/external navigation

export default function DonateSolPage() {
  // Track whether the component has mounted to prevent SSR mismatches
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set mounted to true after component mounts
  }, []);

  return (
    <>
      <Head>
        {/* Basic Title and Description */}
        <title>magsasaka Blinks - Donate SOL</title>
        <meta name="description" content="Donate SOL and support the magsasaka Blinks Adventure" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Donate SOL to magsasaka" />
        <meta property="og:description" content="Support the magsasaka Blinks Adventure by donating SOL!" />
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

      <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24">
        <p>magsasaka Blinks - Donate SOL</p>
        <a href="https://github.com/magsasaka1/actions">
          <IconBrandGithub stroke={2} />
        </a>

        {/* Only render the WalletMultiButton after the component has mounted */}
        {mounted ? (
          <div className="border hover:border-slate-900 rounded mb-4">
            <WalletMultiButton />
          </div>
        ) : null}

        {/* Button to redirect users to the Dialect page */}
        <Link
          href="https://dial.to/?action=solana-action%3Ahttps%3A%2F%2Factions.magsasaka.fun%2Fapi%2Factions%2Fdonate-sol&cluster=mainnet"
          legacyBehavior
        >
          <a
            className="bg-blue-500 text-white py-2 px-4 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try my Blink on Dialect
          </a>
        </Link>
      </main>
    </>
  );
}
