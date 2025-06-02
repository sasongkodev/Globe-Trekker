import React from "react";

const Destination = () => {
  // Destination data
  const destinations = [
    {
      id: 1,
      title: "Bali Paradise",
      image:
        "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      price: 1299,
      description:
        "Experience the magical island with pristine beaches and vibrant culture.",
      tags: ["Beach", "Luxury", "Cultural"],
      badge: "POPULAR",
    },
    {
      id: 2,
      title: "Yogyakarta Heritage",
      image:
        "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      price: 799,
      description: "Discover ancient temples and Javanese cultural heritage.",
      tags: ["Historical", "Cultural", "Affordable"],
      badge: "BEST VALUE",
    },
    {
      id: 3,
      title: "Raja Ampat Diving",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      price: 1899,
      description:
        "World-class diving spots with breathtaking marine biodiversity.",
      tags: ["Adventure", "Diving", "Nature"],
      badge: "PREMIUM",
    },
    {
      id: 4,
      title: "Lombok Retreat",
      image:
        "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      price: 1099,
      description: "Serene beaches and the majestic Mount Rinjani await you.",
      tags: ["Beach", "Hiking", "Relaxing"],
      badge: "TRENDING",
    },
  ];

  return (
    <section id="destinations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore Our{" "}
            <span className="text-blue-600">Popular Destinations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing places with exclusive deals and personalized
            experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <figure className="relative">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-64 object-cover"
                />
                {destination.badge && (
                  <div className="absolute top-4 right-4">
                    <div
                      className={`badge ${
                        destination.badge === "POPULAR"
                          ? "badge-accent"
                          : destination.badge === "BEST VALUE"
                          ? "badge-primary"
                          : destination.badge === "PREMIUM"
                          ? "badge-secondary"
                          : "badge-info"
                      } text-white p-3 shadow-lg`}
                    >
                      {destination.badge}
                    </div>
                  </div>
                )}
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-start">
                  <h3 className="card-title text-xl font-bold text-gray-800">
                    {destination.title}
                  </h3>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-700">
                      {destination.rating}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">{destination.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <span className="text-xl font-bold text-blue-600">
                      ${destination.price}
                    </span>
                    <span className="text-gray-500 ml-1">/person</span>
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-primary px-4 py-2 rounded-full text-sm">
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="mt-4 card-actions justify-start">
                  {destination.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="badge badge-outline p-2 mr-2 text-xs"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-outline btn-primary px-8 py-3 rounded-full">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destination;
