import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaSearch,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Efek sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "destinations",
        "testimonials",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "home", label: "Beranda" },
    { href: "about", label: "Tentang Kami" },
    {
      href: "destinations",
      label: "Destinasi",
      submenu: [
        { href: "bali", label: "Bali" },
        { href: "jogja", label: "Yogyakarta" },
        { href: "lombok", label: "Lombok" },
        { href: "raja-ampat", label: "Raja Ampat" },
      ],
    },
    { href: "testimonials", label: "Testimoni" },
    { href: "contact", label: "Kontak" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-white shadow-md" : "py-4 bg-white"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-bold cursor-pointer flex items-center"
          >
            <span className="text-blue-600">Globe</span>
            <span className="text-purple-600">Trekker</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  <div className="flex items-center">
                    <Link
                      to={item.href}
                      smooth={true}
                      duration={500}
                      className={`px-3 py-2 font-medium cursor-pointer flex items-center transition-colors ${
                        activeSection === item.href
                          ? "text-blue-600 font-semibold"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {item.label}
                      {item.submenu && (
                        <FaChevronDown className="ml-1 text-xs opacity-70" />
                      )}
                    </Link>
                  </div>

                  {item.submenu && (
                    <ul className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.href}
                            smooth={true}
                            duration={500}
                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4 ml-6">
              <button className="p-3 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors">
                <FaSearch className="text-lg" />
              </button>

              <button className="flex items-center space-x-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-5 py-2.5 rounded-lg font-medium transition-all shadow-md hover:shadow-lg">
                <FaUser className="text-sm" />
                <span>Daftar</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button className="p-2 text-gray-700">
              <FaSearch className="text-lg" />
            </button>

            <button
              className="text-2xl text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white mt-4 rounded-xl shadow-2xl p-6 border border-gray-100">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {!item.submenu ? (
                    <Link
                      to={item.href}
                      smooth={true}
                      duration={500}
                      className={`block px-4 py-3 font-medium rounded-lg transition-colors ${
                        activeSection === item.href
                          ? "bg-blue-50 text-blue-600"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="relative">
                      <button
                        className={`w-full flex justify-between items-center px-4 py-3 font-medium rounded-lg transition-colors ${
                          destinationsOpen
                            ? "bg-blue-50 text-blue-600"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                        onClick={() => setDestinationsOpen(!destinationsOpen)}
                      >
                        <span>{item.label}</span>
                        <FaChevronDown
                          className={`transition-transform ${
                            destinationsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {destinationsOpen && (
                        <ul className="ml-4 mt-2 space-y-2 border-l-2 border-blue-200 pl-4">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.href}
                                smooth={true}
                                duration={500}
                                className="block px-4 py-2.5 text-sm rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                onClick={() => {
                                  setIsOpen(false);
                                  setDestinationsOpen(false);
                                }}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col gap-3">
              <button className="w-full flex items-center justify-center space-x-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-5 py-3 rounded-lg font-medium transition-all">
                <FaUser className="text-sm" />
                <span>Daftar Akun</span>
              </button>

              <button className="w-full flex items-center justify-center space-x-2 text-blue-600 border border-blue-600 hover:bg-blue-50 px-5 py-3 rounded-lg font-medium transition-colors">
                <FaPhoneAlt className="text-sm" />
                <span>Hubungi Kami</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
