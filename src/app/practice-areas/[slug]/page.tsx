"use client";
import React from "react";
import { data } from "./practices";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AreaPage = ({ params }: { params: { slug: string } }) => {
  const id = Number(params.slug);
  const practice = data[id - 1];
  return (
    <div className="bg-color-2 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <Card className="shadow-2xl p-8 rounded-lg bg-color-1">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-color-5 mb-6">
              {practice.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-color-3 mb-8">{practice.body}</p>

            <h2 className="text-3xl font-bold text-color-5 mb-4">
              Services Offered:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {practice.services.map((s) => (
                <Card
                  key={s.id}
                  className="border-l-4 border-color-4 pl-4 bg-color-1 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-color-4">
                      {s.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-color-3">{s.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-color-5 mb-4">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {practice.whychoose.map((s) => (
                <Card
                  key={s.id}
                  className="border-l-4 border-color-4 pl-4 bg-color-1 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-color-4">
                      {s.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-color-3">{s.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-lg text-color-3">{practice.end}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AreaPage;
