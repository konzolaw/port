"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative text-white pt-16 pb-10 px-6"
      style={{
        backgroundImage: "url('/images/blue.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay Blur and Tint */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md z-0"></div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold tracking-wide text-white">IRKE KONZOLO</h2>
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            Empowering innovation with design, code, and Kingdom purpose. Lets build for impact.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white underline underline-offset-4">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { href: "/about", label: "About Me" },
              { href: "/services", label: "Services" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-white hover:underline transition duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white underline underline-offset-4">Connect With Me</h3>
          <div className="mt-5 flex justify-center md:justify-start space-x-5">
            {[
              { icon: <Facebook size={24} />, href: "https://www.facebook.com/Konzolo-irke" },
              { icon: <Twitter size={24} />, href: "https://www.x.com/konzolaw" },
              { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/irke-konzolo/" },
              { icon: <Mail size={24} />, href: "mailto:iykekonzolaw21@gmail.com" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-300 hover:text-purple-300 transition transform hover:scale-110 duration-300"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 mt-12 text-center text-sm text-gray-400 border-t border-gray-600 pt-5">
        <p>© {new Date().getFullYear()} IRKE KONZOLO. All rights reserved.</p>
      </div>
    </footer>
  );
}
