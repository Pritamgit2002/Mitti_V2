// import '@/components,style,hooksstyles/globals.css'
import Footer from "../components/Footer.jsx";
import "../styles/globals.css";
import Navbar from "../components/Navbar.jsx";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
