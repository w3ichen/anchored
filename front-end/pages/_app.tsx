import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Anchored</title>
        <meta name="description" content="Friendships on a Deeper Level" />
        <meta name="og:title" content="Anchored" />
        <meta name="og:description" content="Friendships on a Deeper Level" />
        <meta name="og:image" content="full_image_1.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
