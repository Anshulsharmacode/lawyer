"use client";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase } from "lucide-react";

const practiceAreas = [
  {
    id: 1,
    title: "Income Tax Return Filing",
    description: "Optimize your business tax strategy",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "practice-areas/corporate-tax-planning",
  },
  {
    id: 2,
    title: "GST Return Filing",
    description: "Expert representation in tax conflicts",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "practice-areas/tax-dispute-resolution",
  },
  {
    id: 3,
    title: "Tax Dispute Resolution",
    description: "Navigate global tax complexities",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "practice-areas/international-taxation",
  },
  {
    id: 4,
    title: "Corporate Tax Services",
    description: "Protect your interests during audits",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "practice-areas/tax-audit-defense",
  },
  {
    id: 5,
    title: "Tax Audit Service",
    description: "Secure your legacy and assets",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "practice-areas/estate-gift-tax-planning",
  },
  {
    id: 6,
    title: "Accounting Services",
    description: "Accounting Services",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "practice-areas/small-business-tax-strategies",
  },
];

export default function AreasOfExpertise() {
  return (
    <section
      id="practice-areas"
      className={`w-full py-24 bg-color-2 text-color-3 ${montserrat.className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-color-3">Areas of</span>{" "}
          <span className="text-color-5">Expertise</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group h-full bg-color-2 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-color-4/20">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105 filter grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-color-2 via-color-2/80 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-color-5 mb-2 flex items-center">
                    <Briefcase className="mr-2 w-5 h-5" />
                    {area.title}
                  </h3>
                  <p className="text-color-3/80 text-sm mb-4">
                    {area.description}
                  </p>
                  <Link
                    href={`practice-areas/${area.id}`}
                    className="group inline-flex items-center text-color-5 hover:text-color-4 transition-colors duration-300"
                  >
                    <span className="mr-2 text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
