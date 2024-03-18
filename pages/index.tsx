import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alt Image Generator</title>
        <meta name="description" content="Alt image generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.h1}> Alt Image Generator</h1>
      <p>
        Send a request to `/api/generate` with `imageUrl` as a query parameter:
      </p>
      <Link
        className={styles.highlight}
        href="/api/generate?imageUrl=https://plus.unsplash.com/premium_photo-1710294628449-a5d79727eab9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
      >
        Go!
      </Link>
    </div>
  );
};

export default Home;
