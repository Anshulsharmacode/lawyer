"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

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
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Priya Desai",
    title: "Founder of Creative Solutions",
    quote:
      "I was impressed by their professionalism and dedication. They truly care about their clients!",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    name: "Vikram Singh",
    title: "Entrepreneur",
    quote:
      "Excellent service! They truly care about their clients and provide tailored advice.",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 5,
    name: "Meera Reddy",
    title: "CFO of Startup",
    quote:
      "Their international tax expertise saved us from potential compliance issues. Highly professional team!",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
];

export default function WhatOurClientsSay() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-24 bg-color-5 text-white overflow-clip">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-white">What Our</span>{" "}
          <span className="text-white">Clients Say</span>
        </motion.h2>

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: testimonials.length * 3,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex mt-32"
        >
          <AnimatePresence initial={false}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="flex min-w-[400px]  "
                initial={{
                  scale: 0.8,
                }}
                animate={{
                  scale: index === currentIndex ? 1 : 0.8,
                }}
                transition={{
                  duration: 0.5, // Smooth out the transition timing
                  ease: "easeInOut", // Make the easing more natural
                }}
              >
                <Card className="bg-white w-full relative text-black rounded-lg transition-all duration-300  p-6 h-full">
                  <div className="absolute -top-28 left-1/4 h-48 w-48 rounded-full  mb-4 mx-auto">
                    <Image
                      className="rounded-full"
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-center mb-2 mt-16">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {testimonial.title}
                  </p>
                  <CardContent className="text-center">
                    <p className="text-gray-800 text-sm italic leading-relaxed">
                      &ldquo;{testimonial.quote}&ldquo;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
