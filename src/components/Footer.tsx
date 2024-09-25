"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-white">Connect</span> <span className="text-red-600">With Us</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="h-full p-6 bg-black shadow-lg rounded-lg">
              <p className="text-gray-600 text-sm">
                Providing expert legal services with integrity and dedication. Your trusted partner in navigating complex legal matters.
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-full p-6 bg-black shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="text-gray-600 hover:text-red-600 transition-colors">Home</Link>
                <Link href="/about" className="text-gray-600 hover:text-red-600 transition-colors">About Us</Link>
                <Link href="/services" className="text-gray-600 hover:text-red-600 transition-colors">Services</Link>
                <Link href="/practice-areas" className="text-gray-600 hover:text-red-600 transition-colors">Practice Areas</Link>
                <Link href="/contact" className="text-gray-600 hover:text-red-600 transition-colors">Contact</Link>
              </nav>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="h-full p-6 bg-black shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Contact Us</h3>
              <p className="text-gray-600 mb-2">123 Legal Street, Cityville</p>
              <p className="text-gray-600 mb-2">State, Country 12345</p>
              <p className="text-gray-600 mb-2">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-600 mb-2">Email: info@lawfirm.com</p>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="h-full p-6 bg-black shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook className="h-6 w-6 text-gray-600 hover:text-red-600 transition-colors" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter className="h-6 w-6 text-gray-600 hover:text-red-600 transition-colors" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="h-6 w-6 text-gray-600 hover:text-red-600 transition-colors" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="h-6 w-6 text-gray-600 hover:text-red-600 transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Your Law Firm Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
