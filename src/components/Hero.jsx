import { FiSearch, FiMapPin, FiCalendar, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image dengan Overlay Gelap */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1680&q=80"
          alt="Travel Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Konten Hero */}
      <div className="container mx-auto px-4 z-10 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Jelajahi <span className="text-amber-400">Dunia</span> Impian Anda
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Temukan pengalaman tak terlupakan dengan destinasi eksklusif dari
            kami.
          </p>
        </motion.div>

        {/* Search Bar untuk Pencarian Trip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMapPin className="text-gray-300" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-300"
                placeholder="Destinasi"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiCalendar className="text-gray-300" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-gray-300"
                placeholder="Tanggal"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUsers className="text-gray-300" />
              </div>
              <select className="w-full pl-10 pr-4 py-3 bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none text-gray-300">
                <option>Jumlah Orang</option>
                <option>1-2</option>
                <option>3-5</option>
                <option>5+</option>
              </select>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition duration-300">
              <FiSearch className="mr-2" />
              Cari Trip
            </button>
          </div>
        </motion.div>

        {/* Stats/Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          {[
            { value: "500+", label: "Destinasi" },
            { value: "10K+", label: "Pelanggan" },
            { value: "24/7", label: "Dukungan" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-amber-400">{item.value}</p>
              <p className="text-gray-300">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gelombang Dekoratif Bawah */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,64L60,74.7C120,85,240,107,360,112C480,117,600,107,720,90.7C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
