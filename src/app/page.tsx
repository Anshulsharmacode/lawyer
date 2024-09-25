import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurMission from "@/components/Ourmisson";
import AreaOfPractices from "@/components/Areaa";
import WhatOurClientsSay from "@/components/Testim";
import Footer from "@/components/Footerr";
import Why from "@/components/Why";
export default function Home() {
  return (
    <div>
      <Hero />
      <OurMission />
      <AreaOfPractices />
      <Why />
      {/* <WhatOurClientsSay /> */}
      <Footer />
    </div>
  );
}
