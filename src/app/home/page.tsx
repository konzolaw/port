"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import AboutSection from "./about";
import ServicesSection from "./services";
import HappySection from "./happy";
import TestimonialsSection from "./testimonies";
import TablesSection from "./table";
import ProjectsSection from "./projects";
import SmokeEffect from "@/components/SmokeEffect";

const terminalLines = [
  "> WAKANDA PORTAL ACTIVATING...",
  "> Greetings, traveler. The ancestors smile upon you.",
  "> While moving through these lands, ensure you are",
  "> scrolling your mouse from the right-hand side.",
  "> To reveal the face of the next Black Panther,",
  "> hover over the image on the left... but with style.",
  "> BEWARE: The spirits may summon sacred smoke.",
  "> Only the worthy navigate these digital realms.",
  "> ",
  "> Safe journey, brave one.",
  "> (To dismiss this guidance, seek the X above)",
  "> WAKANDA FOREVER!",
];

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(true);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!showTerminal) return;

    let lineIndex = 0;
    let charIndex = 0;
    let currentText = "";

    const typingInterval = setInterval(() => {
      if (lineIndex < terminalLines.length) {
        if (charIndex < terminalLines[lineIndex].length) {
          currentText += terminalLines[lineIndex][charIndex];
          setDisplayedText(currentText);
          charIndex++;
        } else {
          currentText += "\n";
          setDisplayedText(currentText);
          lineIndex++;
          charIndex = 0;
        }
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
    };
  }, [showTerminal]);

  return (
    <main className="relative overflow-x-hidden overflow-y-auto">
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

      {/* Page Content */}
      <div className="relative z-10 border border-gray-800 rounded-lg p-4 sm:p-6 mx-4 sm:mx-8 mt-10 sm:mt-20">

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-stretch min-h-screen px-2 sm:px-4 py-4 gap-4">
          <div className="w-full md:w-1/3 relative">
            <div className="sticky top-0 h-screen">
              <div
                className="relative h-screen w-full border border-gray-800 rounded-lg overflow-hidden transform rotate-[1deg] shadow-lg group"
                style={{
                  transform: 'perspective(1000px) rotateY(15deg) rotateX(-2deg)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                {/* Default Image - Black Panther */}
                <Image
                  src="/images/blackPanther.jpeg"
                  alt="Developer Image"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-l-lg transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* Hover Image - Iyke */}
                <Image
                  src="/images/iyke.jpg"
                  alt="Iyke Konzolo"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-l-lg transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth ml-0 md:ml-20 mr-0 md:mr-20 scrollbar-hide relative">
            {/* Translucent Overlay - Only visible when terminal is showing */}
            {showTerminal && (
              <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 pointer-events-none" />
            )}

            {/* Terminal Instruction Box */}
            {showTerminal && (
              <div 
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-black/90 backdrop-blur-md border-2 border-white/60 rounded-md shadow-2xl pointer-events-auto"
                style={{ width: '360px' }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowTerminal(false)}
                  className="absolute top-2 right-2 text-purple-300 hover:text-white transition-colors duration-200 z-10"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="p-4">
                  {/* Header */}
                  <div className="mb-2 pb-2 border-b border-purple-400/30">
                    <h3 className="font-mono text-sm font-bold text-purple-300 tracking-wider">
                      ⚠️ STRICTLY FOR WAKANDA PEOPLE
                    </h3>
                  </div>

                  {/* Terminal Content - Grows with content */}
                  <div className="font-mono text-xs leading-relaxed text-purple-400 whitespace-pre-wrap">
                    {displayedText}
                    <span className="animate-pulse inline-block w-1.5 h-3 bg-purple-400 ml-0.5"></span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex mt-10 sm:mt-30 justify-center p-4">
              <div className="text-left">
                <h1 className="text-4xl sm:text-6xl text-white font-extrabold">
                  I Design Digital Experiences <br /> That Users Love, Brands Trust, and Teams Celebrate
                </h1>
                <div className="flex justify-center mt-10 sm:mt-20 mb-10 sm:mb-30">

                </div>
              </div>
            </div>

            <hr className="border-t border-gray-600 my-6 sm:my-10" />

            {/* Snap Section 2 */}
            <div className="flex justify-center text-white text-center">
              <div className="mt-10 sm:mt-30 mb-20 sm:mb-40 rounded-lg p-4 max-w-full sm:max-w-4xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x">
                  <div className="px-4 py-2">
                    <p className="text-3xl sm:text-5xl font-bold">2+</p>
                    <p className="text-sm sm:text-lg mt-2">Years Experience</p>
                  </div>
                  <div className="px-5 py-2">
                    <p className="text-3xl sm:text-5xl font-bold">Excellent</p>
                    <p className="text-sm sm:text-lg mt-2">Freelancer Rating</p>
                  </div>
                  <div className="px-4 py-2 flex flex-col justify-center">
                    <a
                      href="https://docs.google.com/document/d/1Y5kq43XdrFE3OytW7siSapM3hQmjMwaCdZ1MnsWfMxs/edit?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-auto border border-purple-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold hover:bg-purple-800 hover:border-purple-800 transition"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-t border-gray-600 my-4 sm:my-6" />

            <AboutSection />

            {/* Snap Section 4 */}
            <div className="h-auto sm:h-screen flex p-4 text-white text-center">
              <div className="max-w-full sm:max-w-4xl w-full mt-10 sm:mt-40">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-wide mb-4 sm:mb-8 text-left">MY JOURNEY</h2>
                <div className="space-y-2">
                  {/* 2022 - 2026 */}
                  <div className="relative group border-t border-gray-600 py-4">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-sm text-gray-400">2022 - 2026</p>
                        <p className="text-lg font-medium group-hover:underline cursor-pointer">
                          Undergraduate Student, Computer Science (JKUAT)
                        </p>
                      </div>
                      <span className="text-gray-400 text-xl">→</span>
                    </div>
                    <ul className="mt-4 text-left list-disc pl-6 text-gray-300 hidden group-hover:block">
                      <li>Studying core computer science principles and programming.</li>
                      <li>Building foundational knowledge in software development.</li>
                    </ul>
                  </div>

                  {/* 2023 */}
                  <div className="relative group border-t border-gray-600 py-4">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-sm text-gray-400">2023 - 2023</p>
                        <p className="text-lg font-medium group-hover:underline cursor-pointer">
                          Freelance UX Designer & Web Developer
                        </p>
                      </div>
                      <span className="text-gray-400 text-xl">→</span>
                    </div>
                    <ul className="mt-4 text-left list-disc pl-6 text-gray-300 hidden group-hover:block">
                      <li>Designed and developed intuitive and user-centered web interfaces for various clients.</li>
                      <li>Conducted user research and usability testing to optimize digital experiences.</li>
                      <li>Collaborated with teams to improve UI elements, ensuring accessibility and responsiveness.</li>
                    </ul>
                  </div>

                  {/* 2024 */}
                  <div className="relative group border-t border-gray-600 py-4">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-sm text-gray-400">2024 - 2024</p>
                        <p className="text-lg font-medium group-hover:underline cursor-pointer">
                          UX Lead – Computing Department Website Revamp (JKUAT)
                        </p>
                      </div>
                      <span className="text-gray-400 text-xl">→</span>
                    </div>
                    <ul className="mt-4 text-left list-disc pl-6 text-gray-300 hidden group-hover:block">
                      <li>Led a cross-functional team in redesigning the department’s website for better usability and engagement.</li>
                      <li>Conducted UX research, improving navigation and accessibility for students and faculty.</li>
                      <li>Coordinated with developers to implement a responsive and aesthetically appealing design.</li>
                    </ul>
                  </div>

                  {/* 2025 - MentorMeCollective */}
                  <div className="relative group border-t border-gray-600 py-4">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-sm text-gray-400">2025 - 2025</p>
                        <p className="text-lg font-medium group-hover:underline cursor-pointer">
                          UX Design (Track Lead) MentorMeCollective
                        </p>
                      </div>
                      <span className="text-gray-400 text-xl">→</span>
                    </div>
                    <ul className="mt-4 text-left list-disc pl-6 text-gray-300 hidden group-hover:block">
                      <li>Assisted junior developers and peers in learning UX principles, guiding them in project execution.</li>
                      <li>Provided constructive feedback on design iterations, ensuring alignment with best UX practices.</li>
                      <li>Led UX workshops, sharing knowledge on design thinking, prototyping, and usability testing.</li>
                      <li>
                        Example of Leadership: While revamping the Computing Departments website, mentored a team of developers and designers, introducing structured workflows and design principles. The result was a modern, accessible website that improved student interaction with online resources.
                      </li>
                    </ul>
                  </div>

                  {/* 2025 - PLP */}
                  <div className="relative group border-t border-gray-600 py-4">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-sm text-gray-400">2025 - Ongoing</p>
                        <p className="text-lg font-medium group-hover:underline cursor-pointer">
                          Software Development Scholar at PLP
                        </p>
                      </div>
                      <span className="text-gray-400 text-xl">→</span>
                    </div>
                    <ul className="mt-4 text-left list-disc pl-6 text-gray-300 hidden group-hover:block">
                      <li>Participating in an intensive program focused on advanced software development practices and methodologies.</li>
                      <li>Collaborating with peers on real-world projects to build scalable and efficient applications.</li>
                      <li>Engaging in workshops and mentorship sessions to enhance problem-solving and coding skills.</li>
                      <li>Specializing in modern frameworks and tools to deliver innovative software solutions.</li>
                    </ul>
                  </div>

                  {/* May 2025 - AFRIDATA Team */}
                  <div className="relative group border-t border-gray-600 py-4">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-sm text-gray-400">May 2025 - Ongoing</p>
                        <p className="text-lg font-medium group-hover:underline cursor-pointer">
                          UI/UX Designer - AFRIDATA Team Project
                        </p>
                      </div>
                      <span className="text-gray-400 text-xl">→</span>
                    </div>
                    <ul className="mt-4 text-left list-disc pl-6 text-gray-300 hidden group-hover:block">
                      <li>Designing intuitive user interfaces for data-driven African development initiatives.</li>
                      <li>Conducting user research to understand diverse African user needs and contexts.</li>
                      <li>Creating wireframes, prototypes, and high-fidelity designs with attention to accessibility and cultural nuances.</li>
                      <li>Collaborating with cross-functional teams to ensure design consistency and user-centered solutions.</li>
                    </ul>
                  </div>

                  {/* May 2025 - Smart Traffic Management */}
                  <div className="relative group border-t border-gray-600 py-4">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-sm text-gray-400">May 2025 - Ongoing</p>
                        <p className="text-lg font-medium group-hover:underline cursor-pointer">
                          UI/UX Designer - Smart Traffic Management System
                        </p>
                      </div>
                      <span className="text-gray-400 text-xl">→</span>
                    </div>
                    <ul className="mt-4 text-left list-disc pl-6 text-gray-300 hidden group-hover:block">
                      <li>Designing real-time traffic monitoring dashboards with focus on data visualization and usability.</li>
                      <li>Creating user-friendly interfaces for traffic management personnel and city planners.</li>
                      <li>Implementing responsive design patterns to ensure seamless experience across devices.</li>
                      <li>Optimizing user flows for quick decision-making in critical traffic scenarios.</li>
                    </ul>
                  </div>

                  {/* May 2025 - Comrade Support Initiative */}
                  <div className="relative group border-t border-gray-600 py-4">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-sm text-gray-400">May 2025 - Ongoing</p>
                        <p className="text-lg font-medium group-hover:underline cursor-pointer">
                          UI/UX Designer - Comrade Support Initiative
                        </p>
                      </div>
                      <span className="text-gray-400 text-xl">→</span>
                    </div>
                    <ul className="mt-4 text-left list-disc pl-6 text-gray-300 hidden group-hover:block">
                      <li>Designing empathetic, user-centered interfaces for community support platform.</li>
                      <li>Conducting usability testing to ensure accessibility for diverse user groups.</li>
                      <li>Creating intuitive navigation systems that facilitate easy access to support resources.</li>
                      <li>Implementing inclusive design principles to serve users with varying technical literacy.</li>
                    </ul>
                  </div>

                  {/* May 2025 - Dovepeak */}
                  <div className="relative group border-t border-gray-600 py-4">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-sm text-gray-400">May 2025 - Ongoing</p>
                        <p className="text-lg font-medium group-hover:underline cursor-pointer">
                          Chief Visual Consultant - Dovepeak
                        </p>
                      </div>
                      <span className="text-gray-400 text-xl">→</span>
                    </div>
                    <ul className="mt-4 text-left list-disc pl-6 text-gray-300 hidden group-hover:block">
                      <li>Leading visual design strategy and brand identity development for the organization.</li>
                      <li>Establishing design systems and style guides to ensure visual consistency across all touchpoints.</li>
                      <li>Overseeing UI/UX design projects with meticulous attention to typography, color, and composition.</li>
                      <li>Mentoring design team members and ensuring adherence to design excellence standards.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Spacer */}
            <div className="h-64 sm:h-80"></div>

            {/* Skills Section */}
            <section className="py-12 sm:py-24 px-4 sm:px-6 text-white text-left">
              <h2 className="mt-20 sm:mt-40 text-3xl sm:text-4xl font-bold mb-6 sm:mb-12">SKILLS</h2>
              <hr className="border-t border-gray-600 my-4 sm:my-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {/* UI/UX Design */}
                <div className="relative border border-gray-600 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Image src="/images/figma.png" alt="Figma" width={32} height={32} className="w-8 h-8" />
                      <h3 className="text-xl font-semibold">UI / UX Design</h3>
                    </div>
                    <p className="text-gray-400 text-lg">95%</p>
                  </div>
                  <div className="mt-4 bg-gray-700 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>

                {/* Development */}
                <div className="relative border border-gray-600 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-5">
                      <Image src="/images/react.png" alt="ReactJS" width={34} height={32} className="w-8 h-8" />
                      <h3 className="text-xl font-semibold"> Development</h3>
                    </div>
                    <p className="text-gray-400 text-lg">90%</p>
                  </div>
                  <div className="mt-4 bg-gray-700 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>

                {/* Graphic Design */}
                <div className="relative border border-gray-600 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                    <Image src="/images/photoshop.png" alt="ReactJS" width={32} height={32} className="w-8 h-8" />
                      <h3 className="text-xl font-semibold">Graphic Design</h3>
                    </div>
                    <p className="text-gray-400 text-lg">95%</p>
                  </div>
                  <div className="mt-4 bg-gray-700 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>

                {/* Tailwind-Css */}
                <div className="relative border border-gray-600 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                    <Image src="/images/tailwind.png" alt="ReactJS" width={32} height={32} className="w-8 h-8" />
                      <h3 className="text-xl font-semibold">Tailwind-Css</h3>
                    </div>
                    <p className="text-gray-400 text-lg">98%</p>
                  </div>
                  <div className="mt-4 bg-gray-700 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "98%" }}></div>
                  </div>
                </div>

                {/* Data Analysis */}
                <div className="relative border border-gray-600 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                    <Image src="/images/data-analysis.png" alt="ReactJS" width={32} height={32} className="w-8 h-8" />
                      <h3 className="text-xl font-semibold">Data Analysis</h3>
                    </div>
                    <p className="text-gray-400 text-lg">85%</p>
                  </div>
                  <div className="mt-4 bg-gray-700 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>

                {/* Project Management */}
                <div className="relative border border-gray-600 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                    <Image src="/images/project-management.png" alt="ReactJS" width={32} height={32} className="w-8 h-8" />
                      <h3 className="text-xl font-semibold">Project Management</h3>
                    </div>
                    <p className="text-gray-400 text-lg">98%</p>
                  </div>
                  <div className="mt-4 bg-gray-700 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "98%" }}></div>
                  </div>
                </div>

                {/* Django */}
                <div className="relative border border-gray-600 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                    <Image src="/images/django.png" alt="ReactJS" width={32} height={32} className="w-8 h-8" />
                      <h3 className="text-xl font-semibold">Django</h3>
                    </div>
                    <p className="text-gray-400 text-lg">85%</p>
                  </div>
                  <div className="mt-4 bg-gray-700 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>

                {/* Adobe Illustrator */}
                <div className="relative border border-gray-600 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                    <Image src="/images/adobe-illustrator.png" alt="ReactJS" width={32} height={32} className="w-8 h-8" />
                      <h3 className="text-xl font-semibold">Adobe Illustrator</h3>
                    </div>
                    <p className="text-gray-400 text-lg">90%</p>
                  </div>
                  <div className="mt-4 bg-gray-700 h-2 rounded-full">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Other sections */}
        <ServicesSection />
        <TablesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <HappySection />
      </div>
    </main>
  );
}
