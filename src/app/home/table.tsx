

const TablesSection = () => {
  return (
    <section className="py-24 px-6 text-white text-left">
      <h2 className="text-4xl font-bold mb-12">SERVICES</h2>
      <hr className="border-t border-gray-600 my-6" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Product Design */}
        <div className="border border-gray-600 rounded-lg p-6 hover:border-purple-500 transition-colors duration-300">
          <h3 className="text-2xl font-semibold mb-4">Product Design</h3>
          <p className="text-gray-400 mb-4">
            Creating intuitive digital products through user-centered design. I transform complex problems into elegant solutions with meticulous attention to user flows, interaction patterns, and interface aesthetics that drive engagement and satisfaction.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-500 transition-colors duration-300">UI/UX Design</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-500 transition-colors duration-300">UX Research</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-500 transition-colors duration-300">Quality Assurance</span>
          </div>
        </div>

        {/* Graphic Design */}
        <div className="border border-gray-600 rounded-lg p-6 hover:border-purple-500 transition-colors duration-300">
          <h3 className="text-2xl font-semibold mb-4">Graphic Design</h3>
          <p className="text-gray-400 mb-4">
            Crafting compelling visual identities that resonate with audiences. From brand systems to digital illustrations, I combine artistic vision with strategic thinking to create memorable designs that communicate your message with clarity and impact.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-500 transition-colors duration-300">Photoshop</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-500 transition-colors duration-300">Illustrator</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-500 transition-colors duration-300">Figma</span>
          </div>
        </div>

        {/* Project Management */}
        <div className="border border-gray-600 rounded-lg p-6 hover:border-purple-500 transition-colors duration-300">
          <h3 className="text-2xl font-semibold mb-4">Project Management</h3>
          <p className="text-gray-400 mb-4">
            Leading design initiatives from concept to delivery with precision. I coordinate cross-functional teams, manage timelines, and ensure every project milestone maintains creative excellence while meeting business objectives and user needs.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-500 transition-colors duration-300">Agile</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-500 transition-colors duration-300">Scrum</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-500 transition-colors duration-300">Execution</span>
          </div>
        </div>

        {/* Pitch Decking */}
        <div className="border border-gray-600 rounded-lg p-6 hover:border-purple-500 transition-colors duration-300">
          <h3 className="text-2xl font-semibold mb-4">Pitch Decking</h3>
          <p className="text-gray-400 mb-4">
            Designing persuasive presentations that win hearts and minds. I craft visually stunning pitch decks with strategic narrative flow, compelling data visualization, and refined aesthetics that transform ideas into investment-ready stories.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-500 transition-colors duration-300">Storytelling</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-500 transition-colors duration-300">Design</span>
            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-500 transition-colors duration-300">Presentation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TablesSection;