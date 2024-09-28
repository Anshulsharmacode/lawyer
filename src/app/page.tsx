import Hero from "@/components/Hero";
import OurMission from "@/components/Ourmisson";

import Why from "@/components/Why";
import AreasOfExpertise from "@/components/Areaa";
import WhatOurClientsSay from "@/components/Testim";
import Map from "@/components/map";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurMission />
      <AreasOfExpertise />
      <Why />
      <WhatOurClientsSay />
      <Map />
    </div>
  );
}
