"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function OurMission() {
  return (
    <div className="w-full min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Professional Lawyer Office"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-6xl font-serif text-white mb-4 text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          >
            Navigating Tax Law with Expertise
          </motion.h1>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="w-full py-16 md:py-24 flex flex-col justify-center items-center text-center px-6 md:px-12 bg-white">
        <motion.h2
          className="text-3xl md:text-5xl font-serif text-slate-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        >
          Our Mission
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-slate-600 max-w-3xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
        >
          At our law firm, we are dedicated to providing expert guidance through the
          intricate landscape of tax law. Our mission is to ensure our clients'
          compliance while vigorously protecting their rights and assets. With years
          of experience and a commitment to excellence, we strive to deliver
          tailored solutions that meet the unique needs of each individual and business we serve.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.7 } }}
        >
          <Button className="bg-slate-800 text-white px-8 py-4 text-lg rounded-none hover:bg-slate-700 transition-all duration-300 shadow-lg">
            Discover Our Expertise
          </Button>
        </motion.div>
      </div>

      {/* Values Section */}
      <div className="w-full py-16 md:py-24 bg-slate-100 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          >
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              alt="Integrity"
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <h3 className="text-2xl font-serif text-slate-800 mb-4">Integrity</h3>
            <p className="text-slate-600">We uphold the highest ethical standards in all our practices.</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
          >
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              alt="Expertise"
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <h3 className="text-2xl font-serif text-slate-800 mb-4">Expertise</h3>
            <p className="text-slate-600">Our team brings deep knowledge and experience to every case.</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
          >
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              alt="Client-Focused"
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <h3 className="text-2xl font-serif text-slate-800 mb-4">Client-Focused</h3>
            <p className="text-slate-600">Your success and satisfaction are our top priorities.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
