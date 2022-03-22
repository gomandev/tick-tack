import Engine from "@components/engine";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tick Tac Toe Game</title>
        <meta name="description" content="Game created by gomandev for fun" />
      </Head>
      <Engine />
    </>
  );
};

export default Home;
