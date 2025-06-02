import React, { useState } from "react";
import {
  FaQuoteLeft,
  FaStar,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedTestimonial, setExpandedTestimonial] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Travel Blogger",
      rating: 5,
      content:
        "The Bali luxury package exceeded all my expectations. The private villa was stunning.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "15 June 2023",
      trip: "Bali Luxury Escape",
      category: "luxury",
    },
    {
      id: 2,
      name: "David Chen",
      role: "Photographer",
      rating: 4,
      content:
        "Raja Ampat diving adventure was a dream come true for underwater photography.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "2 July 2023",
      trip: "Raja Ampat Diving",
      category: "adventure",
    },
    {
      id: 3,
      name: "Maria Garcia",
      role: "Teacher",
      rating: 5,
      content:
        "The Yogyakarta heritage tour was both educational and enjoyable.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      date: "22 May 2023",
      trip: "Yogyakarta Heritage",
      category: "cultural",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Entrepreneur",
      rating: 4,
      content: "Lombok trekking package was challenging but rewarding.",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      date: "10 August 2023",
      trip: "Lombok Trekking",
      category: "adventure",
    },
    {
      id: 5,
      name: "Emma Thompson",
      role: "Doctor",
      rating: 5,
      content: "The Komodo Island expedition was unforgettable!",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
      date: "5 September 2023",
      trip: "Komodo Expedition",
      category: "adventure",
    },
  ];

  const filteredTestimonials =
    activeFilter === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === activeFilter);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) =>
      i < rating ? (
        <motion.span
          key={i}
          whileHover={{ scale: 1.2 }}
          className="inline-block"
        >
          <FaStar className="text-yellow-400 inline" />
        </motion.span>
      ) : (
        <motion.span
          key={i}
          whileHover={{ scale: 1.1 }}
          className="inline-block"
        >
          <FaRegStar className="text-yellow-400 inline" />
        </motion.span>
      )
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our <span className="text-blue-600">Travelers Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experiences
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            {["all", "luxury", "cultural", "adventure"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium rounded-md mx-1 transition-colors ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {filter === "all"
                  ? "All Reviews"
                  : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1.2}
            centeredSlides={true}
            breakpoints={{
              640: { slidesPerView: 1.3 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            className="pb-12"
          >
            {filteredTestimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="w-full md:w-[350px] flex-shrink-0"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/90 backdrop-blur-md border border-gray-100 p-6 rounded-xl shadow-xl h-full cursor-pointer transition-all hover:shadow-2xl"
                  onClick={() => setExpandedTestimonial(testimonial)}
                >
                  <div className="flex items-start mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}
                      </p>
                      <div className="mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <FaQuoteLeft className="text-blue-200 text-xl mb-3" />
                  <p className="text-gray-600 mb-3 line-clamp-3">
                    {testimonial.content}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.trip} • {testimonial.date}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="testimonial-prev bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <FaChevronLeft className="text-blue-600" />
            </motion.button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="testimonial-next bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <FaChevronRight className="text-blue-600" />
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {expandedTestimonial && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setExpandedTestimonial(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-start">
                      <img
                        src={expandedTestimonial.image}
                        alt={expandedTestimonial.name}
                        className="w-20 h-20 rounded-full object-cover mr-6"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {expandedTestimonial.name}
                        </h3>
                        <p className="text-gray-600">
                          {expandedTestimonial.role}
                        </p>
                        <div className="mt-2">
                          {renderStars(expandedTestimonial.rating)}
                          <span className="text-gray-500 ml-2">
                            {expandedTestimonial.rating}.0
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setExpandedTestimonial(null)}
                      className="text-gray-400 hover:text-red-500 transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      About the trip:
                    </h4>
                    <p className="text-blue-600">{expandedTestimonial.trip}</p>
                    <p className="text-gray-500 text-sm">
                      {expandedTestimonial.date}
                    </p>
                  </div>
                  <FaQuoteLeft className="text-blue-200 text-3xl mb-4" />
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {expandedTestimonial.content}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready for Your Adventure?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who trusted us with their
              journeys
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all transform hover:scale-105">
              Book Your Trip Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
