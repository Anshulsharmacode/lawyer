"use client"
import React from "react";
import {data} from "./practices"

const AreaPage = ({ params }: { params: { slug: string } }) => {
  const id = Number(params.slug);
  const practice = data[id-1]
  return (
    <div className="bg-color-2 p-8">
      <div className="md:w-[70%] mx-auto bg-color-2 shadow-lg p-6 rounded-lg">
        <h1 className="text-3xl font-bold text-color-5 mb-4">
          {practice.title}
        </h1>
        <p className="text-lg text-color-3 mb-6">{practice.body}</p>

        <h2 className="text-2xl font-bold text-color-5 mb-3">
          Services Offered:
        </h2>
        <ul className="space-y-4 mb-6">
          {practice.services.map((s) => (
            <li key={s.id} className="border-l-4 border-color-4 pl-4">
              <h3 className="text-xl font-semibold text-color-4">{s.title}</h3>
              <p className="text-color-3">{s.body}</p>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-color-5 mb-3">Why Choose Us?</h2>
        <ul className="space-y-4 mb-6">
          {practice.whychoose.map((s) => (
            <li key={s.id} className="border-l-4 border-color-4 pl-4">
              <h3 className="text-xl font-semibold text-color-4">{s.title}</h3>
              <p className="text-color-3">{s.body}</p>
            </li>
          ))}
        </ul>

        <p className="text-lg text-color-3">
          {practice.end}
        </p>
      </div>
    </div>
  );
};

export default AreaPage;
