"use client";

import { motion } from "framer-motion";
import { Shield, Scale, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const missions = [
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in all our practices.",
  },
  {
    icon: <Scale className="h-10 w-10" />,
    title: "Expertise",
    description: "Our team brings deep knowledge and experience to every case.",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Client-Focused",
    description: "Your success and satisfaction are our top priorities.",
  },
];

export default function OurMission() {
  return (
    <section
      className={`w-full py-24 bg-color-5 text-color-1 min-h-screen flex items-center ${montserrat.className}`}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold mb-20 text-center text-color-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Mission
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-color-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pt-8 pb-4">
                  <div className="mx-auto mb-6 p-4 rounded-full bg-color-5/10 text-color-5">
                    {mission.icon}
                  </div>
                  <CardTitle className="text-2xl font-semibold text-color-2">
                    {mission.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <p className="text-color-1 text-center text-base">
                    {mission.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
