import React from "react";
import { motion } from "framer-motion";

function Courses() {
  const courses = [
    {
      title: "Web Development",
      desc: "Learn HTML, CSS, JavaScript, React, and build responsive websites.",
      img: "https://img.icons8.com/color/96/code.png",
    },
    {
      title: "Mobile App Development",
      desc: "Build Android & iOS apps using Flutter and React Native.",
      img: "https://img.icons8.com/color/96/mobile.png",
    },
    {
      title: "Data Science",
      desc: "Master Python, Machine Learning, and AI for real-world problems.",
      img: "https://img.icons8.com/color/96/data-configuration.png",
    },
    {
      title: "UI/UX Design",
      desc: "Design beautiful interfaces and experiences with Figma & Adobe XD.",
      img: "https://img.icons8.com/color/96/design.png",
    },
    {
      title: "Digital Marketing",
      desc: "Learn SEO, Social Media Marketing, and Google Analytics.",
      img: "https://th.bing.com/th/id/OIP.JQ4BceCEV2mQVmW9bIrK6QHaE8?w=286&h=191&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      title: "Cybersecurity",
      desc: "Protect systems and networks with practical cybersecurity skills.",
      img: "https://img.icons8.com/color/96/cyber-security.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-20">
      
      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 text-center text-gray-800"
      >
        Our Courses
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl max-w-3xl text-center text-gray-600 mb-10"
      >
        Explore our wide range of tech courses designed to make you industry-ready.
      </motion.p>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform cursor-pointer flex flex-col items-center text-center"
          >
            {/* Course Image */}
            <img src={course.img} alt={course.title} className="w-20 h-20 mb-4" />

            {/* Course Title */}
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{course.title}</h2>

            {/* Course Description */}
            <p className="text-sm md:text-base text-gray-600">{course.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
