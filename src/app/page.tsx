import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import OurMission from "@/components/Ourmisson";
import AreaOfPractices from "@/components/Area";
import WhatOurClientsSay from "@/components/Testim"
import Footer from "@/components/Footer";
import Why from "@/components/Why";
export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <OurMission/>
    <AreaOfPractices/>
    <Why/>
    <WhatOurClientsSay/>
    <Footer/>
   </div>
  );
}
