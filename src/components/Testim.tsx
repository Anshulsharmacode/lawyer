"use client";

import React from "react";
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
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    title: "Managing Director, Kumar Enterprises",
    quote:
      "Navigating GST was a nightmare until we found this firm. They've made compliance a breeze for us.",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Priya Desai",
    title: "Founder, Desai Innovations",
    quote:
      "Their proactive approach to tax planning has significantly reduced our liabilities. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function WhatOurHappyClientsSay() {
  return (
    <section
      className={`w-full py-24 bg-color-2 text-color-3 ${montserrat.className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
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
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105 filter grayscale"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-color-5 mb-2 flex items-center">
                      <UserCheck className="mr-2 w-5 h-5" />
                      {testimonial.name}
                    </h3>
                    <p className="text-color-3/80 text-sm mb-4">
                      {testimonial.title}
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
      </div>
    </section>
  );
}
