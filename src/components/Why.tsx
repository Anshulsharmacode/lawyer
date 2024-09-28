"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaHandshake,
  FaClock,
  FaAward,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";
import { Montserrat } from "next/font/google";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const montserrat = Montserrat({ subsets: ["latin"] });

const whyChooseUs = [
  {
    id: 1,
    icon: <FaBalanceScale className="text-5xl text-color-5" />,
    title: "25 Years of Experience",
    description:
      "With 25 years of legal expertise, we've successfully handled hundreds of cases across various practice areas.",
  },
  {
    id: 2,
    icon: <FaHandshake className="text-5xl text-color-5" />,
    title: "Client-Focused Approach",
    description:
      "We prioritize your needs and work tirelessly to achieve the best possible outcomes for your case.",
  },
  {
    id: 3,
    icon: <FaClock className="text-5xl text-color-5" />,
    title: "24/7 Availability",
    description:
      "Our team is always ready to assist you, providing round-the-clock support for your legal concerns.",
  },
  {
    id: 4,
    icon: <FaAward className="text-5xl text-color-5" />,
    title: "Award-Winning Team",
    description:
      "Our attorneys have been recognized by prestigious legal organizations for their outstanding work and dedication.",
  },
  {
    id: 5,
    icon: <FaUsers className="text-5xl text-color-5" />,
    title: "Diverse Expertise",
    description:
      "Our team of specialists covers a wide range of legal areas, ensuring comprehensive support for all your needs.",
  },
  {
    id: 6,
    icon: <FaGlobe className="text-5xl text-color-5" />,
    title: "Pan India Reach",
    description:
      "With nationwide partnerships and a diverse, multilingual team, we're equipped to handle cases with implications across India..",
  },
];

export default function Why() {
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
          Why Choose
          <span className="text-color-2"> Us</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {whyChooseUs.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="flex flex-col h-full bg-white border-color-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pt-8 pb-4 flex-grow">
                  <div className="mx-auto mb-6 p-4 rounded-full bg-color-5/10 text-color-5">
                    {reason.icon}
                  </div>
                  <CardTitle className="text-2xl font-semibold text-color-2">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8 flex-grow flex items-center">
                  <p className="text-color-1 text-center text-base">
                    {reason.description}
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
