import Hero from "@/components/Hero";
import OurMission from "@/components/Ourmisson";
import Footer from "@/components/Footerr";
import Why from "@/components/Why";
import WhatOurClientsSay from "@/components/Testim"
import { Roboto } from 'next/font/google';

export default function Home() {
  return (
    <div>
      <Hero />
      <OurMission />
      {/* <AreaOfPractices /> */}
      <Why />
      <WhatOurClientsSay/>
      <Footer />
    </div>
  );
}
