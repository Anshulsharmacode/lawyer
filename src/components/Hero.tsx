"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Expert Legal Consultation",
    description:
      "Providing expert legal advice for IT & GST Return filing, Tax and Corporate Litigation before IT Tribunal, GST Tribunal, High Court of Madhya Pradesh etc",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Protect Your Rights",
    description:
      "Proven Expertise in defending your rights in criminal cases under Bhartiya Nyaya Sanhita/Indian Penal Code, Offences under Cyber Crimes, White Collar Crimes (PMLA, PCA, etc).",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Business Law Solutions",
    description:
      "Comprehensive legal solutions for your business and contracts.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.8 } },
  };

  return (
    <div
      className={`relative w-full h-screen pt-16 overflow-hidden bg-color-1 ${montserrat.className}`}
    >
      <div className="absolute inset-0">
        <AnimatePresence>
          {slides.map(
            (slide, index) =>
              index === currentSlide && (
                <motion.div
                  key={slide.id}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-color-2/90 to-transparent"></div>

                  <div className="relative z-10 h-full flex flex-col justify-center items-start text-left text-color-3 space-y-8 px-8 md:px-16 lg:px-24 max-w-[800px]">
                    <motion.h1
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                      className="text-5xl md:text-7xl font-extrabold text-color-3 leading-tight"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                      className="text-xl md:text-2xl font-light text-color-3 max-w-2xl"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 0.7 } }}
                    >
                      <Button className="bg-color-5 text-color-1 px-10 py-6 text-lg font-semibold rounded-md shadow-lg hover:bg-color-4 hover:text-color-2 transition-all duration-300 transform hover:scale-105">
                        Consult Now
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-8 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-color-5 scale-125"
                : "bg-color-3/50 hover:bg-color-3/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
