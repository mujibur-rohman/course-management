import Head from "next/head";
import { Inter } from "@next/font/google";
import Layouts from "../pages/components/Layouts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title> Create Next App </title>{" "}
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <Layouts>
        <main> Home </main>{" "}
      </Layouts>{" "}
    </>
  );
}
