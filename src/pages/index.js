import Head from "next/head";
import { Footer } from "../components";

export default function Home() {
  return (
    <div className="main_body">
      <Head>
        <title>Infoware_India_Assignment</title>
        <meta
          name="description"
          content="The best E-commerce platform for your needs, Every essential products in one platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main_content">main</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
