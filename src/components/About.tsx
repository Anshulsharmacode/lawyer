"use client";

import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBalanceScale, FaChartLine, FaShieldAlt, FaLandmark, FaGlobeAmericas, FaBuilding } from 'react-icons/fa';

const expertiseAreas = [
  {
    id: 1,
    icon: <FaBalanceScale className="text-5xl text-red-600" />,
    title: "Tax Compliance",
    description: "Ensuring adherence to all federal and state tax laws with meticulous attention to detail."
  },
  {
    id: 2,
    icon: <FaChartLine className="text-5xl text-red-600" />,
    title: "Tax Planning",
    description: "Developing sophisticated strategies to minimize tax liabilities and maximize financial efficiency."
  },
  {
    id: 3,
    icon: <FaShieldAlt className="text-5xl text-red-600" />,
    title: "Representation in Audits",
    description: "Providing robust defense and representation during IRS audits and tax disputes."
  },
  {
    id: 4,
    icon: <FaLandmark className="text-5xl text-red-600" />,
    title: "Estate Planning",
    description: "Crafting comprehensive estate plans to minimize taxes and protect generational wealth."
  },
  {
    id: 5,
    icon: <FaGlobeAmericas className="text-5xl text-red-600" />,
    title: "International Taxation",
    description: "Navigating the complexities of international tax laws and ensuring global compliance."
  },
  {
    id: 6,
    icon: <FaBuilding className="text-5xl text-red-600" />,
    title: "Corporate Tax Matters",
    description: "Providing strategic advice on tax implications for businesses of all sizes and structures."
  }
];

export default function About() {
  return (
    <section className="w-full py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-white">About</span> <span className="text-red-600">MK Vaidya</span>
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/mk-vaidya.jpg"
            alt="MK Vaidya"
            width={400}
            height={400}
            className="rounded-full shadow-2xl mb-8 md:mb-0 border-4 border-red-600"
          />
          <div className="md:w-1/2 md:ml-12">
            <h3 className="text-3xl font-bold text-red-600 mb-4">
              Experienced Tax Lawyer
            </h3>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              MK Vaidya is a distinguished tax lawyer with over a decade of experience in navigating the intricate landscape of tax law. His proven track record of providing exceptional legal counsel has made him a trusted advisor to individuals and businesses alike.
            </p>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              With a keen eye for detail and a deep understanding of complex tax regulations, MK Vaidya ensures his clients' rights and interests are protected while maintaining strict compliance with the law.
            </p>
          </div>
        </motion.div>

        <motion.h2
          className="text-4xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-white">Areas of</span> <span className="text-red-600">Expertise</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group h-full bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl p-6">
                <div className="flex justify-center mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Contact MK Vaidya</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            For expert assistance with your tax-related matters, don't hesitate to reach out. MK Vaidya is ready to provide the guidance you need.
          </p>
          <a
            href="mailto:mkvaidya@example.com"
            className="bg-red-600 text-white text-xl px-10 py-4 rounded-full shadow-lg hover:bg-red-700 transition-all inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email MK Vaidya
          </a>
        </motion.div>
      </div>
    </section>
  );
}