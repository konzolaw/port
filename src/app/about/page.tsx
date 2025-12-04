import Image from "next/image";
import AboutSection from "@/app/home/about";
import ServicesSection from "@/app/home/services";
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



      {/* Testimonials Section */}
      <div className="relative z-10 bg-transparent px-4 sm:px-12 md:px-24 lg:px-60 py-12 border mt-24 p-5 border-gray-800 rounded-lg">
        <AboutSection />
        <ServicesSection/>

      </div>


    </main>
  );
}