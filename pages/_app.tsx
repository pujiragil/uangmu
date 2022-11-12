import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import Layout from "../components/Layout";
import { GlobalStyle } from "../components/GlobalStyle";

const inter = Inter({ weight: ["400", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
