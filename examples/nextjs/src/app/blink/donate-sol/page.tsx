export const metadata = {
  title: "Donate SOL to Magsasaka",
  description: "Blink Enthusiast | Support my blink adventure with a donation.",
  openGraph: {
    title: "Donate SOL to Magsasaka",
    description: "Blink Enthusiast | Support my blink adventure with a donation.",
    url: "https://actions.magsasaka.fun/blink/donate-sol",
    images: [
      {
        url: "https://ucarecdn.com/6ae7b2c9-1a7b-4043-aadc-28ce4c93841d/WIDI1300.png",
        width: 1200,
        height: 630,
        alt: "Magsasaka Blink Adventure Icon",
      },
    ],
  },
};

export default function DonateSolPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24">
      <p>magsasaka Dontation Blink</p>
      <a href="https://dial.to/?action=solana-action%3Ahttps%3A%2F%2Factions.magsasaka.fun%2Fapi%2Factions%2Fdonate-sol&cluster=mainnet">
        Donate SOL
      </a>
    </main>
  );
}
