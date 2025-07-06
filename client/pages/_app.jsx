// pages/_app.jsx
import "../styles/App.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>UMKM KULTURA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LOGO%20AJA.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
