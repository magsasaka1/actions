"use client";

import React, { useState, useEffect } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useActionSolanaWalletAdapter } from "@dialectlabs/blinks/hooks/solana";
import { Blink, Action } from "@dialectlabs/blinks";
import Head from "next/head";  // Import Head for meta tags

const DonateSolPage = () => {
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const [action, setAction] = useState<Action | null>(null);
  const [mounted, setMounted] = useState(false); // Track when the component is mounted

  const actionApiUrl = "https://actions.magsasaka.fun/api/actions/donate-sol";
  const { adapter } = useActionSolanaWalletAdapter(connection);

  useEffect(() => {
    const fetchAction = async () => {
      try {
        const action = await Action.fetch(actionApiUrl);
        action.setAdapter(adapter);
        setAction(action);
      } catch (error) {
        console.error("Failed to fetch the action", error);
      }
    };

    if (adapter) {
      fetchAction();
    }
  }, [adapter]);

  // Set the mounted state to true when the component has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Do not render anything until the component has mounted on the client-side
    return null;
  }

  return (
    <>
      <Head>
        {/* Open Graph Meta Tags */}
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
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Donate SOL</h1>

        {/* Wallet connection button, only rendered after mounting */}
        <WalletMultiButton />

        {/* Render Blink if the wallet is connected and the action is ready */}
        {publicKey && action ? (
          <div className="mt-6">
            <Blink action={action} websiteText={new URL(actionApiUrl).hostname} />
          </div>
        ) : (
          <p className="mt-6">Please connect your wallet to continue.</p>
        )}
      </main>
    </>
  );
};

export default DonateSolPage;
