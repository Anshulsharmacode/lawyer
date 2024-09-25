"use client"
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Framer Motion animation variants for the mobile menu
  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    closed: {
      opacity: 0,
      x: '-100%',
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <nav className="bg-white border-b shadow-lg fixed z-50 w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-800">Law Firm</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="#services"
            className="text-gray-600 hover:text-blue-800 transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-blue-800 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-blue-800 transition-colors duration-300"
          >
            Contact
          </Link>
          <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all">
            Schedule Consultation
          </Button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Framer Motion animation) */}
      <motion.div
        className="fixed top-[64px] left-0 z-50 h-screen w-[70%] bg-white shadow-lg md:hidden"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="flex flex-col items-center space-y-6 py-8">
          <Link
            href="#services"
            onClick={toggleMenu}
            className="text-gray-800 text-lg hover:text-blue-800"
          >
            Services
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="text-gray-800 text-lg hover:text-blue-800"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="text-gray-800 text-lg hover:text-blue-800"
          >
            Contact
          </Link>
          <Button className="bg-blue-600 text-white w-11/12 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all">
            Schedule Consultation
          </Button>
        </div>
      </motion.div>
    </nav>
  );
}
