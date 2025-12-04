import Image from "next/image";

const HeroSection = () => {
    return (
      




<section>
<div className="relative z-10 border border-gray-800 rounded-lg p-4 sm:p-6 mx-4 sm:mx-8 mt-10 sm:mt-20">
  <div className="flex flex-col lg:flex-row items-start justify-start p-4 sm:p-6 gap-6">
    {/* Services Content - Left Side */}
    <div className="p-4 sm:p-8 w-full lg:w-1/2">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-center tracking-tight text-white">
        DESIGN VALUES I BRING TO EVERY PROJECT
      </h2>
      <hr className="border-t border-gray-600 my-4 sm:my-6" />

      <div className="relative h-32 sm:h-40 overflow-hidden">
        <div className="carousel-animation h-full absolute top-0 left-0 w-full">
          <div className="carousel-slide">
            <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2 text-purple-500">
              <div className="text-2xl sm:text-4xl"><span className="text-purple-500">→</span> User Empathy</div>
              <div className="text-2xl sm:text-4xl"><span className="text-purple-500">→</span> Visual Excellence</div>
            </div>
          </div>
          <div className="carousel-slide">
            <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2 text-purple-500">
              <div className="text-2xl sm:text-4xl"><span className="text-purple-500">→</span> Pixel Perfection</div>
              <div className="text-2xl sm:text-4xl"><span className="text-purple-500">→</span> Accessibility First</div>
            </div>
          </div>
          <div className="carousel-slide">
            <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2 text-purple-500">
              <div className="text-2xl sm:text-4xl"><span className="text-purple-500">→</span> Design Thinking</div>
              <div className="text-2xl sm:text-4xl"><span className="text-purple-500">→</span> User Research</div>
            </div>
          </div>
          <div className="carousel-slide">
            <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2 text-purple-500">
              <div className="text-2xl sm:text-4xl"><span className="text-purple-500">→</span> Iterative Design</div>
              <div className="text-2xl sm:text-4xl"><span className="text-purple-500">→</span> User Value Focus</div>
            </div>
          </div>
          <div className="carousel-slide">
            <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2 text-purple-500">
              <div className="text-2xl sm:text-4xl"><span className="text-purple-500">→</span> Interface Mastery</div>
              <div className="text-2xl sm:text-4xl"><span className="text-purple-500">→</span> Aesthetic Balance</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Image - Right Side */}
    <div className="w-full lg:w-1/2 relative rounded-lg overflow-hidden border border-gray-600">
      <div className="relative w-full h-[400px] lg:h-[500px]">
        <Image
          src="/images/some.JPG"
          alt="Design Showcase"
          fill
          style={{ objectFit: 'contain' }}
          className="rounded-lg"
        />
      </div>
    </div>
  </div>
</div>
</section>

);
};

export default HeroSection;