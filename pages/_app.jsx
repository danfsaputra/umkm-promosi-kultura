// pages/_app.jsx
import "../styles/App.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>UMKM Kultura | Produk Daur Ulang Kreatif Asli Surabaya</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="UMKM Kultura menyediakan vas, tas, taplak dari bahan daur ulang sampah. Produk ramah lingkungan, kreatif, dan asli Surabaya." />
        <meta name="keywords" content="UMKM Kultura, daur ulang, produk kreatif, limbah, ramah lingkungan, Surabaya, tas daur ulang, vas, taplak meja" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (untuk tampilan saat dibagikan ke media sosial) */}
        <meta property="og:title" content="UMKM Kultura | Produk Daur Ulang Kreatif Asli Surabaya" />
        <meta property="og:description" content="Vas, tas, dan taplak dari limbah kreatif. Produk ramah lingkungan, bernilai seni, buatan UMKM Surabaya." />
        <meta property="og:url" content="https://kultura.umkmkremsel.shop" />
        <meta property="og:image" content="https://kultura.umkmkremsel.shop/kultura.jpg" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/kultura.jpg" type="image/png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
