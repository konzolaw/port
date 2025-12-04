

const TestimonialsSection = () => {
    return (
      




<section className="py-24 px-6 text-white text-left bg-transparent">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-left ">TESTIMONIALS</h2>
    <hr className="border-t border-gray-600 my-6" />
    <div className="grid md:grid-cols-3 gap-12">
      {/* Testimonial 1 */}
      <div className="relative group bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-purple-500 transition-shadow duration-300">
        <div className="flex items-center mb-4">
          {/* Star Ratings */}
          <div className="flex space-x-1 text-purple-500">
            {[...Array(5)].map((_, i) => (
              <span key={i}>&#9733;</span> // Unicode for star
            ))}
          </div>
        </div>
        <p className="text-gray-300 mb-6">
          The UI/UX design work on this project is exceptional! The attention to detail in every interaction, combined with the thoughtful user flow and visually stunning interface, creates an experience that's both beautiful and intuitive. Users can navigate effortlessly.
        </p>
        <div className="flex items-center">
          {/* Placeholder for Image */}
          <div className="w-12 h-12 rounded-full bg-gray-600"></div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Joram Kireki</h3>
            <p className="text-sm text-gray-400">Software Developer</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="relative group bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-purple-500 transition-shadow duration-300">
        <div className="flex items-center mb-4">
          {/* Star Ratings */}
          <div className="flex space-x-1 text-purple-500">
            {[...Array(5)].map((_, i) => (
              <span key={i}>&#9733;</span>
            ))}
          </div>
        </div>
        <p className="text-gray-300 mb-6">
          Konzolo's design expertise is evident in every pixel. The user-centered approach, combined with impeccable visual hierarchy and accessibility considerations, resulted in a website that's not only professional but truly delightful to use. The design thinking is outstanding.
        </p>
        <div className="flex items-center">
          {/* Placeholder for Image */}
          <div className="w-12 h-12 rounded-full bg-gray-600"></div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Douglas Kimani</h3>
            <p className="text-sm text-gray-400">ICT Department &  JKUAT</p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="relative group bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-purple-500 transition-shadow duration-300">
        <div className="flex items-center mb-4">
          {/* Star Ratings */}
          <div className="flex space-x-1 text-purple-500">
            {[...Array(5)].map((_, i) => (
              <span key={i}>&#9733;</span>
            ))}
          </div>
        </div>
        <p className="text-gray-300 mb-6">
          Konzolo's design work demonstrates a rare combination of artistic vision and user-focused functionality. The micro-interactions, thoughtful animations, and clean aesthetic create an engaging experience that keeps users coming back. His UI/UX skills are truly world-class.
        </p>
        <div className="flex items-center">
          {/* Placeholder for Image */}
          <div className="w-12 h-12 rounded-full bg-gray-600"></div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Ann Kibe</h3>
            <p className="text-sm text-gray-400">Founder & CEO of JKUAT SOCIAL ROBOTICS</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

);
};

export default TestimonialsSection;