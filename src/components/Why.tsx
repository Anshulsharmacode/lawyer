"use client"
import React from 'react';
import { FaBalanceScale, FaHandshake, FaClock, FaAward, FaUsers, FaGlobe } from 'react-icons/fa';

const Why: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-black text-center mb-12">
          <span className="text-red-500">Why</span > Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <WhyCard
            icon={<FaBalanceScale className="text-5xl text-blue-600" />}
            title="50 Years of Experience"
            description="With half a century of legal expertise, we've successfully handled thousands of cases across various practice areas."
          />
          <WhyCard
            icon={<FaHandshake className="text-5xl text-blue-600" />}
            title="Client-Focused Approach"
            description="We prioritize your needs and work tirelessly to achieve the best possible outcomes for your case."
          />
          <WhyCard
            icon={<FaClock className="text-5xl text-blue-600" />}
            title="24/7 Availability"
            description="Our team is always ready to assist you, providing round-the-clock support for your legal concerns."
          />
          <WhyCard
            icon={<FaAward className="text-5xl text-blue-600" />}
            title="Award-Winning Team"
            description="Our attorneys have been recognized by prestigious legal organizations for their outstanding work and dedication."
          />
          <WhyCard
            icon={<FaUsers className="text-5xl text-blue-600" />}
            title="Diverse Expertise"
            description="Our team of specialists covers a wide range of legal areas, ensuring comprehensive support for all your needs."
          />
          <WhyCard
            icon={<FaGlobe className="text-5xl text-blue-600" />}
            title="Global Reach"
            description="With international partnerships and multilingual staff, we're equipped to handle cases with global implications."
          />
        </div>
      </div>
    </div>
  );
};

interface WhyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyCard: React.FC<WhyCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default Why;
