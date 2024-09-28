"use client";
import React from "react";
import { data } from "./practices";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle } from "lucide-react";

const AreaPage = ({ params }: { params: { slug: string } }) => {
  const id = Number(params.slug);
  const practice = data[id - 1];

  return (
    <div className="bg-color-2 py-24 px-0 lg:px-8">
      <div className="container mx-auto max-w-7xl p-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-2xl py-8 px-4 sm:p-8 rounded-lg bg-color-1">
            <CardHeader>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CardTitle className="text-5xl font-bold text-color-5 mb-6">
                  {practice.title}
                </CardTitle>
              </motion.div>
            </CardHeader>
            <CardContent>
              <motion.p
                className="text-xl text-color-3 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {practice.body}
              </motion.p>

              <motion.h2
                className="text-3xl font-bold text-color-5 mb-8 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Briefcase className="mr-4 text-color-4" />
                Services Offered
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {practice.services.map((s, index) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                  >
                    <Card className="h-full border-l-4 border-color-4 pl-4 bg-color-1 hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-2xl font-semibold text-color-4">
                          {s.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-color-3">{s.body}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.h2
                className="text-3xl font-bold text-color-5 mb-8 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <CheckCircle className="mr-4 text-color-4" />
                Why Choose Us?
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {practice.whychoose.map((s, index) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                  >
                    <Card className="h-full border-l-4 border-color-4 pl-4 bg-color-1 hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-2xl font-semibold text-color-4">
                          {s.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-color-3">{s.body}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="text-xl text-color-3 mt-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                {practice.end}
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AreaPage;
