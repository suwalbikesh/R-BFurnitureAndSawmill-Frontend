import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Support from "@/components/support";


export default function Home() {
  return (
  <div className="flex flex-col">
    {/* <div className="relative rounded-xl m-[.75rem]">
    <div className="absolute inset-0 bg-transparent backdrop-blur-xs transition-opacity rounded-xl duration-300"></div> */}
    <Header />
    <HeroSection />
    <Support />
    {/* </div> */}
  </div>
  );
}
