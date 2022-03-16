import "../styles/globals.css";
import Layout from "./components/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-200">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
