import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";


export default function Home() {
  return (
  <div className="flex flex-col">
    <Header />
    <HeroSection />
    {/* <Footer /> */}
  </div>
  );
}
