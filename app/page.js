import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import ProductBento from "../components/ProductBento";
import WhyUs from "../components/WhyUs";
import Recognition from "../components/Recognition";
import QuoteCTA from "../components/QuoteCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProductBento />
        <WhyUs />
        <Recognition />
        <QuoteCTA />
      </main>
      <Footer />
    </>
  );
}
