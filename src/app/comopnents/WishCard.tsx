'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WishCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-4">
      <motion.button
        onClick={toggleCard}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-extrabold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-500"
      >
        {isOpen ? 'Close Card ✖️' : 'Open Card ✨'}
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl w-full mt-6 bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-500"
        >
          <div className="p-8 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white rounded-t-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide">Thank You ❤️</h1>
          </div>
          <div className="p-6 text-center">
            <p className="text-xl md:text-2xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-4 leading-relaxed">
              Governor Sindh <span className="text-purple-600">Mr. Kamran Tessori</span><br />
              <span className="text-indigo-600">Sir Zia Khan</span><br />
              <span className="text-blue-600">Sir Daniyal Nagori</span><br />
              <span className="text-green-600">Sir Ameen Alam</span><br />
              and all my teachers , GIAIC faculty , classmates , and friends.
            </p>
            <p className="text-lg md:text-xl font-semibold text-gray-700 mb-6">
              Your guidance support and encouragement have been invaluable. 🌟
            </p>
            <p className="text-lg md:text-xl font-semibold text-gray-700">
              Best wishes to everyone for a future filled with success and happiness! 🚀
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-4 px-6 text-center font-medium rounded-b-3xl">
            <p>With heartfelt gratitude</p>
            <p className="font-extrabold text-3xl">Mohsin Raza</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default WishCard;
