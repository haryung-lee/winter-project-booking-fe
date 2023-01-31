import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>인천대 책 정보 제공 서비스</title>
        <meta name="description" content="인천대 책 정보 제공 서비스" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      인천대 책 정보 제공 서비스
    </>
  );
}
