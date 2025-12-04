import Image from "next/image";
import TestimonialsSection from "@/app/home/testimonies";
import SmokeEffect from "@/components/SmokeEffect";

export default function Testimonials() {
  return (
    <main className="relative  overflow-x-hidden overflow-y-auto ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/blue.jpg" 
          alt="Business Consulting" 
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-100" 
        />
      </div>

      {/* Smoke Effect */}
      <SmokeEffect />

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center text-center px-6 py-24 bg-transparent bg-opacity-50">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-extrabold text-white">
            What My Clients Say
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from business leaders and entrepreneurs who have been
            transformed by my prowess, making them stand out in the industry.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative z-10 bg-transparent bg-opacity-50 py-12">
        <TestimonialsSection />
      </div>

      {/* Call to Action Section */}
      <div className="relative z-10 px-6 text-center py-24 bg-transparent bg-opacity-50">
        <h2 className="text-4xl font-bold text-white">Join the Success Stories</h2>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Be the next business to achieve remarkable growth with Me.
          Let&apos;s work together to unlock your full potential.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-purple-600 hover:bg-purple-800 text-white py-4 px-8 rounded-lg text-xl shadow-md transition-all"
        >
          Get Started Today
        </a>
      </div>
    </main>
  );
}