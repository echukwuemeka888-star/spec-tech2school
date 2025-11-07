import React from "react";
import { motion } from "framer-motion";

function Footer() {
  const footerLinks = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Courses", href: "#" },
    { title: "Contact", href: "#" },
  ];

  const courses = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Data Science",
    "Digital Marketing",
    "Cybersecurity",
  ];

  const socialEmojis = ["🌐", "💻", "📱", "⚡", "🛠️"];

  return (
    <footer className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-16 overflow-hidden">
      
      {/* Animated background shapes */}
      <motion.div
        className="absolute w-72 h-72 bg-white rounded-full opacity-10 top-0 left-10 animate-pulse"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-white rounded-full opacity-10 bottom-0 right-10 animate-pulse"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Logo / About */}
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold mb-4">Tech2School</h1>
          <p className="text-gray-200 max-w-sm">
            Empowering students and professionals to learn, create, and innovate with cutting-edge tech skills.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h2 className="font-bold text-xl mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-blue-300 transition-colors"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div className="flex-1">
          <h2 className="font-bold text-xl mb-4">Courses</h2>
          <ul className="flex flex-col gap-2">
            {courses.map((course, index) => (
              <li key={index} className="hover:text-blue-300 transition-colors">
                {course}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="flex-1">
          <h2 className="font-bold text-xl mb-4">Contact</h2>
          <p className="text-gray-200">Email: info@tech2school.com</p>
          <p className="text-gray-200">Phone: +234 123 456 7890</p>

          {/* Social emojis */}
          <div className="flex gap-4 mt-4 text-2xl">
            {socialEmojis.map((emoji, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.3 }}
                className="cursor-pointer"
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-white border-opacity-20 pt-6 text-center text-gray-200 text-sm">
        &copy; {new Date().getFullYear()} Tech2School. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
