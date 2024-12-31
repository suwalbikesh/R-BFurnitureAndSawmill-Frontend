import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Support from "@/components/support";
import Catagory from "@/components/category";
import Products from "@/components/products";


export default function Home() {
  return (
  <div className="flex flex-col">
    {/* <div className="relative rounded-xl m-[.75rem]">
    <div className="absolute inset-0 bg-transparent backdrop-blur-xs transition-opacity rounded-xl duration-300"></div> */}
    
    <HeroSection />
    {/* <div className="bg-primary mx-2 md:mx-4 rounded-lg"> */}
    <Support />
    {/* <div className='bg-gradient-to-r from-transparent via-[#8B4513] to-transparent h-[2px] mr-2'></div> */}
    <Catagory />
    <Products />
    {/* </div> */}
    {/* </div> */}
  </div>
  );
}
