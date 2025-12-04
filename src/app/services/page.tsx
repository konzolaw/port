import Image from "next/image";
import TablesSection from "@/app/home/table";
import SmokeEffect from "@/components/SmokeEffect";

export default function ServicesSection() {
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
      <div className="relative z-10 bg-transparent bg-opacity-50 py-12">
        <TablesSection />
      </div>

      {/* Call to Action Section */}
      <div className="relative z-10 px-6 text-center py-24 bg-transparent bg-opacity-50">
        <h2 className="text-4xl font-bold text-white">Crafting Digital Experiences with Artistic Precision</h2>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          As a UI/UX designer, I blend artistic vision with meticulous attention to detail to create interfaces that are not only visually stunning but intuitively functional. Every pixel, every interaction, and every user journey is thoughtfully crafted to deliver seamless digital experiences.
        </p>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          My design philosophy centers on the perfect harmony between aesthetics and usability—where beautiful typography meets purposeful layouts, where color theory enhances user emotion, and where micro-interactions breathe life into digital products. I obsess over the details that transform good designs into exceptional ones.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-purple-600 hover:bg-purple-800 text-white py-4 px-8 rounded-lg text-xl shadow-md transition-all"
        >
          Let&apos;s Create Something Beautiful
        </a>
      </div>
    </main>
  );
}