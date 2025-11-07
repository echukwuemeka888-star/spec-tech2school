import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/solid";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true); // show success message
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSuccess(false), 3500); // hide after 3.5s
  };

  const icons = ["💻", "⚡", "📱", "🛠️", "🧠", "🌐", "🔧"];

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 flex flex-col items-center justify-center px-6 py-20 overflow-hidden">

      {/* Floating tech icons */}
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 15 * (i + 1), -15 * (i + 1), 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{ duration: 6 + i, repeat: Infinity, repeatType: "mirror" }}
          style={{ top: `${Math.random() * 80}%`, left: `${Math.random() * 80}%` }}
        >
          {icon}
        </motion.div>
      ))}

      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-white mb-6 text-center z-10"
      >
        Connect with Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl text-white mb-12 max-w-3xl text-center z-10"
      >
        Have a question, idea, or collaboration? Drop us a message!
      </motion.p>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        onSubmit={handleSubmit}
        className="relative z-10 bg-white bg-opacity-20 backdrop-blur-3xl rounded-3xl p-10 max-w-2xl w-full flex flex-col gap-6 shadow-xl border border-white border-opacity-30"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-4 rounded-xl border-none outline-none bg-white bg-opacity-30 placeholder-blue-300 text-blue-900 font-semibold transition-all focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-4 rounded-xl border-none outline-none bg-white bg-opacity-30 placeholder-blue-300 text-blue-900 font-semibold transition-all focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="p-4 rounded-xl border-none outline-none bg-white bg-opacity-30 placeholder-blue-300 text-blue-900 font-semibold resize-none transition-all focus:ring-2 focus:ring-blue-400"
        />
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-colors"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Beautified Success Message */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 bg-opacity-95 text-white px-10 py-6 rounded-3xl shadow-2xl text-center font-bold text-xl flex flex-col items-center justify-center gap-3 z-50 border-2 border-white border-opacity-50"
          >
            <CheckCircleIcon className="w-12 h-12 text-green-400 animate-bounce" />
            <p className="flex items-center gap-2">
              <SparklesIcon className="w-6 h-6 text-yellow-300 animate-pulse" />
              Thanks for your message!
              <SparklesIcon className="w-6 h-6 text-yellow-300 animate-pulse" />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Contact;
