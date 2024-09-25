"use client";

import React from 'react';
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="w-full py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Get in <span className="text-red-600">Touch</span>
        </motion.h2>

        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center text-white">
              <FaEnvelope className="w-6 h-6 mr-4" />
              <a href="mailto:mkvaidya@example.com" className="hover:underline">mkvaidya@example.com</a>
            </div>
            <div className="flex items-center text-white">
              <FaPhone className="w-6 h-6 mr-4" />
              <span>9425006403</span>
            </div>
            <div className="flex items-center text-white">
              <FaFacebook className="w-6 h-6 mr-4" />
              <a href="https://www.facebook.com/mkvaidya" className="hover:underline">facebook.com/mkvaidya</a>
            </div>
            <div className="flex items-center text-white">
              <FaMapMarkerAlt className="w-6 h-6 mr-4" />
              <span>123 Legal Street, Cityville, State 12345</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Urgent Matters</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            If you have an urgent matter to discuss, please don't hesitate to reach out via email at{' '}
            <a href="mailto:mkvaidya@example.com" className="text-red-600 hover:underline">mkvaidya@example.com</a>.
            We will do our best to respond as quickly as possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
