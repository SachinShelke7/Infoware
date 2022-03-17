import Head from "next/head";
import { Main } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Infoware_India_Assignment</title>
        <meta
          name="description"
          content="The best E-commerce platform for your needs, Every essential products in one platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
}
