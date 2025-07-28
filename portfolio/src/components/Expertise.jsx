import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo-service.svg';
import uiux from '../assets/UiUx-service.svg';
import webdev from '../assets/WebDev-service.svg';
import { useTheme } from './ThemeContext';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

const Expertise = () => {
  const { darkMode } = useTheme();

  const services = [
    {
      img: webdev,
      text: 'I craft full-stack web applications with MERN stack, focusing on responsive design, performance, and scalability for real-world business needs.',
    },
    {
      img: uiux,
      text: 'I design user-friendly interfaces and seamless experiences, blending creativity and usability to elevate digital products to the next level.',
    },
    {
      img: logo,
      text: 'I create impactful logos and brand identities tailored to convey strong messaging and stand out in competitive industries.',
    },
  ];

  return (
    <div
      className={`relative w-full min-h-screen py-20 px-6 md:px-16 overflow-hidden transition-colors duration-500 ${
        darkMode
          ? 'bg-black text-white'
          : 'bg-gradient-to-b from-green-50 to-white text-gray-900'
      }`}
      data-aos="fade-up"
    >
      {/* Background Blobs */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full blur-3xl opacity-30"
        style={{
          background: darkMode
            ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' // Blue-Violet (Dark)
            : 'linear-gradient(135deg, #34d399, #3b82f6)', // Green-Blue (Light)
        }}
      ></div>
      <div
        className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[350px] rounded-full blur-3xl opacity-30"
        style={{
          background: darkMode
            ? 'linear-gradient(135deg, #8b5cf6, #3b82f6)' // Violet-Blue (Dark)
            : 'linear-gradient(135deg, #6ee7b7, #60a5fa)', // Mint-Blue (Light)
        }}
      ></div>

      {/* Heading */}
      <h1
        className={`text-4xl md:text-5xl font-bold text-center mb-14 bg-clip-text text-transparent ${
          darkMode
            ? 'bg-gradient-to-r from-violet-400 to-blue-400'
            : 'bg-gradient-to-r from-green-500 to-blue-500'
        }`}
        data-aos="zoom-in"
      >
        My Expertise
      </h1>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 md:gap-16">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className={`group w-full md:w-1/4 p-6 rounded-2xl border relative backdrop-blur-md flex flex-col justify-between transition-transform hover:scale-105 ${
              darkMode
                ? 'bg-transparent border-gray-700 hover:bg-gray-950/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]'
                : 'bg-white/60 border-green-400/40 hover:bg-green-50/70 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]'
            }`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{ rotate: 1 }}
            transition={{ type: 'spring', stiffness: 150 }}
            data-aos="fade-up"
          >
            {/* Gradient Border */}
            <div
              className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:transition-all duration-300 ${
                darkMode
                  ? 'group-hover:border-violet-500'
                  : 'group-hover:border-green-400'
              }`}
            ></div>

            {/* Image */}
            <div className="flex justify-center mb-6 flex-shrink-0">
              <img
                className="w-2/3 max-w-[150px] group-hover:scale-110 transition-transform duration-500"
                src={service.img}
                alt="service"
              />
            </div>

            {/* Text */}
            <p
              className={`text-center text-lg leading-relaxed flex-grow ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {service.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
