import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga
          dolorum ipsa nulla esse delectus at ipsum fugit officia sit,
          cupiditate aperiam alias, architecto culpa? Aliquam dolorem alias
          perspiciatis? Rerum ab tenetur amet facere fugiat esse atque velit
          ullam repudiandae!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga
          dolorum ipsa nulla esse delectus at ipsum fugit officia sit,
          cupiditate aperiam alias, architecto culpa? Aliquam dolorem alias
          perspiciatis? Rerum ab tenetur amet facere fugiat esse atque velit
          ullam repudiandae!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
