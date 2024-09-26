import Hero from "@/components/Hero";
import OurMission from "@/components/Ourmisson";
import Footer from "@/components/Footerr";
import Why from "@/components/Why";
import AreasOfExpertise from "@/components/Areaa";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurMission />
      <AreasOfExpertise />
      <Why />
      {/* <WhatOurClientsSay/> */}
      <Footer />
    </div>
  );
}
