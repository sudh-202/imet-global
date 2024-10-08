import Banner from "../component/Banner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import History from "@/component/History";
import Navbar from "@/components/Navbar";
import Product from "@/component/Product";
import Steps from "@/component/Steps";

export default function Home() {
  return (
    <div className="overflow-x-clip w-full">
      <Navbar />
      <Hero />
      {/* <Product />
      <History />
      <Steps />
      <Banner /> */}
      <Footer />
    </div>
  );
}
