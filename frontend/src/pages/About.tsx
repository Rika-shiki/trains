import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Users, Rocket, Target, ChevronRight, BookOpen, Code, Database, Cloud, Cpu } from 'lucide-react';
import AnimatedHeading from '../components/AnimatedHeading';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* About Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedHeading
              text="About TRAInS"
              className="text-4xl md:text-5xl font-bold mb-6"
              delay={0.2}
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-300"
            >
              Techno REsearch and Innov Solutions - Transforming Education Through Innovation
            </motion.p>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-yellow-500/10 to-transparent"></div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Target className="text-blue-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
                  <p className="text-gray-300">
                    To become the leading platform for transforming students and early professionals into successful tech entrepreneurs through innovative education, real-world project experience, and sustainable business models.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Rocket className="text-blue-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
                  <p className="text-gray-300">
                    To provide cutting-edge technical education combined with practical experience through our unique learn-and-earn model, enabling students to build successful careers while developing innovative solutions for real-world challenges.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              icon={<BookOpen className="text-yellow-500" size={24} />}
              title="Innovation First"
              description="We foster a culture of continuous innovation and creative problem-solving."
              delay={0.1}
            />
            <ValueCard
              icon={<Users className="text-red-500" size={24} />}
              title="Student Success"
              description="Every decision we make is focused on maximizing student growth and achievement."
              delay={0.2}
            />
            <ValueCard
              icon={<Code className="text-blue-500" size={24} />}
              title="Technical Excellence"
              description="We maintain the highest standards in technical education and project delivery."
              delay={0.3}
            />
            <ValueCard
              icon={<Award className="text-green-500" size={24} />}
              title="Ethical Practice"
              description="We operate with integrity, transparency, and respect in all our endeavors."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Technology Stack
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TechStackCard
              icon={<Code size={24} />}
              title="Web Development"
              technologies={['React', 'Vue.js', 'Node.js', 'Django', 'Laravel']}
              delay={0.1}
            />
            <TechStackCard
              icon={<Database size={24} />}
              title="Data & AI"
              technologies={['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV']}
              delay={0.2}
            />
            <TechStackCard
              icon={<Cloud size={24} />}
              title="Cloud & DevOps"
              technologies={['AWS', 'Azure', 'Docker', 'Kubernetes']}
              delay={0.3}
            />
            <TechStackCard
              icon={<Cpu size={24} />}
              title="Embedded Systems"
              technologies={['Arduino', 'Raspberry Pi', 'ESP32', 'ARM']}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              Ready to Start Your Journey?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 mb-8"
            >
              Join TRAInS today and transform your passion for technology into a successful career.
            </motion.p>
            
            <Link to="/contact">
              <motion.button
                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ChevronRight size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
  >
    <div className="bg-slate-700/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

interface TechStackCardProps {
  icon: React.ReactNode;
  title: string;
  technologies: string[];
  delay?: number;
}

const TechStackCard: React.FC<TechStackCardProps> = ({ icon, title, technologies, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
  >
    <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-400">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-4 text-white">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

export default About;