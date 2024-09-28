"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { Montserrat } from "next/font/google";
import { FaMapMarkerAlt } from "react-icons/fa";

const montserrat = Montserrat({ subsets: ["latin"] });

const Map: React.FC = () => {
  return (
    <section className={`w-full py-24 bg-color-5 ${montserrat.className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-color-3">Contact</span>{" "}
          <span className="text-color-2">Us</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
          >
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-4 text-color-2 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-red-500" />
                Our Location
              </h3>
              <div className="flex-grow relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.68784216164443!2d77.43235340000001!3d23.234228500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4267af2a7cbd%3A0xb2e0c68bd1948b80!2sGayatri%20Apartment!5e0!3m2!1sen!2sin!4v1709653949407!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                ></iframe>
              </div>
              <p className="mt-4 text-color-2">
                Plot No. 225, Flat - C, Gayatri Apartment, Zone-1, M.P. Nagar,
                behind Hotel Nisarga, Bhopal, Madhya Pradesh, India
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Map;
