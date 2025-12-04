const AboutSection = () => {
  return (
    // Adjusted the container to be fully responsive on mobile and take the space of the main container on desktop
    <section className="flex flex-col items-start p-4 text-white text-left sm:flex-row">
      <div className=" p-4 w-full sm:container sm:mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold">ABOUT ME</h2>
        <hr className="border-t border-gray-600 my-4 sm:my-6" />
        <p className="mt-4 sm:mt-6 text-base sm:text-lg">
          I am a passionate <strong>UI/UX Designer</strong> dedicated to creating digital experiences that seamlessly blend aesthetics with functionality. 
          My design philosophy centers on <strong>user-centered thinking</strong>—every pixel, interaction, and journey is meticulously crafted to deliver 
          intuitive, accessible, and visually stunning interfaces that solve real user problems and create lasting value.
        </p>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg">
          Based in <strong>Nairobi</strong>, I specialize in <strong>UX Research</strong>, <strong>Interface Design</strong>, and 
          <strong> Frontend Development</strong> with a foundation in <strong>Computer Science</strong>. I obsess over details—from typography and 
          color theory to micro-interactions and accessibility—ensuring every design decision enhances the user experience. My goal is to transform 
          complex challenges into elegant, user-friendly solutions that not only meet business objectives but delight users at every touchpoint.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;