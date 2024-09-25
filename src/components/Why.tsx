"use client"
import React from 'react';
import { motion } from "framer-motion";
import { FaBalanceScale, FaHandshake, FaClock, FaAward, FaUsers, FaGlobe } from 'react-icons/fa';

const whyChooseUs = [
  {
    id: 1,
    icon: <FaBalanceScale className="text-5xl text-red-600" />,
    title: "50 Years of Experience",
    description: "With half a century of legal expertise, we've successfully handled thousands of cases across various practice areas."
  },
  {
    id: 2,
    icon: <FaHandshake className="text-5xl text-red-600" />,
    title: "Client-Focused Approach",
    description: "We prioritize your needs and work tirelessly to achieve the best possible outcomes for your case."
  },
  {
    id: 3,
    icon: <FaClock className="text-5xl text-red-600" />,
    title: "24/7 Availability",
    description: "Our team is always ready to assist you, providing round-the-clock support for your legal concerns."
  },
  {
    id: 4,
    icon: <FaAward className="text-5xl text-red-600" />,
    title: "Award-Winning Team",
    description: "Our attorneys have been recognized by prestigious legal organizations for their outstanding work and dedication."
  },
  {
    id: 5,
    icon: <FaUsers className="text-5xl text-red-600" />,
    title: "Diverse Expertise",
    description: "Our team of specialists covers a wide range of legal areas, ensuring comprehensive support for all your needs."
  },
  {
    id: 6,
    icon: <FaGlobe className="text-5xl text-red-600" />,
    title: "Global Reach",
    description: "With international partnerships and multilingual staff, we're equipped to handle cases with global implications."
  }
];

export default function Why() {
  return (
    <section className="w-full py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-white">Why</span> <span className="text-red-600">Choose Us</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group h-full bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl p-6">
                <div className="flex justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
