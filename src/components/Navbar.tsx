"use client";
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    <nav className="bg-black text-white border-b border-gray-800">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold font-serif"><span className="text-red-600">MK</span> Vaidhya</div>
          {isMobile ? (
            <button
              onClick={toggleMenu}
              className="text-white text-2xl focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          ) : (
            <div className="flex space-x-6 items-center">
              <Link href="#services" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-sans">
                Services
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-sans">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-sans">
                Contact
              </Link>
              <Button className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition-all font-sans">
                Schedule Consultation
              </Button>
            </div>
          )}
        </div>
      </div>

      {isMobile && (
        <motion.div
          className="fixed top-[76px] left-0 z-50 h-screen w-full bg-black shadow-lg"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          <div className="flex flex-col items-center space-y-6 py-8">
            <Link
              href="#services"
              onClick={toggleMenu}
              className="text-white text-xl hover:text-red-600 transition-colors duration-300 font-sans"
            >
              Services
            </Link>
            <Link
              href="/about"
              onClick={toggleMenu}
              className="text-white text-xl hover:text-red-600 transition-colors duration-300 font-sans"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="text-white text-xl hover:text-red-600 transition-colors duration-300 font-sans"
            >
              Contact
            </Link>
            <Button className="bg-red-600 text-white w-11/12 py-3 rounded-lg shadow-md hover:bg-red-700 transition-all text-lg font-sans">
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
