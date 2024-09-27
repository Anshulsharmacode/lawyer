"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import ContactForm from "./ContactForm";
import Image from "next/image"; // Importing Image from next/image

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer
      className={`w-full py-24 bg-color-2 text-color-3 ${montserrat.className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-color-3">Connect</span>{" "}
          <span className="text-color-5">With Us</span>
        </motion.h2>

        <ContactForm />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="h-full p-6 bg-color-1 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-color-5">
                About Us
              </h3>
              <p className="text-color-3 text-sm">
                Providing expert legal services with integrity and dedication.
                Your trusted partner in navigating complex tax matters.
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-full p-6 bg-color-1 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-color-5">
                Quick Links
              </h3>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="text-color-3 hover:text-color-4 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-color-3 hover:text-color-4 transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="#practice-areas"
                  className="text-color-3 hover:text-color-4 transition-colors"
                >
                  Practice Areas
                </Link>
                <Link
                  href="/contact"
                  className="text-color-3 hover:text-color-4 transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="h-full p-6 bg-color-1 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-color-5">
                Contact Us
              </h3>
              <p className="text-color-3 mb-2">
                Plot No. 225, Flat - C, Gayatri Apartment, Zone-1, M.P. Nagar,
                behind Hotel Nisarga, Bhopal
              </p>
              <p className="text-color-3 mb-2">Madhya Pradesh, India</p>
              <p className="text-color-3 mb-2">Phone: +91 9425006403</p>
              <p className="text-color-3 mb-2">Email: adv.mkvaidya@gmail.com</p>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="h-full p-6 bg-color-1 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-color-5">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-6 w-6 text-color-3 hover:text-color-4 transition-colors" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter className="h-6 w-6 text-color-3 hover:text-color-4 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-6 w-6 text-color-3 hover:text-color-4 transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-6 w-6 text-color-3 hover:text-color-4 transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gap between links and banner */}
        <div className="my-8" />

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="h-full p-6 bg-color-1 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-color-5">
              Our Location
            </h3>
            <a
              href="https://www.google.com/maps/place/Gayatri+Apartment/@23.2341835,77.4323946,20z/data=!4m7!3m6!1s0x397c4267af2a7cbd:0xb2e0c68bd1948b80!4b1!8m2!3d23.2342285!4d77.4324295!16s%2Fg%2F11b7q0p7dy?entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-color-3 hover:text-color-4 transition-colors"
            >
              <Image
                src="/map-full.png"
                alt="Map Location"
                className="w-full h-auto rounded-lg"
                width={500} // Specify width for optimization
                height={300} // Specify height for optimization
              />
            </a>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-color-1 text-center">
          <p className="text-color-3 text-sm">
            &copy; {new Date().getFullYear()} Munindra Kumar Vaidya &
            Associates. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
