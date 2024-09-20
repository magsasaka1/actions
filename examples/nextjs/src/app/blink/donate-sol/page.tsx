"use client";

import React, { useState, useEffect } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useActionSolanaWalletAdapter } from "@dialectlabs/blinks/hooks/solana";
import { Blink, Action } from "@dialectlabs/blinks";

const DonateSolPage = () => {
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const [action, setAction] = useState<Action | null>(null);
  const [mounted, setMounted] = useState(false);

  const actionApiUrl = "https://actions.magsasaka.fun/api/actions/donate-sol";
  const { adapter } = useActionSolanaWalletAdapter(connection);

  useEffect(() => {
    setMounted(true);
  }, []);

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

    if (adapter && mounted) {
      fetchAction();
    }
  }, [adapter, mounted]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Donate SOL</h1>

      {mounted && <WalletMultiButton />}

      {mounted && publicKey && action ? (
        <div className="mt-6">
          <Blink action={action} websiteText={new URL(actionApiUrl).hostname} />
        </div>
      ) : (
        <p className="mt-6">Please connect your wallet to continue.</p>
      )}
    </main>
  );
};

export default DonateSolPage;
