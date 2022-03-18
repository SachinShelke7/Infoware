import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-200">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
