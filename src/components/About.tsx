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
        {/* <motion.h1
          className="text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-color-3">About</span>{" "}
          <span className="text-color-5">MK Vaidya</span>
        </motion.h1> */}

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/mk-vaidya.jpg"
              alt="MK Vaidya"
              width={400}
              height={400}
              className="rounded-full shadow-2xl border-4 border-color-5"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl font-bold text-color-5 mb-4">
              Experienced Tax Lawyer
            </h2>
            <p className="text-xl text-color-3 mb-6 leading-relaxed">
              MK Vaidya is a distinguished tax lawyer with over a decade of
              experience in navigating the intricate landscape of tax law. His
              proven track record of providing exceptional legal counsel has
              made him a trusted advisor to individuals and businesses alike.
            </p>
            <p className="text-xl text-color-3 mb-6 leading-relaxed">
              With a keen eye for detail and a deep understanding of complex tax
              regulations, MK Vaidya ensures his clients&apos; rights and
              interests are protected while maintaining strict compliance with
              the law.
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
            title="Tax Compliance"
            description="Ensuring adherence to all federal and state tax laws with meticulous attention to detail."
          />
          <ExpertiseCard
            icon={<FaChartLine className="text-5xl text-color-5 mb-4" />}
            title="Tax Planning"
            description="Developing sophisticated strategies to minimize tax liabilities and maximize financial efficiency."
          />
          <ExpertiseCard
            icon={<FaShieldAlt className="text-5xl text-color-5 mb-4" />}
            title="Representation in Audits"
            description="Providing robust defense and representation during IRS audits and tax disputes."
          />
          <ExpertiseCard
            icon={<FaLandmark className="text-5xl text-color-5 mb-4" />}
            title="Estate Planning"
            description="Crafting comprehensive estate plans to minimize taxes and protect generational wealth."
          />
          <ExpertiseCard
            icon={<FaGlobeAmericas className="text-5xl text-color-5 mb-4" />}
            title="International Taxation"
            description="Navigating the complexities of international tax laws and ensuring global compliance."
          />
          <ExpertiseCard
            icon={<FaBuilding className="text-5xl text-color-5 mb-4" />}
            title="Corporate Tax Matters"
            description="Providing strategic advice on tax implications for businesses of all sizes and structures."
          />
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-color-5">
            Contact MK Vaidya
          </h2>
          <p className="text-xl text-color-3 mb-8 max-w-2xl mx-auto">
            For expert assistance with your tax-related matters, don&apos;t
            hesitate to reach out. MK Vaidya is ready to provide the guidance
            you need.
          </p>
          <a
            href="mailto:mkvaidya@example.com"
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
            Email MK Vaidya
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
