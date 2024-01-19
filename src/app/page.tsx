import Hero from "@/sections/Hero";
import Navbar from "./components/Navbar";
import Customers from "./sections/Customers";
import About from "./sections/About";
import About2 from "./sections/About2";
import Work from "./sections/Work";
import Pricing from "./sections/Pricing";
import Blog from "./sections/Blog";
import Faq from "./sections/Faq";
import Cta from "./sections/Cta";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="w-screen overflow-x-hidden bg-primary-200">
      <Navbar />
      <div className="max-w-7xl xl:mx-auto">
        <Hero />
        <Customers />
        <About />
        <About2 />
        <Work />
        <Pricing />
        <Blog />
        <Faq />
        <Cta />
        <Footer />
      </div>
    </main>
  );
}
