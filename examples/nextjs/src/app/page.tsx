import Head from "next/head";
import { IconBrandGithub } from "@tabler/icons-react";

export default function Home() {
  return (
    <>
      <Head>
        {/* Add title and description for the homepage */}
        <title>magsasaka Blinks</title>
        <meta name="description" content="magsasaka Blinks Adventure" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24">
        <p>magsasaka Blinks</p>
        <a href="https://github.com/magsasaka1/actions">
          <IconBrandGithub stroke={2} />
        </a>
      </main>
    </>
  );
}
