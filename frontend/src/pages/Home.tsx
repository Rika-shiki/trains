import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Users, Code, Rocket, Star } from 'lucide-react';

import ThreeBackground from '../components/ThreeBackground';
import AnimatedHeading from '../components/AnimatedHeading';

import logo from '../assets/trin_img-2-removebg-preview.png'
// import logo from '../assets/trin_img-1.jpg'
const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, delay: 0.3 } 
    });
  }, [controls]);

  return (
    <div className="relative">
      <ThreeBackground />
      
      {/* Hero Section */}
      <section className="min-h-[90vh] relative flex items-center overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              className="mb-6"
            >
              <img 
                // src="https://i.ibb.co/wdR7h1L/trains-logo.png"
                src={logo}
                alt="TRAInS Logo" 
                className="h-32 md:h-40 mx-auto drop-shadow-lg"
              />
            </motion.div>
            
            <AnimatedHeading 
              text="Techno Research And Innov Solutions" 
              className="text-4xl md:text-5xl lg:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-2xl text-gray-300 mb-10"
            >
              Transforming students into industry-ready innovators and entrepreneurs
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/services">
                <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Programs
                  <ChevronRight size={18} />
                </motion.button>
              </Link>
              
              <Link to="/about">
                <motion.button
                  className="px-8 py-3 bg-transparent border-2 border-white/30 hover:border-white/60 text-white rounded-lg font-semibold w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Hero Background Animation */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/80 to-slate-900 pointer-events-none" />
      </section>
      
      {/* Features section */}
      <section className="py-20 bg-slate-800/50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our <span className="text-blue-400">Business Model</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Learn. Build. Earn. Launch.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <FeatureCard 
              icon={<BookOpen className="text-yellow-500" size={28} />}
              title="Skill Development"
              description="Cutting-edge tech training in Full Stack, AI/ML, Cloud, DevOps, Embedded Systems, and more."
              delay={0}
            />
            
            <FeatureCard 
              icon={<Code className="text-red-500" size={28} />}
              title="Live Project Execution"
              description="Students work in teams to develop real-time projects guided by industry experts."
              delay={0.1}
            />
            
            <FeatureCard 
              icon={<Star className="text-blue-500" size={28} />}
              title="Brand-Backed Hosting"
              description="Projects are hosted under TRAInS branding, with full marketing and tech support."
              delay={0.2}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Users className="text-purple-500" size={28} />}
              title="Royalty-Based Revenue"
              description="For every sale or client usage of a project, the team earns royalty-based income."
              delay={0.3}
            />
            
            <FeatureCard 
              icon={<Rocket className="text-teal-500" size={28} />}
              title="Entrepreneurship Pathway"
              description="Students can convert their projects into independent products, forming startups with TRAInS support."
              delay={0.4}
            />
            
            <FeatureCard 
              icon={<Star className="text-amber-500" size={28} />}
              title="Certification + Exposure"
              description="Every student receives real-world experience, internship certification, and an optional partnership role."
              delay={0.5}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-sm" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to transform your learning into earning?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-10"
            >
              Join TRAInS today and be part of a revolutionary learning experience where you earn while you learn and launch your own startup.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors duration-300 h-full"
  >
    <div className="bg-slate-700/50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default Home;