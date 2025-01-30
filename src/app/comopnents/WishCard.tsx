"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const WishCard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const toggleCard = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-4 overflow-hidden">
      {/* Stylish Open/Close Button */}
      <motion.button
        onClick={toggleCard}
        whileHover={{ scale: 1.15, rotate: 3 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-4 right-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-lg md:text-xl font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:from-purple-600 hover:to-red-600 transition-all duration-500 z-10 border-4 border-white"
      >
        {isOpen ? "Close Card ✖️" : "Open Card ✨"}
      </motion.button>

      {/* Card Section */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden mt-20 transform transition-transform duration-500"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 80%)`,
          }}
        >
          {/* Header Section */}
          <div className="p-8 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white rounded-t-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-10 animate-twinkle"></div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide relative z-10">Thank You ❤️</h1>
          </div>

          {/* Body Section */}
          <div className="p-6 text-center space-y-4 bg-gradient-to-b from-white to-gray-100">
            <motion.p
              className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500"
              whileHover={{ scale: 1.05 }}
            >
              Governor Sindh <span className="text-purple-600 font-extrabold">Mr. Kamran Tessori</span>
            </motion.p>
            <motion.p
              className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-indigo-600 font-extrabold">Sir Zia Khan</span>
            </motion.p>
            <motion.p
              className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-500"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-blue-600 font-extrabold">Sir Daniyal Nagori</span>
            </motion.p>
            <motion.p
              className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-green-600 font-extrabold">Sir Ameen Alam</span>
            </motion.p>
            <motion.p
              className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-orange-400 font-extrabold">Giaic Faculty</span>
            </motion.p>
            <motion.p
              className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-yellow-400 font-extrabold">All Giaic Students </span>
            </motion.p>
            <p className="text-md md:text-lg font-semibold text-gray-700">
              Your guidance, support, and encouragement have been invaluable. 🌟
            </p>
            <p className="text-md md:text-lg font-semibold text-gray-700">
              Best wishes to everyone for a future filled with success and happiness! 🚀
            </p>
          </div>

          {/* Footer Section */}
          <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-4 px-6 text-center font-medium rounded-b-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-10 animate-twinkle"></div>
            <p className="relative z-10">With heartfelt gratitude</p>
            <p className="font-extrabold text-2xl relative z-10">Mohsin Raza Leader Student Next.js</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default WishCard


