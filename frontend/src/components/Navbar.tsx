import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

// image
// import logo from '../assets/trin_img-1.jpg'
import logo from '../assets/trin_img-2-removebg-preview.png'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Team', path: '/team' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  { name: 'login', path: '/login' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-slate-800/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            // src="https://i.ibb.co/wdR7h1L/trains-logo.png"
            src={logo} 
            alt="TRAInS Logo" 
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500">
            TRAInS
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <NavLink key={item.path} item={item} currentPath={location.pathname} />
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-slate-900/95 backdrop-blur-md pt-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center p-8 space-y-6">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`text-2xl font-medium ${
                      location.pathname === item.path
                        ? 'text-blue-400'
                        : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const NavLink = ({ item, currentPath }: { item: { name: string; path: string }; currentPath: string }) => {
  const isActive = currentPath === item.path;
  
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
      <Link
        to={item.path}
        className={`relative px-4 py-2 rounded-md font-medium text-base transition-colors duration-200
          ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
      >
        {item.name}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500"
            layoutId="navbar-indicator"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
      </Link>
    </motion.div>
  );
};

export default Navbar;