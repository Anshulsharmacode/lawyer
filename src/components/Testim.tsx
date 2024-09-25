"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    title: "CEO of Tech Innovations",
    quote: "The legal team helped us navigate a complex tax situation effortlessly. Their expertise was invaluable!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    title: "Founder of StartUp Hub",
    quote: "MK Vaidya's tax planning strategies saved our company significant amounts. Highly recommended!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Priya Desai",
    title: "CFO of Global Enterprises",
    quote: "Their international taxation expertise was crucial for our expansion. A truly professional team!",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    name: "Vikram Mehta",
    title: "Owner of Family Business",
    quote: "The estate planning advice we received was exceptional. Our family's future is secure.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 5,
    name: "Sunita Reddy",
    title: "Director of Finance, MNC",
    quote: "Their representation during our tax audit was outstanding. We felt protected throughout the process.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
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
    <section className="w-full py-12 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-16 text-center font-serif"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-white">What Our</span> <span className="text-red-600">Clients Say</span>
        </motion.h2>

        <div className="relative h-[400px] md:h-[600px] overflow-hidden">
          <AnimatePresence initial={false}>
            {testimonials.map((testimonial, index) => {
              const offset = (index - currentIndex + testimonials.length) % testimonials.length;
              const isActive = offset === 0;
              return (
                <motion.div
                  key={testimonial.id}
                  className="absolute w-full md:w-64 h-80 md:h-96 top-1/2 left-1/2"
                  initial={{ 
                    x: `${(offset - 2) * 100}%`,
                    y: "-50%",
                    rotateY: isActive ? 0 : offset < 3 ? -45 : 45,
                    z: isActive ? 0 : -100,
                    opacity: isActive ? 1 : 0.7,
                  }}
                  animate={{ 
                    x: `${(offset - 2) * 100}%`,
                    y: "-50%",
                    rotateY: isActive ? 0 : offset < 3 ? -45 : 45,
                    z: isActive ? 0 : -100,
                    opacity: isActive ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl p-4 md:p-6 h-full">
                    <div className="flex flex-col items-center mb-4 md:mb-6">
                      <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden mb-3 md:mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center font-sans">{testimonial.name}</h3>
                      <p className="text-sm md:text-base text-gray-600 text-center font-sans">{testimonial.title}</p>
                    </div>
                    <p className="text-gray-800 text-xs md:text-sm italic leading-relaxed text-center font-serif">"{testimonial.quote}"</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}