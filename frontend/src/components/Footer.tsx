import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, PhoneCall, MapPin, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

import logo from '../assets/trin_img-2-removebg-preview.png'
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800/90 backdrop-blur-sm relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            d="M0,0 C40,33 60,50 100,100 L100,0 Z" 
            fill="url(#gradient)"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7DF1E" />
              <stop offset="50%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img 
                // src="https://i.ibb.co/wdR7h1L/trains-logo.png" 
                src={logo} 
                alt="TRAInS Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500">
                TRAInS
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Transforming students and early professionals into industry-ready innovators, creators, and entrepreneurs.
            </p>
            <div className="flex space-x-4">
              <FooterSocialLink icon={<Facebook size={18} />} href="https://www.facebook.com/profile.php?id=61575851871380" />
              <FooterSocialLink icon={<Twitter size={18} />} href="https://x.com/TraInsApp_OFCL" />
              <FooterSocialLink icon={<Instagram size={18} />} href="https://www.instagram.com/trainsapp_ofcl/" />
              <FooterSocialLink icon={<Linkedin size={18} />} href="https://www.linkedin.com/in/trains-app-110505362" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/team" text="Our Team" />
              <FooterLink href="/services" text="Services" />
              <FooterLink href="/projects" text="Projects" />
              <FooterLink href="/contact" text="Contact" />
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Programs</h3>
            <ul className="space-y-2">
              <FooterLink href="#" text="Full Stack Development" />
              <FooterLink href="#" text="AI/ML Training" />
              <FooterLink href="#" text="Cloud Computing" />
              <FooterLink href="#" text="DevOps" />
              <FooterLink href="#" text="Embedded Systems" />
              <FooterLink href="#" text="Mobile App Development" />
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-400 mt-1 shrink-0" size={18} />
                <span className="text-gray-300">123 Tech Park, Peelamedu, Coimbatore</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="text-blue-400 shrink-0" size={18} />
                <span className="text-gray-300">+91 9087375340</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-400 shrink-0" size={18} />
                <span className="text-gray-300">trainsapp.official@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} TRAInS - Techno REsearch and Innov Solutions. All rights reserved.</p>
          <p className="mt-2 text-sm">A unit of Laksmi Enterprises</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <Link to={href} className="text-gray-400 hover:text-white transition-colors duration-200">
      {text}
    </Link>
  </li>
);

const FooterSocialLink = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-blue-500 hover:text-white transition-colors duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default Footer;