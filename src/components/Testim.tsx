"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    title: "CEO of Tech Innovations",
    quote:
      "The legal team helped us navigate a complex tax situation effortlessly. Their expertise was invaluable!",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    title: "Managing Director of Indian Enterprises",
    quote:
      "The guidance provided by the legal team was exceptional. They made the entire process seamless and stress-free!",
    image:
      "https://images.unsplash.com/photo-1584515932025-1c1c1c1c1c1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Priya Desai",
    title: "Founder of Creative Solutions",
    quote:
      "I was impressed by their professionalism and dedication. They truly care about their clients!",
    image:
      "https://images.unsplash.com/photo-1593642632470-8b4c1c1c1c1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  // ... (other testimonials)
];

export default function WhatOurClientsSay() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-white">What Our</span>{" "}
          <span className="text-red-600">Clients Say</span>
        </motion.h2>

        <div className="relative h-[600px] overflow-hidden">
          <AnimatePresence initial={false}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute w-64 h-96 top-1/2 left-1/2"
                initial={{
                  x:
                    index === currentIndex
                      ? "-50%"
                      : `${(index - currentIndex) * 100}%`,
                  y: "-50%",
                  rotateY: index === currentIndex ? 0 : 45,
                  z: index === currentIndex ? 0 : -100,
                }}
                animate={{
                  x: `${
                    (((index - currentIndex + testimonials.length) %
                      testimonials.length) -
                      2) *
                    100
                  }%`,
                  y: "-50%",
                  rotateY: index === currentIndex ? 0 : 45,
                  z: index === currentIndex ? 0 : -100,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl p-6 h-full">
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative h-20 w-20 rounded-full overflow-hidden mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 text-center">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {testimonial.title}
                    </p>
                  </div>
                  <p className="text-gray-800 text-sm italic leading-relaxed text-center">
                    &ldquo;{testimonial.quote}&ldquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
