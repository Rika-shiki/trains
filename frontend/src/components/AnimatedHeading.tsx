import React from 'react';
import { motion } from 'framer-motion';

type AnimatedHeadingProps = {
  text: string;
  className?: string;
  delay?: number;
};

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ 
  text, 
  className = '', 
  delay = 0 
}) => {
  // Split text into array of letters
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h2
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: letter === ' ' ? 'transparent' : 'currentColor' 
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default AnimatedHeading;