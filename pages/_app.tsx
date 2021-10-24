import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Layout from "src/components/layout";
import SEO from "src/components/layout/SEO";
import { seoData } from "src/data/seo";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SEO title={seoData.title} description={seoData.description} />
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
