"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaBalanceScale,
  FaChartLine,
  FaShieldAlt,
  FaLandmark,
  FaGlobeAmericas,
  FaBuilding,
} from "react-icons/fa";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const About = () => {
  return (
    <section
      className={`w-full py-24 px-2 md:px-32 bg-color-2 text-color-3 ${montserrat.className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/mk-vaidya.jpg"
              alt="Munindra Kumar Vaidya"
              width={400}
              height={400}
              className="rounded-full shadow-2xl border-4 border-color-5"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl font-bold text-color-5 mb-4">
              Distinguished Tax Advocate
            </h2>
            <p className="text-xl text-color-3 mb-6 leading-relaxed">
              Munindra Kumar Vaidya is a distinguished tax advocate known for his
              exceptional expertise in navigating the intricate landscape of tax law.
              With over 25 years of dedicated experience, Mr. Vaidya has become a
              trusted advisor for individuals and businesses alike, offering strategic
              guidance on a wide range of tax-related issues.
            </p>
            <p className="text-xl text-color-3 mb-6 leading-relaxed">
              Specializing in tax law, he possesses a deep understanding of both Direct
              and Indirect tax regulations, including Income Tax, Goods and Services Tax,
              Sales Tax, Value Added Tax, Excise Duty, and more. His meticulous attention
              to detail and ability to simplify complex tax concepts make him an invaluable
              resource for clients facing challenging tax dilemmas.
            </p>
          </div>
        </motion.div>

        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-color-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Areas of Expertise
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ExpertiseCard
            icon={<FaBalanceScale className="text-5xl text-color-5 mb-4" />}
            title="Direct & Indirect Tax"
            description="Expert in Income Tax, GST, VAT, and Excise Duty, ensuring compliance and strategic planning."
          />
          <ExpertiseCard
            icon={<FaChartLine className="text-5xl text-color-5 mb-4" />}
            title="Tax Litigation"
            description="Successfully represented clients in high-profile tax cases, optimizing their tax positions."
          />
          <ExpertiseCard
            icon={<FaShieldAlt className="text-5xl text-color-5 mb-4" />}
            title="Tax Policy Advocacy"
            description="Actively involved in shaping tax policy, contributing to industry discussions and publications."
          />
          <ExpertiseCard
            icon={<FaLandmark className="text-5xl text-color-5 mb-4" />}
            title="Advisory Roles"
            description="Ex-President of Bhopal Tax Practitioner Association and member of several tax law organizations."
          />
          <ExpertiseCard
            icon={<FaGlobeAmericas className="text-5xl text-color-5 mb-4" />}
            title="Corporate & International Tax"
            description="Providing strategic tax consulting for businesses and navigating international tax compliance."
          />
          <ExpertiseCard
            icon={<FaBuilding className="text-5xl text-color-5 mb-4" />}
            title="Pro Bono Work"
            description="Committed to making tax law accessible, offering pro bono legal services for those in need."
          />
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-color-5">
            Contact Munindra Kumar Vaidya
          </h2>
          <p className="text-xl text-color-3 mb-8 max-w-2xl mx-auto">
            For expert assistance with your tax-related matters, don&apos;t hesitate
            to reach out. Mr. Vaidya is ready to provide the guidance you need.
          </p>
          <a
            href="mailto:adv.mkvaidya@gmail.com"
            className="bg-color-5 text-color-3 text-xl px-10 py-4 rounded-full shadow-lg hover:bg-color-4 transition-all inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email Munindra Kumar Vaidya
          </a>
        </motion.div>
      </div>
    </section>
  );
};

interface ExpertiseCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="h-full p-6 bg-color-1 shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
    {icon}
    <h3 className="text-xl font-semibold text-color-5 mb-3">{title}</h3>
    <p className="text-color-3">{description}</p>
  </div>
);

export default About;
