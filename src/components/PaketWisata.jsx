import React, { useState } from "react";
import {
  FiSearch,
  FiStar,
  FiMapPin,
  FiCalendar,
  FiUsers,
  FiClock,
} from "react-icons/fi";
import { motion } from "framer-motion";

const PaketWisata = () => {
  // State for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [durationFilter, setDurationFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [activeCategory, setActiveCategory] = useState("all");

  // Tour package data
  const tourPackages = [
    {
      id: 1,
      title: "Bali Luxury Escape",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      duration: 5,
      price: 1899,
      rating: 4.9,
      location: "Bali, Indonesia",
      category: "luxury",
      description:
        "5-day luxury resort stay with private beach access, spa treatments, and cultural tours",
      includes: [
        "Private villa with pool",
        "Daily breakfast & dinner",
        "Airport transfers",
        "3 cultural tours",
        "Spa package",
      ],
      dates: ["2023-11-15", "2023-12-20", "2024-01-10"],
    },
    {
      id: 2,
      title: "Yogyakarta Heritage Tour",
      image: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6",
      duration: 3,
      price: 499,
      rating: 4.7,
      location: "Yogyakarta, Indonesia",
      category: "cultural",
      description:
        "Explore ancient temples and Javanese culture with expert guides",
      includes: [
        "3-star hotel accommodation",
        "All entrance fees",
        "English speaking guide",
        "Daily breakfast",
        "Traditional dance show",
      ],
      dates: ["2023-11-10", "2023-12-05", "2024-01-15"],
    },
    {
      id: 3,
      title: "Raja Ampat Diving Adventure",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      duration: 7,
      price: 2499,
      rating: 4.8,
      location: "Raja Ampat, Indonesia",
      category: "adventure",
      description:
        "World-class diving experience in the heart of coral triangle",
      includes: [
        "Liveaboard accommodation",
        "10 diving sessions",
        "All equipment rental",
        "Marine biologist guide",
        "All meals included",
      ],
      dates: ["2023-12-01", "2024-01-20", "2024-02-15"],
    },
    {
      id: 4,
      title: "Lombok Trekking Package",
      image: "https://images.unsplash.com/photo-1560109947-543149eceb16",
      duration: 4,
      price: 899,
      rating: 4.6,
      location: "Lombok, Indonesia",
      category: "adventure",
      description: "Mount Rinjani trekking with stunning crater lake views",
      includes: [
        "Camping equipment",
        "Professional trekking guide",
        "All permits and fees",
        "Meals during trek",
        "Hot spring visit",
      ],
      dates: ["2023-11-20", "2023-12-25", "2024-01-30"],
    },
    {
      id: 5,
      title: "Jakarta City Experience",
      image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd",
      duration: 2,
      price: 299,
      rating: 4.3,
      location: "Jakarta, Indonesia",
      category: "city",
      description:
        "Discover Indonesia's capital with its modern attractions and culinary delights",
      includes: [
        "4-star hotel in city center",
        "City tour with guide",
        "Museum entries",
        "Welcome dinner",
        "Shopping tour",
      ],
      dates: ["2023-12-10", "2024-01-05", "2024-02-20"],
    },
    {
      id: 6,
      title: "Komodo Island Expedition",
      image:
        "https://dl.dropboxusercontent.com/scl/fi/2y1q7gj20xjoiettbr6lz/dw1-damarnesia-GlxYs8WlgkU-unsplash.jpg?rlkey=okg6dhoq5bul86y6zdmsbekcq",
      duration: 6,
      price: 1599,
      rating: 4.9,
      location: "Flores, Indonesia",
      category: "adventure",
      description: "See the legendary Komodo dragons and pristine pink beaches",
      includes: [
        "Boat transfers",
        "Park ranger guide",
        "3 nights island stay",
        "Snorkeling gear",
        "All meals included",
      ],
      dates: ["2023-11-25", "2024-01-15", "2024-02-10"],
    },
  ];

  // Filter functions
  const filteredPackages = tourPackages.filter((pkg) => {
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDuration =
      durationFilter === "all" ||
      (durationFilter === "short" && pkg.duration <= 3) ||
      (durationFilter === "medium" && pkg.duration > 3 && pkg.duration <= 5) ||
      (durationFilter === "long" && pkg.duration > 5);
    const matchesPrice =
      pkg.price >= priceRange[0] && pkg.price <= priceRange[1];
    const matchesCategory =
      activeCategory === "all" || pkg.category === activeCategory;
    return matchesSearch && matchesDuration && matchesPrice && matchesCategory;
  });

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Packages" },
    { id: "luxury", name: "Luxury" },
    { id: "cultural", name: "Cultural" },
    { id: "adventure", name: "Adventure" },
    { id: "city", name: "City Tours" },
  ];

  return (
    <section id="paket-wisata" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Tour Packages</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Carefully curated experiences for every type of traveler
          </p>
        </div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-md p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search packages..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Duration Filter */}
            <div>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value)}
              >
                <option value="all">All Durations</option>
                <option value="short">Short (1-3 days)</option>
                <option value="medium">Medium (4-5 days)</option>
                <option value="long">Long (6+ days)</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">${priceRange[0]}</span>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                />
                <span className="text-gray-600">${priceRange[1]}</span>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          <div className="mt-4 text-right">
            <button
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              onClick={() => {
                setSearchTerm("");
                setDurationFilter("all");
                setPriceRange([0, 5000]);
                setActiveCategory("all");
              }}
            >
              Reset Filters
            </button>
          </div>
        </motion.div>

        {/* Packages Grid */}
        {filteredPackages.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Package Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${pkg.price}
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      {pkg.title}
                    </h3>
                    <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
                      <FiStar className="text-yellow-500 mr-1" />
                      <span className="text-yellow-800 font-medium">
                        {pkg.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <FiMapPin className="mr-1" />
                    <span>{pkg.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600">
                      <FiClock className="mr-1" />
                      <span>{pkg.duration} days</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiCalendar className="mr-1" />
                      <span>{pkg.dates.length} dates available</span>
                    </div>
                  </div>

                  {/* Included Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Includes:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {pkg.includes.slice(0, 4).map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center">
                    <button className="text-blue-600 font-medium hover:text-blue-800">
                      View Details
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">
              No packages match your filters
            </h3>
            <button
              className="mt-4 text-blue-600 hover:text-blue-800"
              onClick={() => {
                setSearchTerm("");
                setDurationFilter("all");
                setPriceRange([0, 5000]);
                setActiveCategory("all");
              }}
            >
              Reset filters
            </button>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition-colors">
            View All Packages
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaketWisata;
