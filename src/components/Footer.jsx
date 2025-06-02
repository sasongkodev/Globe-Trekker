import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold">
              <span className="text-blue-400">Globe</span>Trekker
            </h3>
            <p className="text-gray-400">
              Making travel accessible and memorable since 2010. We specialize
              in creating personalized adventures that connect you with the
              world's most amazing places.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaYoutube className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-blue-400 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Tour Packages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Special Offers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-blue-400 pb-2 inline-block">
              Popular Destinations
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Bali, Indonesia
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Santorini, Greece
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Kyoto, Japan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Paris, France
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  New York, USA
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Cape Town, South Africa
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-blue-400 pb-2 inline-block">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Travel Street, Adventure City, GT 12345
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-400 mr-3" />
                <span className="text-gray-400">+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3" />
                <span className="text-gray-400">info@globetrekker.com</span>
              </li>
              <li className="flex items-center">
                <FaClock className="text-blue-400 mr-3" />
                <span className="text-gray-400">Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-blue-900 rounded-lg p-8 mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <h4 className="text-xl font-bold mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-blue-200">
                Get travel deals, tips, and inspiration straight to your inbox
              </p>
            </div>
            <div className="w-full lg:w-auto flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-l-lg w-full lg:w-80 focus:outline-none text-gray-900"
              />
              <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-r-lg font-medium transition-colors flex items-center">
                <FaPaperPlane className="mr-2" /> Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Globe Trekker. All rights
            reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
