import React from "react";
import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "Frontend Developer",
      quote: "Tech2School gave me the confidence and skills to land my first developer job!",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "John Smith",
      role: "Mobile App Developer",
      quote: "The courses are very practical and hands-on. I built real apps within weeks.",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Mary Johnson",
      role: "UI/UX Designer",
      quote: "I loved the interactive design lessons. They helped me create my portfolio quickly.",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "David Brown",
      role: "Data Scientist",
      quote: "The data science course was excellent! Clear explanations and practical projects.",
      img: "https://randomuser.me/api/portraits/men/52.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100 flex flex-col items-center justify-center px-6 py-20">
      
      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 text-center text-blue-700"
      >
        What Our Students Say
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl max-w-3xl text-center text-blue-600 mb-12"
      >
        Hear directly from our students about their learning experience at Tech2School.
      </motion.p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {testimonials.map((test, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
            className="bg-white bg-opacity-30 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform cursor-pointer flex flex-col items-center text-center"
          >
            {/* User Image */}
            <img
              src={test.img}
              alt={test.name}
              className="w-20 h-20 rounded-full mb-4 border-2 border-blue-400"
            />

            {/* Quote */}
            <p className="italic mb-4 text-blue-800">"{test.quote}"</p>

            {/* Name & Role */}
            <h3 className="font-bold text-lg text-blue-900">{test.name}</h3>
            <p className="text-sm text-blue-700">{test.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
