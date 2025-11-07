import React from "react";
import { motion } from "framer-motion";

function About() {
  const cards = [
    {
      title: "Learn Coding",
      desc: "Master programming languages and frameworks with hands-on lessons.",
      img: "https://th.bing.com/th/id/OIP.xkzwPtP3FPbU_8G9bwnKMAHaEK?w=305&h=180&c=7&r=0&o=7&pid=1.7&rm=3", // sample image
    },
    {
      title: "Build Projects",
      desc: "Create real-world projects to strengthen your skills and portfolio. ",
      img: "https://www.bing.com/th/id/OIP.p22_v-pe5BBqr5foET4e0QHaFw?w=252&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
      title: "Get Certified",
      desc: "Earn certificates to showcase your expertise and achievements.",
      img: "data:image/webp;base64,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",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-white px-6 py-20">
      
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 text-center"
      >
        About Tech2School
      </motion.h1>
      
      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl max-w-3xl text-center mb-10"
      >
        Tech2School empowers students, professionals, and enthusiasts to learn,
        create, and innovate using the latest tools and technologies in a fun 
        and interactive way.
      </motion.p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl ">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.3, duration: 0.8 }}
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform cursor-pointer flex flex-col items-center text-center h-90"
          >
            {/* Image */}
            <img src={card.img} alt={card.title} className="w-20 h-20 mb-4 w-full h-90" />
            
            {/* Title */}
            <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
            
            {/* Description */}
            <p className="text-sm md:text-base">{card.desc}</p>
          </motion.div>
        ))}
      </div>
      
    </div>
  );
}

export default About;
