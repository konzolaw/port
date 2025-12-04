import Image from "next/image";
import SmokeEffect from "@/components/SmokeEffect";

export default function Contact() {
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

      <div className="mx-4 sm:mx-8 md:mx-20 border border-gray-500 rounded-lg p-4 sm:p-6 md:p-8">
        {/* Hero Section */}
        <div className="relative z-10 flex items-center justify-center text-center px-4 sm:px-6 py-12 sm:py-24 bg-transparent">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              Let&apos;s Create Something Beautiful
            </h1>
            <hr className="border-t border-gray-500 my-4 w-full mx-auto" />
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to elevate your digital experience? Let&apos;s discuss how thoughtful UI/UX design can transform your vision into a user-centered solution that delivers real value.
            </p>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="relative z-10 py-12 sm:py-24 px-4 sm:px-6 bg-transparent items-center justify-center">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="p-4 sm:p-6 border border-gray-500 rounded-lg">
              <h2 className="text-2xl sm:text-4xl font-bold text-white">Let&apos;s Connect</h2>
              <hr className="border-t border-gray-500 my-4 w-full" />
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300">
                Whether you need UI/UX design consultation, a complete interface redesign, or want to discuss a new project, I&apos;m here to help create digital experiences that users love.
              </p>
              <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-purple-500 text-xl sm:text-2xl">📍</span>
                  <p className="text-base sm:text-lg text-gray-300">548 Oasis Juja, Kiambu, Kenya</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-purple-500 text-xl sm:text-2xl">📞</span>
                  <p className="text-base sm:text-lg text-gray-300">+254 790711272</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-purple-500 text-xl sm:text-2xl">✉️</span>
                  <p className="text-base sm:text-lg text-gray-300">iykekonzolaw21@gmail.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-purple-500 text-xl sm:text-2xl">🌍</span>
                  <p className="text-base sm:text-lg text-gray-300">www.konzolo.vercel.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-purple-500 text-xl sm:text-2xl">💼</span>
                  <a 
                    href="https://www.linkedin.com/in/irke-konzolo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    linkedin.com/in/irke-konzolo
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-purple-500 text-xl sm:text-2xl">🎨</span>
                  <a 
                    href="https://dribbble.com/irke-konzolo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    dribbble.com/irke-konzolo
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative z-10 p-4 sm:p-8 border border-gray-500 rounded-lg shadow-lg bg-transparent">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">Send Me a Message</h2>
              <hr className="border-t border-gray-500 my-4 w-full" />
              <p className="mt-4 text-base sm:text-lg text-gray-300">
                Fill out the form below and I will respond within 24 hours.
              </p>
              <form className="mt-6 space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-gray-300 font-medium">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium">Your Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium">Message</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows={5}
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full border border-purple-800 bg-transparent hover:bg-purple-800 text-white py-3 px-6 rounded-lg text-lg shadow-md transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="relative z-10 mt-12 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-64 sm:h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.13868252457!2d36.8219467!3d-1.2863895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10f3b7d8b7e7%3A0x7f7a4c7a6542a5e6!2sNairobi!5e0!3m2!1sen!2ske!4v1619562342342!5m2!1sen!2ske"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}