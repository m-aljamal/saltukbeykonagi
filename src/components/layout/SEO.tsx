import Head from "next/head";
import React from "react";

export default function SEO({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta
        name="keywords"
        content="Kilis , Otel , Konak , Tarih , Suriye , Mülteci , Hotel , Rezervasyon, Konaklama , Uygun"
      ></meta>
      <meta property="og:image:secure_url" content="/logo.png" />
      <meta property="og:url" content="https://www.saltukbeykonagi.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta name="twitter:card" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/logo.png" />
    </Head>
  );
}
