"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    title: "CEO of Tech Innovations",
    quote: "The legal team helped us navigate a complex tax situation effortlessly. Their expertise was invaluable!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    title: "Small Business Owner",
    quote: "I highly recommend their services. They made the tax process straightforward and stress-free.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Priya Verma",
    title: "Freelancer",
    quote: "Their guidance on tax compliance was clear and precise. I felt supported throughout the process.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    name: "Vikram Singh",
    title: "Entrepreneur",
    quote: "Excellent service! They truly care about their clients and provide tailored advice.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
  },
];

export default function WhatOurClientsSay() {
  return (
    <div className="w-full py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-serif font-bold text-gray-800 mb-16 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          Client <span></span> Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: testimonial.id * 0.1 } }}
            >
              <Card className="w-full bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-300 hover:shadow-3xl transform hover:-translate-y-2">
                <CardHeader className="p-6 bg-blue-700 text-white flex items-center space-x-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-blue-200">{testimonial.title}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 text-lg italic leading-relaxed">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
