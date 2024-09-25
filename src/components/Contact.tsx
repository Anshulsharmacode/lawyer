"use client"
import React from 'react';
import { FaEnvelope, FaPhone, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Get in <span className="text-amber-600">Touch</span>
        </h1>
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="p-8 bg-amber-600">
            <h2 className="text-3xl font-bold justify-center text-white mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center text-white">
                <FaEnvelope className="w-6 h-6 mr-4" />
                <a href="mailto:mkvaidya@example.com" className="hover:underline">mkvaidya@example.com</a>
              </div>
              <div className="flex items-center text-white">
                <FaPhone className="w-6 h-6 mr-4" />
                <span>9425006403</span>
              </div>
              <div className="flex items-center text-white">
                <FaFacebook className="w-6 h-6 mr-4" />
                <a href="https://www.facebook.com/mkvaidya" className="hover:underline">facebook.com/mkvaidya</a>
              </div>
              <div className="flex items-center text-white">
                <FaMapMarkerAlt className="w-6 h-6 mr-4" />
                <span>123 Legal Street, Cityville, State 12345</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Urgent Matters</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            If you have an urgent matter to discuss, please don't hesitate to reach out via email at{' '}
            <a href="mailto:mkvaidya@example.com" className="text-amber-600 hover:underline">mkvaidya@example.com</a>.
            We will do our best to respond as quickly as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
