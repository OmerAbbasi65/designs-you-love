import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import WCU from "@/components/WCU";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <WCU />
      <Contact />
    </>

  );
}
