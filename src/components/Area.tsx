"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Shield } from "lucide-react"; // Importing icons

const practiceAreas = [
  {
    id: 1,
    title: "Corporate Tax Planning",
    description: "Optimize your business tax strategy",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/corporate-tax-planning",
  },
  {
    id: 2,
    title: "Tax Dispute Resolution",
    description: "Expert representation in tax conflicts",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/tax-dispute-resolution",
  },
  {
    id: 3,
    title: "International Taxation",
    description: "Navigate global tax complexities",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/international-taxation",
  },
  {
    id: 4,
    title: "Tax Audit Defense",
    description: "Protect your interests during audits",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/tax-audit-defense",
  },
  {
    id: 5,
    title: "Estate & Gift Tax Planning",
    description: "Secure your legacy and assets",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/estate-gift-tax-planning",
  },
  {
    id: 6,
    title: "Small Business Tax Strategies",
    description: "Tailored solutions for growing businesses",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/small-business-tax-strategies",
  },
];

export default function AreasOfExpertise() {
  return (
    <section className="w-full py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-white">Areas</span> <span className="text-red-600">of Expertise</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group h-full bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105 filter grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                    <Briefcase className="mr-2 text-red-600" /> {/* Icon for profession */}
                    {area.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">
                    {area.description}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href={area.link} passHref className="group inline-flex items-center text-red-600 hover:text-red-800 transition-colors duration-300">
                    <span className="mr-2 text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
