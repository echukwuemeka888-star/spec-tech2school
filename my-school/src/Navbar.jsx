import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900/90 backdrop-blur-md text-white"
          : "bg-white/90 backdrop-blur-md text-gray-800"
      } shadow-md`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Tech2School
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-[17px] font-medium">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.1, color: "#2563eb" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-blue-600 transition"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <motion.button
            whileTap={{ rotate: 180 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" size={22} />
            ) : (
              <Moon className="text-gray-800" size={22} />
            )}
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${
              darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
            } px-6 py-4 border-t dark:border-gray-700`}
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 6 }}
                className="block py-3 text-lg hover:text-blue-600 transition"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
