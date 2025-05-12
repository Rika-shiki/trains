import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
//logo-img
import logo from '../assets/trin_img-2-removebg-preview.png'
const colors = ['#F7DF1E', '#EF4444', '#C0C0C0', '#3B82F6']; // yellow, red, silver, blue

const LogoTransition = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 700);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-64 h-64">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          animate={{ 
            filter: [
              'drop-shadow(0 0 20px rgba(247, 223, 30, 0.7))', 
              'drop-shadow(0 0 20px rgba(239, 68, 68, 0.7))', 
              'drop-shadow(0 0 20px rgba(192, 192, 192, 0.7))', 
              'drop-shadow(0 0 20px rgba(59, 130, 246, 0.7))'
            ],
            transition: { duration: 0.7, repeat: Infinity, repeatType: 'loop' }
          }}
        >
          <img 
            // src="https://i.ibb.co/wdR7h1L/trains-logo.png" 
            src={logo}
            alt="TRAInS Logo" 
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 text-center font-bold text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{ color: colors[currentColorIndex] }}
      >
        TRAInS
      </motion.div>
    </div>
  );
};

export default LogoTransition;