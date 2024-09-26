"use client";
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import ContactForm from "./ContactForm";

const montserrat = Montserrat({ subsets: ["latin"] });

interface ContactItemProps {
  icon: IconType;
  children: React.ReactNode;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  children,
  href,
}) => {
  const content = href ? (
    <a
      href={href}
      className="hover:text-color-5 transition-colors duration-300"
    >
      {children}
    </a>
  ) : (
    <span>{children}</span>
  );

  return (
    <motion.div
      className="flex items-center text-color-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Icon className="w-6 h-6 mr-4 flex-shrink-0 text-color-5" />
      <span className="text-lg">{content}</span>
    </motion.div>
  );
};

const Contact: React.FC = () => {
  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-color-1 to-color-2 py-24 px-4 sm:px-6 lg:px-8 ${montserrat.className}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold text-center text-color-3 mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in <span className="text-color-5">Touch</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
          <motion.div
            className="bg-color-1 shadow-2xl rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-10">
              <h2 className="text-3xl font-bold text-center text-color-5 mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <ContactItem
                  icon={FaEnvelope}
                  href="mailto:adv.mkvaidya@gmail.com"
                >
                  adv.mkvaidya@gmail.com
                </ContactItem>
                <ContactItem icon={FaPhone}>9425006403</ContactItem>
                <ContactItem
                  icon={FaFacebook}
                  href="https://www.facebook.com/mkvaidya"
                >
                  facebook.com/mkvaidya
                </ContactItem>
                <ContactItem icon={FaMapMarkerAlt}>
                  Plot No. 225, Flat - C, Gayatri Apartment, Zone-1, M.P. Nagar,
                  behind Hotel Nisarga, Bhopal (Madhya Pradesh)
                </ContactItem>
              </div>
            </div>
          </motion.div>
          {/* <motion.div
            className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/mk-vaidya.jpg"
              alt="MK Vaidya's Office"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div> */}
        </div>
        <ContactForm />
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-color-5 mb-6">
            Urgent Matters
          </h2>
          <p className="text-color-3 max-w-2xl mx-auto text-lg">
            If you have an urgent matter to discuss, please don&apos;t hesitate
            to reach out via email at{" "}
            <a
              href="mailto:mkvaidya@example.com"
              className="text-color-5 hover:text-color-4 transition-colors duration-300 font-semibold"
            >
              adv.mkvaidya@gmail.com
            </a>
            . We will do our best to respond as quickly as possible.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
