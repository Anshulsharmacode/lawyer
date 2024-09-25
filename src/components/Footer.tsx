"use client";

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80"
              alt="Law Firm Logo"
              width={200}
              height={100}
              className="mb-4"
            />
            <p className="text-gray-400 mt-4">
              Providing expert legal services with integrity and dedication. Your trusted partner in navigating complex legal matters.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-500">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-400 hover:text-amber-500 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-amber-500 transition-colors">About Us</Link>
              <Link href="/services" className="text-gray-400 hover:text-amber-500 transition-colors">Services</Link>
              <Link href="/practice-areas" className="text-gray-400 hover:text-amber-500 transition-colors">Practice Areas</Link>
              <Link href="/contact" className="text-gray-400 hover:text-amber-500 transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-500">Contact Us</h3>
            <p className="text-gray-400 mb-2">123 Legal Street, Cityville</p>
            <p className="text-gray-400 mb-2">State, Country 12345</p>
            <p className="text-gray-400 mb-2">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-400 mb-2">Email: info@lawfirm.com</p>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="h-6 w-6 text-gray-400 hover:text-amber-500 transition-colors" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="h-6 w-6 text-gray-400 hover:text-amber-500 transition-colors" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="h-6 w-6 text-gray-400 hover:text-amber-500 transition-colors" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="h-6 w-6 text-gray-400 hover:text-amber-500 transition-colors" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Your Law Firm Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
