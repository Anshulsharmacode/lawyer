"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Montserrat } from "next/font/google";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { ArrowRight, UserCheck } from "lucide-react";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    title: "CEO, Tech Innovations Pvt. Ltd.",
    quote:
      "Their expertise in Indian tax laws saved us crores in our recent merger. Absolutely invaluable!",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    title: "Managing Director, Kumar Enterprises",
    quote:
<<<<<<< HEAD
      "The guidance provided by the legal team was exceptional. They made the entire process seamless and stress-free!",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
=======
      "Navigating GST was a nightmare until we found this firm. They've made compliance a breeze for us.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
>>>>>>> anshul_edit
  },
  {
    id: 3,
    name: "Priya Desai",
    title: "Founder, Desai Innovations",
    quote:
<<<<<<< HEAD
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
=======
      "Their proactive approach to tax planning has significantly reduced our liabilities. Highly recommended!",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
>>>>>>> anshul_edit
  },
  // {
  //   id: 4,
  //   name: "Vikram Singh",
  //   title: "CFO, Singh Global Ventures",
  //   quote:
  //     "From income tax to international taxation, their comprehensive services have been a game-changer for our MNC.",
  //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  // },
  // {
  //   id: 5,
  //   name: "Meera Reddy",
  //   title: "Director, Reddy Startups",
  //   quote:
  //     "Their expertise in startup taxation and funding-related tax implications is unparalleled in India.",
  //   image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  // },
];

export default function WhatOurHappyClientsSay() {
  useEffect(() => {
    const timer = setInterval(() => {
<<<<<<< HEAD
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
=======
     
      // setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
>>>>>>> anshul_edit

    return () => clearInterval(timer);
  }, []);

  return (
<<<<<<< HEAD
    <section className="w-full py-24 bg-color-5 text-white overflow-clip">
=======
    <section
      className={`w-full py-24 bg-color-2 text-color-3 ${montserrat.className}`}
    >
>>>>>>> anshul_edit
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
<<<<<<< HEAD
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
=======
          <span className="text-color-3">What Our</span>{" "}
          <span className="text-color-5">Happy Clients Say</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`testimonials/${testimonial.id}`} className="block h-full">
                <Card className="group h-full bg-color-2 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-color-4/20 cursor-pointer">
                  <div className="relative h-48 w-full overflow-hidden">
>>>>>>> anshul_edit
                    <Image
                      className="rounded-full"
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105 filter grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-color-2 via-color-2/80 to-transparent"></div>
                  </div>
<<<<<<< HEAD
                  <h3 className="text-2xl font-semibold text-center mb-2 mt-16">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {testimonial.title}
                  </p>
                  <CardContent className="text-center">
                    <p className="text-gray-800 text-sm italic leading-relaxed">
                      &ldquo;{testimonial.quote}&ldquo;
=======
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-color-5 mb-2 flex items-center">
                      <UserCheck className="mr-2 w-5 h-5" />
                      {testimonial.name}
                    </h3>
                    <p className="text-color-3/80 text-sm mb-4">
                      {testimonial.title}
>>>>>>> anshul_edit
                    </p>
                    <div className="relative">
                      <FaQuoteLeft className="absolute top-0 left-0 text-color-5/20 text-3xl" />
                      <p className="text-color-3/80 text-sm italic leading-relaxed px-8 py-2">
                        {testimonial.quote}
                      </p>
                      <FaQuoteRight className="absolute bottom-0 right-0 text-color-5/20 text-3xl" />
                    </div>
                  </CardContent>
                </Card>
<<<<<<< HEAD
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
=======
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <motion.button
            className="group inline-flex items-center text-color-5 hover:text-color-4 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2 text-lg font-medium">View All Testimonials</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </div>
>>>>>>> anshul_edit
      </div>
    </section>
  );
}