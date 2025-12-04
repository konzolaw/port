"use client";
import Image from "next/image";
import { useRef } from "react";

const HeroSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
      




<section className="py-24 px-6 text-white text-left ">
  <div className="max-w-full mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-left px-6">PROJECTS</h2>
    <hr className="border-t border-gray-600 my-6 mx-6" />
    
    {/* Carousel Container */}
    <div className="relative overflow-hidden px-6">
      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(128,90,213,0.6)]"
        aria-label="Scroll left"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(128,90,213,0.6)]"
        aria-label="Scroll right"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div 
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 scrollbar-hide"
      >
        {[
          {
            src: "/images/jasiri.png",
            title: "Jasiri-Pitch",
            tag: "UI/UX Design",
            link: "https://jasiri.vercel.app"
          },
          {
            src: "/images/lapicure.png",
            title: "LapiCure",
            tag: "UI/UX Design",
            link: "https://lapicure.vercel.app"
          },
          {
            src: "/images/smart.png",
            title: "Smart Traffic Management System",
            tag: "UI/UX Design - Ongoing",
            link: "https://smarttraffic-ai.vercel.app"
          },
          {
            src: "/images/computing .png",
            title: "JKUAT COMPUTING WEBSITE",
            tag: "UX Lead & Frontend",
            link: "https://www.jkuat.ac.ke/school/scit/?page_id=18292"
          },
          {
            src: "/images/social.png",
            title: "JKUAT SOCIAL ROBOTICS",
            tag: "UI/UX & Frontend",
            link: "https://social-robotics.vercel.app/"
          },
          {
            src: "/images/afridata.png",
            title: "AFRIDATA Team Project",
            tag: "UI/UX Designer - Ongoing",
            link: "#"
          },
          {
            src: "/images/comrade.png",
            title: "Comrade Support Initiative",
            tag: "UI/UX Designer - Ongoing",
            link: "#"
          },
          {
            src: "/images/dovepeak.png",
            title: "Dovepeak",
            tag: "Chief Visual Consultant - Ongoing",
            link: "#"
          },
          {
            src: "/images/fynda.png",
            title: "Fynda",
            tag: "Mobile App Design",
            link: "#"
          }
        ].map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-[calc(25%-18px)] min-w-[280px] h-[420px] bg-transparent rounded-xl overflow-hidden shadow-none transition-all duration-300 hover:shadow-[0_0_25px_5px_rgba(128,90,213,0.5)] snap-start flex-shrink-0"
          >
            <div className="w-full h-[280px] overflow-hidden rounded-xl">
              <Image
                src={project.src}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 px-3">
              <span className="bg-transparent border border-purple-500 text-purple-300 px-3 py-1 rounded-full text-sm">
                {project.tag}
              </span>
              <h3 className="text-xl font-semibold mt-2 text-white">{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>


    {/* Call to Action Section */}
    <div className="mt-16 text-center px-6">
      <p className="text-xl text-gray-300 mb-6">
        Want to see more of my design work?
      </p>
      <a
        href="https://dribbble.com/irke-konzolo"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-transparent border-2 border-purple-600 hover:bg-purple-600 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(128,90,213,0.4)]"
      >
        View My Dribbble Portfolio →
      </a>
    </div>
  </div>
</section>

);
};

export default HeroSection;
