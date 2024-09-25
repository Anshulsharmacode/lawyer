"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Expert Legal Consultation",
    description:
      "Providing expert legal advice for corporate law and litigation.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Protect Your Rights",
    description: "Defending your rights in personal injury and criminal law cases.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
    <div className="relative w-full h-[90vh] overflow-hidden bg-gray-100">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>

                  <div className="relative z-10 h-full flex flex-col justify-center items-start text-left text-white space-y-8 px-8 md:px-16 lg:px-24 max-w-[700px]">
                    <motion.h1
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                      className="text-5xl md:text-7xl font-extrabold text-amber-100"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                      className="text-xl md:text-2xl font-light text-gray-200"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 0.7 } }}
                    >
                      <Button className="bg-amber-600 text-white px-10 py-5 text-lg rounded-none shadow-lg hover:bg-amber-700 transition-all">
                        Consult Now
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-8 flex space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-amber-600 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
