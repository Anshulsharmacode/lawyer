"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Montserrat, Cinzel } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const cinzel = Cinzel({ subsets: ["latin"] });

const logoSrc = "/mkv.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
      x: "-100%",
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/practice-areas", label: "Practice Areas" },
    // { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`bg-color-1 shadow-lg z-50 w-full ${montserrat.className}`}>
      <div className="flex items-center justify-between">
        <div className="container mx-auto flex flex-col items-center justify-between py-4 px-8">
          <img
            src={logoSrc}
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <div
            className={`text-[30px] md:text-[35px] font-weight-[400] leading-[35px] text-color-4 tracking-[1px] ${cinzel.className}`}
          >
            <span className="underline underline-offset-4">
              Munindra Kumar Vaidya
            </span>{" "}
            & <span className="underline underline-offset-4">Associates</span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`text-color-3 hover:text-color-4 transition-colors duration-300 text-lg font-medium ${
                    pathname === item.href ? "text-color-4" : ""
                  }`}
                >
                  {item.label}
                </Link>
                {pathname === item.href && (
                  <div className="absolute bottom-[-8px] left-0 w-full h-1 bg-color-5"></div>
                )}
              </div>
            ))}
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden absolute right-8 top-6">
            <button
              onClick={toggleMenu}
              className="text-color-3 text-3xl focus:outline-none p-2"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Framer Motion animation) */}
        <motion.div
          className="fixed top-[88px] left-0 z-50 h-screen w-full bg-color-2 shadow-lg md:hidden"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          <div className="flex flex-col items-center space-y-8 py-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
                className={`text-color-4 text-xl font-medium hover:text-color-5 transition-colors duration-300 ${
                  pathname === item.href ? "text-color-5" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Schedule a Call Button (Mobile) */}
            {/* <Link
              href="https://cal.com/m.k.-vaidya-associates"
              target="_blank"
              className="bg-color-4 text-white py-2 px-6 rounded-full shadow-lg hover:bg-color-5 transition duration-300 transform hover:scale-105"
            >
              Schedule a Call
            </Link> */}
          </div>
        </motion.div>
        {/* <div className="hidden md:flex items-center">
          <Link
            href="https://cal.com/m.k.-vaidya-associates"
            target="_blank"
            className="bg-color-4 text-white py-2 px-6 rounded-full shadow-lg hover:bg-color-5 transition duration-300 transform hover:scale-105"
          >
            Schedule 
            a Call
          </Link>
        </div> */}
      </div>
    </nav>
  );
}
