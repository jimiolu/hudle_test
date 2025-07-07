import React from "react";
import Image from "next/image";
import { TestimonialItems } from "@/constants";

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">
          Trusted by enterprise leaders
        </h2>
        <p className="mt-4 text-base text-gray-600 max-w-xl mx-auto">
          Leading organizations choose Hudle Platform to deliver reliable,
          scalable, and secure data solutions.
        </p>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {TestimonialItems.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-8 relative"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 relative mr-4">
                  <Image
                    src={testimonial.logo}
                    alt={`${testimonial.company} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="text-md font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 text-start">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-base mb-4 italic text-start">
                “{testimonial.quote}”
              </p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.286 3.965c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.378 2.455c-.784.57-1.838-.197-1.54-1.118l1.286-3.965a1 1 0 00-.364-1.118L2.626 9.392c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.965z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
