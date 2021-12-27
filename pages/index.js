import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaShop</title>
        <meta name="description" content="The best pizza shop in Santiago" />
        <link rel="icon" href="/favicon-pizza.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
