import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Donate SOL to Magsasaka</title>
        <meta name="description" content="Support the magsasaka Blinks Adventure by donating SOL!" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Donate SOL to Magsasaka" />
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
        <p>magsasaka Donation Blink</p>
        <a href="https://dial.to/?action=solana-action%3Ahttps%3A%2F%2Factions.magsasaka.fun%2Fapi%2Factions%2Fdonate-sol&cluster=mainnet">
          Try the Donation Blink
        </a>
      </main>
    </>
  );
}
