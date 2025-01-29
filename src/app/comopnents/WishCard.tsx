import React from 'react';

const WishCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="p-6 text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">Thank You ❤️</h1>
          <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
            Governor Sindh <span className="font-semibold">Mr. Kamran Tessori</span>,<br />
            <span className="font-semibold">Sir Zia Khan</span>,<br />
            <span className="font-semibold">Sir Daniyal Nagori</span>,<br />
            <span className="font-semibold">Sir Ameen Alam</span>,<br />
            and all my teachers, GIAIC faculty, classmates, and friends.
          </p>
          <p className="text-gray-600 text-base md:text-lg mb-4">
            Your guidance, support, and encouragement have been invaluable. 🌟
          </p>
          <p className="text-gray-600 text-base md:text-lg">
            Best wishes to everyone for a future filled with success and happiness! 🚀
          </p>
        </div>
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-4 px-6 text-center font-medium rounded-b-2xl">
          <p>With heartfelt gratitude,</p>
          <p className="font-bold">Mohsin Raza</p>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
