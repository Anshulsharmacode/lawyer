"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function OurMission() {
  return (
 
      
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
  
  );
}
