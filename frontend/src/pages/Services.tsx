// // import React, { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { Link } from 'react-router-dom';
// // import {
// //   ArrowRight, ChevronDown, BookOpen, Code, Database, Cloud, Cpu, Globe,
// //   Rocket, Users, Target, Award, Briefcase, Calendar, Clock, CheckCircle
// // } from 'lucide-react';
// // import AnimatedHeading from '../components/AnimatedHeading';

// // type ServiceCategory = 'all' | 'development' | 'aiml' | 'cloud' | 'embedded';

// // const Services = () => {
// //   const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
// //   const [expandedService, setExpandedService] = useState<number | null>(null);
// //   const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');

// //   const toggleService = (id: number) => {
// //     setExpandedService(expandedService === id ? null : id);
// //   };

// //   const filterServices = (category: ServiceCategory) => {
// //     setActiveCategory(category);
// //     setExpandedService(null);
// //   };

// //   return (
// //     <div className="min-h-screen">
// //       {/* Services Hero */}
// //       <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
// //         <div className="container mx-auto px-4 relative z-10">
// //           <div className="max-w-4xl mx-auto text-center">
// //             <AnimatedHeading
// //               text="Our Services & Programs"
// //               className="text-4xl md:text-5xl font-bold mb-6"
// //               delay={0.2}
// //             />

// //             <motion.p
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.5, duration: 0.8 }}
// //               className="text-xl text-gray-300"
// //             >
// //               Comprehensive training programs designed to transform learners into industry-ready professionals
// //             </motion.p>
// //           </div>
// //         </div>

// //         {/* Background decoration */}
// //         <motion.div
// //           className="absolute top-20 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
// //           animate={{
// //             x: [10, 30, 10],
// //             opacity: [0.5, 0.7, 0.5]
// //           }}
// //           transition={{
// //             duration: 8,
// //             repeat: Infinity,
// //             repeatType: 'reverse'
// //           }}
// //         />

// //         <motion.div
// //           className="absolute bottom-20 left-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"
// //           animate={{
// //             x: [10, -20, 10],
// //             opacity: [0.3, 0.5, 0.3]
// //           }}
// //           transition={{
// //             duration: 10,
// //             repeat: Infinity,
// //             repeatType: 'reverse'
// //           }}
// //         />
// //       </section>

// //       {/* Why Choose Our Programs */}
// //       <section className="py-16 bg-slate-900">
// //         <div className="container mx-auto px-4">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5 }}
// //             viewport={{ once: true }}
// //             className="text-3xl font-bold mb-12 text-center"
// //           >
// //             Why Choose Our Programs?
// //           </motion.h2>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             <FeatureCard
// //               icon={<Target className="text-blue-400" size={24} />}
// //               title="Industry-Focused Curriculum"
// //               description="Our programs are designed in collaboration with industry experts to ensure you learn the most relevant and in-demand skills."
// //               delay={0.1}
// //             />
// //             <FeatureCard
// //               icon={<Users className="text-blue-400" size={24} />}
// //               title="Expert Mentorship"
// //               description="Learn from experienced professionals who provide personalized guidance throughout your learning journey."
// //               delay={0.2}
// //             />
// //             <FeatureCard
// //               icon={<Rocket className="text-blue-400" size={24} />}
// //               title="Real Project Experience"
// //               description="Work on real-world projects and build a portfolio that showcases your practical skills to potential employers."
// //               delay={0.3}
// //             />
// //             <FeatureCard
// //               icon={<Award className="text-blue-400" size={24} />}
// //               title="Industry Certification"
// //               description="Earn recognized certifications that validate your skills and boost your career prospects."
// //               delay={0.4}
// //             />
// //             <FeatureCard
// //               icon={<Briefcase className="text-blue-400" size={24} />}
// //               title="Career Support"
// //               description="Get comprehensive placement assistance, including resume building, interview preparation, and job referrals."
// //               delay={0.5}
// //             />
// //             <FeatureCard
// //               icon={<Calendar className="text-blue-400" size={24} />}
// //               title="Flexible Learning"
// //               description="Choose from various schedule options that fit your lifestyle and learning pace."
// //               delay={0.6}
// //             />
// //           </div>
// //         </div>
// //       </section>

// //       {/* Service Categories */}
// //       <section className="py-8 bg-slate-900 border-b border-slate-800">
// //         <div className="container mx-auto px-4">
// //           <div className="flex flex-wrap justify-center gap-4">
// //             <CategoryButton
// //               active={activeCategory === 'all'}
// //               onClick={() => filterServices('all')}
// //               label="All Programs"
// //             />
// //             <CategoryButton
// //               active={activeCategory === 'development'}
// //               onClick={() => filterServices('development')}
// //               label="Development"
// //               icon={<Code size={16} />}
// //             />
// //             <CategoryButton
// //               active={activeCategory === 'aiml'}
// //               onClick={() => filterServices('aiml')}
// //               label="AI & ML"
// //               icon={<BookOpen size={16} />}
// //             />
// //             <CategoryButton
// //               active={activeCategory === 'cloud'}
// //               onClick={() => filterServices('cloud')}
// //               label="Cloud & DevOps"
// //               icon={<Cloud size={16} />}
// //             />
// //             <CategoryButton
// //               active={activeCategory === 'embedded'}
// //               onClick={() => filterServices('embedded')}
// //               label="Embedded Systems"
// //               icon={<Cpu size={16} />}
// //             />
// //           </div>
// //         </div>
// //       </section>

// //       {/* Services List */}
// //       <section className="py-16 bg-slate-900">
// //         <div className="container mx-auto px-4">
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {services
// //               .filter(service => activeCategory === 'all' || service.category === activeCategory)
// //               .map((service, index) => (
// //                 <ServiceCard
// //                   key={service.id}
// //                   service={service}
// //                   index={index}
// //                   isExpanded={expandedService === service.id}
// //                   onToggle={() => toggleService(service.id)}
// //                 />
// //               ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Pricing Plans */}
// //       <section className="py-16 bg-slate-900/50">
// //         <div className="container mx-auto px-4">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5 }}
// //             viewport={{ once: true }}
// //             className="text-3xl font-bold mb-6 text-center"
// //           >
// //             Flexible Payment Plans
// //           </motion.h2>

// //           <motion.p
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.2 }}
// //             viewport={{ once: true }}
// //             className="text-gray-300 text-center mb-12 max-w-2xl mx-auto"
// //           >
// //             Choose a payment plan that works best for you. All plans include access to our core features and support.
// //           </motion.p>

// //           <div className="flex justify-center mb-12">
// //             <div className="bg-slate-800 p-1 rounded-lg inline-flex">
// //               <button
// //                 className={`px-6 py-2 rounded-md transition-colors duration-200 ${
// //                   selectedPlan === 'monthly'
// //                     ? 'bg-blue-600 text-white'
// //                     : 'text-gray-400 hover:text-white'
// //                 }`}
// //                 onClick={() => setSelectedPlan('monthly')}
// //               >
// //                 Monthly
// //               </button>
// //               <button
// //                 className={`px-6 py-2 rounded-md transition-colors duration-200 ${
// //                   selectedPlan === 'yearly'
// //                     ? 'bg-blue-600 text-white'
// //                     : 'text-gray-400 hover:text-white'
// //                 }`}
// //                 onClick={() => setSelectedPlan('yearly')}
// //               >
// //                 Yearly
// //                 <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
// //                   Save 20%
// //                 </span>
// //               </button>
// //             </div>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             <PricingCard
// //               title="Basic"
// //               price={selectedPlan === 'monthly' ? '₹9,999' : '₹95,990'}
// //               period={selectedPlan === 'monthly' ? '/month' : '/year'}
// //               features={[
// //                 'Access to core curriculum',
// //                 'Basic project assignments',
// //                 'Community forum access',
// //                 'Email support',
// //                 'Monthly webinars'
// //               ]}
// //               delay={0.1}
// //             />
// //             <PricingCard
// //               title="Professional"
// //               price={selectedPlan === 'monthly' ? '₹14,999' : '₹143,990'}
// //               period={selectedPlan === 'monthly' ? '/month' : '/year'}
// //               features={[
// //                 'Everything in Basic',
// //                 'Advanced project work',
// //                 'Personal mentor',
// //                 'Priority support',
// //                 'Industry certifications',
// //                 'Job placement assistance'
// //               ]}
// //               highlighted={true}
// //               delay={0.2}
// //             />
// //             <PricingCard
// //               title="Enterprise"
// //               price={selectedPlan === 'monthly' ? '₹19,999' : '₹191,990'}
// //               period={selectedPlan === 'monthly' ? '/month' : '/year'}
// //               features={[
// //                 'Everything in Professional',
// //                 'Custom learning path',
// //                 'Dedicated success manager',
// //                 '24/7 priority support',
// //                 'Resume building workshop',
// //                 'Interview preparation',
// //                 'Startup mentorship'
// //               ]}
// //               delay={0.3}
// //             />
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-3xl mx-auto text-center">
// //             <motion.h2
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5 }}
// //               viewport={{ once: true }}
// //               className="text-3xl font-bold mb-6"
// //             >
// //               Ready to Start Your Journey?
// //             </motion.h2>

// //             <motion.p
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: 0.2 }}
// //               viewport={{ once: true }}
// //               className="text-lg text-gray-300 mb-8"
// //             >
// //               Join TRAInS today and transform your passion for technology into a successful career.
// //             </motion.p>

// //             <Link to="/contact">
// //               <motion.button
// //                 className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold text-lg flex items-center gap-2 mx-auto"
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //               >
// //                 Enroll Now
// //                 <ArrowRight size={18} />
// //               </motion.button>
// //             </Link>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // interface CategoryButtonProps {
// //   active: boolean;
// //   onClick: () => void;
// //   label: string;
// //   icon?: React.ReactNode;
// // }

// // const CategoryButton: React.FC<CategoryButtonProps> = ({ active, onClick, label, icon }) => (
// //   <motion.button
// //     onClick={onClick}
// //     className={`px-5 py-2 rounded-full ${
// //       active
// //         ? 'bg-blue-600 text-white'
// //         : 'bg-slate-800 hover:bg-slate-700 text-gray-300'
// //     } transition-colors duration-200 flex items-center gap-2`}
// //     whileHover={{ scale: 1.05 }}
// //     whileTap={{ scale: 0.95 }}
// //   >
// //     {icon}
// //     {label}
// //   </motion.button>
// // );

// // interface ServiceCardProps {
// //   service: Service;
// //   index: number;
// //   isExpanded: boolean;
// //   onToggle: () => void;
// // }

// // const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isExpanded, onToggle }) => {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.5, delay: index * 0.1 }}
// //       viewport={{ once: true, margin: "-50px" }}
// //       className={`bg-slate-800/80 backdrop-blur-sm rounded-xl overflow-hidden border ${
// //         isExpanded ? 'border-blue-500/50' : 'border-slate-700'
// //       } transition-colors duration-300`}
// //     >
// //       <div className="relative">
// //         <div className="aspect-video bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center">
// //           <service.icon size={48} className="text-blue-400" />
// //         </div>

// //         <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-blue-400 border border-blue-500/30">
// //           {service.duration}
// //         </div>
// //       </div>

// //       <div className="p-6">
// //         <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>

// //         <p className="text-gray-300 mb-4 line-clamp-2">
// //           {service.description}
// //         </p>

// //         <button
// //           onClick={onToggle}
// //           className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium"
// //         >
// //           {isExpanded ? 'Show less' : 'Learn more'}
// //           <ChevronDown
// //             size={16}
// //             className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
// //           />
// //         </button>

// //         <AnimatePresence>
// //           {isExpanded && (
// //             <motion.div
// //               initial={{ opacity: 0, height: 0 }}
// //               animate={{ opacity: 1, height: 'auto' }}
// //               exit={{ opacity: 0, height: 0 }}
// //               transition={{ duration: 0.3 }}
// //               className="overflow-hidden"
// //             >
// //               <div className="pt-4 border-t border-slate-700 mt-4">
// //                 <h4 className="font-medium text-white mb-2">What you'll learn:</h4>
// //                 <ul className="space-y-2">
// //                   {service.features.map((feature, i) => (
// //                     <li key={i} className="flex items-start gap-2 text-gray-300">
// //                       <span className="text-blue-400 font-bold mt-1">•</span>
// //                       <span>{feature}</span>
// //                     </li>
// //                   ))}
// //                 </ul>

// //                 <Link to="/contact">
// //                   <motion.button
// //                     className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium flex items-center justify-center gap-2"
// //                     whileHover={{ scale: 1.02 }}
// //                     whileTap={{ scale: 0.98 }}
// //                   >
// //                     Enroll Now
// //                     <ArrowRight size={16} />
// //                   </motion.button>
// //                 </Link>
// //               </div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // interface FeatureCardProps {
// //   icon: React.ReactNode;
// //   title: string;
// //   description: string;
// //   delay?: number;
// // }

// // const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => (
// //   <motion.div
// //     initial={{ opacity: 0, y: 20 }}
// //     whileInView={{ opacity: 1, y: 0 }}
// //     transition={{ duration: 0.5, delay }}
// //     viewport={{ once: true }}
// //     className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
// //   >
// //     <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
// //       {icon}
// //     </div>
// //     <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
// //     <p className="text-gray-300">{description}</p>
// //   </motion.div>
// // );

// // interface PricingCardProps {
// //   title: string;
// //   price: string;
// //   period: string;
// //   features: string[];
// //   highlighted?: boolean;
// //   delay?: number;
// // }

// // const PricingCard: React.FC<PricingCardProps> = ({
// //   title,
// //   price,
// //   period,
// //   features,
// //   highlighted = false,
// //   delay = 0
// // }) => (
// //   <motion.div
// //     initial={{ opacity: 0, y: 20 }}
// //     whileInView={{ opacity: 1, y: 0 }}
// //     transition={{ duration: 0.5, delay }}
// //     viewport={{ once: true }}
// //     className={`rounded-xl p-6 ${
// //       highlighted
// //         ? 'bg-blue-600/20 border-2 border-blue-500'
// //         : 'bg-slate-800/80 border border-slate-700'
// //     }`}
// //   >
// //     {highlighted && (
// //       <div className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
// //         Most Popular
// //       </div>
// //     )}
// //     <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
// //     <div className="mb-6">
// //       <span className="text-3xl font-bold text-white">{price}</span>
// //       <span className="text-gray-400">{period}</span>
// //     </div>
// //     <ul className="space-y-3 mb-6">
// //       {features.map((feature, index) => (
// //         <li key={index} className="flex items-center gap-2 text-gray-300">
// //           <CheckCircle size={16} className="text-blue-400 shrink-0" />
// //           <span>{feature}</span>
// //         </li>
// //       ))}
// //     </ul>
// //     <Link to="/contact">
// //       <motion.button
// //         className={`w-full py-2 rounded-lg font-medium ${
// //           highlighted
// //             ? 'bg-blue-500 hover:bg-blue-400 text-white'
// //             : 'bg-slate-700 hover:bg-slate-600 text-gray-200'
// //         }`}
// //         whileHover={{ scale: 1.02 }}
// //         whileTap={{ scale: 0.98 }}
// //       >
// //         Get Started
// //       </motion.button>
// //     </Link>
// //   </motion.div>
// // );

// // interface Service {
// //   id: number;
// //   title: string;
// //   description: string;
// //   icon: React.FC<{ size?: number; className?: string }>;
// //   category: ServiceCategory;
// //   duration: string;
// //   features: string[];
// // }

// // const services: Service[] = [
// //   {
// //     id: 1,
// //     title: 'Full Stack Development',
// //     description: 'Learn end-to-end web development with modern technologies and build commercial-grade applications.',
// //     icon: Globe,
// //     category: 'development',
// //     duration: '16 Weeks',
// //     features: [
// //       'Frontend frameworks (React, Vue, Angular)',
// //       'Backend technologies (Node.js, Express)',
// //       'Database design and management',
// //       'API development and integration',
// //       'Authentication and security',
// //       'Deployment and DevOps basics'
// //     ]
// //   },
// //   {
// //     id: 2,
// //     title: 'Mobile App Development',
// //     description: 'Master cross-platform and native mobile app development for iOS and Android.',
// //     icon: Code,
// //     category: 'development',
// //     duration: '12 Weeks',
// //     features: [
// //       'Flutter for cross-platform development',
// //       'Native iOS development with Swift',
// //       'Native Android development with Kotlin',
// //       'UI/UX design principles for mobile',
// //       'App store submission and publishing',
// //       'Backend integration and API consumption'
// //     ]
// //   },
// //   {
// //     id: 3,
// //     title: 'AI & Machine Learning',
// //     description: 'Dive into the world of artificial intelligence and machine learning algorithms.',
// //     icon: BookOpen,
// //     category: 'aiml',
// //     duration: '20 Weeks',
// //     features: [
// //       'Data preprocessing and analysis',
// //       'Supervised and unsupervised learning',
// //       'Deep learning with TensorFlow and PyTorch',
// //       'Computer vision applications',
// //       'Natural language processing',
// //       'AI model deployment and scaling'
// //     ]
// //   },
// //   {
// //     id: 4,
// //     title: 'Cloud Computing & DevOps',
// //     description: 'Learn to design, deploy and manage cloud infrastructure and automate development pipelines.',
// //     icon: Cloud,
// //     category: 'cloud',
// //     duration: '14 Weeks',
// //     features: [
// //       'AWS, Azure, and Google Cloud platforms',
// //       'Infrastructure as Code (Terraform, CloudFormation)',
// //       'Containerization with Docker and Kubernetes',
// //       'CI/CD pipeline implementation',
// //       'Monitoring and logging',
// //       'Cloud security best practices'
// //     ]
// //   },
// //   {
// //     id: 5,
// //     title: 'Embedded Systems & IoT',
// //     description: 'Build smart devices and connected systems with embedded programming and IoT technologies.',
// //     icon: Cpu,
// //     category: 'embedded',
// //     duration: '18 Weeks',
// //     features: [
// //       'Microcontroller programming',
// //       'Sensor integration and signal processing',
// //       'Real-time operating systems',
// //       'IoT protocols and communication',
// //       'Edge computing concepts',
// //       'Embedded systems security'
// //     ]
// //   },
// //   {
// //     id: 6,
// //     title: 'Data Science & Analytics',
// //     description: 'Extract insights from data and build predictive models to drive business decisions.',
// //     icon: Database,
// //     category: 'aiml',
// //     duration: '16 Weeks',
// //     features: [
// //       'Statistical analysis and hypothesis testing',
// //       'Data visualization techniques',
// //       'Predictive modeling and forecasting',
// //       'Big data technologies (Hadoop, Spark)',
// //       'Business intelligence applications',
// //       'Data-driven decision making'
// //     ]
// //   }
// // ];

// // export default Services;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ChevronDown,
//   BookOpen,
//   Code,
//   Database,
//   Cloud,
//   Cpu,
//   Globe,
//   Rocket,
//   Users,
//   Target,
//   Award,
//   Briefcase,
//   Calendar,
//   Clock,
//   CheckCircle,
//   Play,
// } from "lucide-react";
// import AnimatedHeading from "../components/AnimatedHeading";

// type ServiceCategory = "all" | "development" | "aiml" | "cloud" | "embedded";

// const Services = () => {
//   const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");
//   const [expandedService, setExpandedService] = useState<number | null>(null);
//   const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly">(
//     "monthly"
//   );
//   const [showVideo, setShowVideo] = useState<number | null>(null);

//   const toggleService = (id: number) => {
//     setExpandedService(expandedService === id ? null : id);
//   };

//   const filterServices = (category: ServiceCategory) => {
//     setActiveCategory(category);
//     setExpandedService(null);
//   };

//   const playVideo = (id: number, e: React.MouseEvent) => {
//     e.stopPropagation();
//     setShowVideo(id);
//   };

//   const closeVideo = () => {
//     setShowVideo(null);
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Services Hero */}
//       <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <AnimatedHeading
//               text="Our Services & Programs"
//               className="text-4xl md:text-5xl font-bold mb-6"
//               delay={0.2}
//             />

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className="text-xl text-gray-300"
//             >
//               Comprehensive training programs designed to transform learners
//               into industry-ready professionals
//             </motion.p>
//           </div>
//         </div>

//         {/* Background decoration */}
//         <motion.div
//           className="absolute top-20 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
//           animate={{
//             x: [10, 30, 10],
//             opacity: [0.5, 0.7, 0.5],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//         />

//         <motion.div
//           className="absolute bottom-20 left-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"
//           animate={{
//             x: [10, -20, 10],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//         />
//       </section>

//       {/* Video Modal */}
//       <AnimatePresence>
//         {showVideo !== null && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
//             onClick={closeVideo}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               className="bg-slate-800 rounded-xl w-full max-w-4xl aspect-video overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {showVideo && (
//                 <video
//                   controls
//                   autoPlay
//                   className="w-full h-full object-contain"
//                 >
//                   <source
//                     src={services.find((s) => s.id === showVideo)?.videoUrl}
//                     type="video/mp4"
//                   />
//                   Your browser does not support the video tag.
//                 </video>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Why Choose Our Programs */}
//       <section className="py-16 bg-slate-900">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold mb-12 text-center"
//           >
//             Why Choose Our Programs?
//           </motion.h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <FeatureCard
//               icon={<Target className="text-blue-400" size={24} />}
//               title="Industry-Focused Curriculum"
//               description="Our programs are designed in collaboration with industry experts to ensure you learn the most relevant and in-demand skills."
//               delay={0.1}
//             />
//             <FeatureCard
//               icon={<Users className="text-blue-400" size={24} />}
//               title="Expert Mentorship"
//               description="Learn from experienced professionals who provide personalized guidance throughout your learning journey."
//               delay={0.2}
//             />
//             <FeatureCard
//               icon={<Rocket className="text-blue-400" size={24} />}
//               title="Real Project Experience"
//               description="Work on real-world projects and build a portfolio that showcases your practical skills to potential employers."
//               delay={0.3}
//             />
//             <FeatureCard
//               icon={<Award className="text-blue-400" size={24} />}
//               title="Industry Certification"
//               description="Earn recognized certifications that validate your skills and boost your career prospects."
//               delay={0.4}
//             />
//             <FeatureCard
//               icon={<Briefcase className="text-blue-400" size={24} />}
//               title="Career Support"
//               description="Get comprehensive placement assistance, including resume building, interview preparation, and job referrals."
//               delay={0.5}
//             />
//             <FeatureCard
//               icon={<Calendar className="text-blue-400" size={24} />}
//               title="Flexible Learning"
//               description="Choose from various schedule options that fit your lifestyle and learning pace."
//               delay={0.6}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Service Categories */}
//       <section className="py-8 bg-slate-900 border-b border-slate-800">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-center gap-4">
//             <CategoryButton
//               active={activeCategory === "all"}
//               onClick={() => filterServices("all")}
//               label="All Programs"
//             />
//             <CategoryButton
//               active={activeCategory === "development"}
//               onClick={() => filterServices("development")}
//               label="Development"
//               icon={<Code size={16} />}
//             />
//             <CategoryButton
//               active={activeCategory === "aiml"}
//               onClick={() => filterServices("aiml")}
//               label="AI & ML"
//               icon={<BookOpen size={16} />}
//             />
//             <CategoryButton
//               active={activeCategory === "cloud"}
//               onClick={() => filterServices("cloud")}
//               label="Cloud & DevOps"
//               icon={<Cloud size={16} />}
//             />
//             <CategoryButton
//               active={activeCategory === "embedded"}
//               onClick={() => filterServices("embedded")}
//               label="Embedded Systems"
//               icon={<Cpu size={16} />}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Services List */}
//       <section className="py-16 bg-slate-900">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services
//               .filter(
//                 (service) =>
//                   activeCategory === "all" ||
//                   service.category === activeCategory
//               )
//               .map((service, index) => (
//                 <ServiceCard
//                   key={service.id}
//                   service={service}
//                   index={index}
//                   isExpanded={expandedService === service.id}
//                   onToggle={() => toggleService(service.id)}
//                   onPlayVideo={(e) => playVideo(service.id, e)}
//                 />
//               ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Plans */}
//       <section className="py-16 bg-slate-900/50">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold mb-6 text-center"
//           >
//             Flexible Payment Plans
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-gray-300 text-center mb-12 max-w-2xl mx-auto"
//           >
//             Choose a payment plan that works best for you. All plans include
//             access to our core features and support.
//           </motion.p>

//           <div className="flex justify-center mb-12">
//             <div className="bg-slate-800 p-1 rounded-lg inline-flex">
//               <button
//                 className={`px-6 py-2 rounded-md transition-colors duration-200 ${
//                   selectedPlan === "monthly"
//                     ? "bg-blue-600 text-white"
//                     : "text-gray-400 hover:text-white"
//                 }`}
//                 onClick={() => setSelectedPlan("monthly")}
//               >
//                 Monthly
//               </button>
//               <button
//                 className={`px-6 py-2 rounded-md transition-colors duration-200 ${
//                   selectedPlan === "yearly"
//                     ? "bg-blue-600 text-white"
//                     : "text-gray-400 hover:text-white"
//                 }`}
//                 onClick={() => setSelectedPlan("yearly")}
//               >
//                 Yearly
//                 <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
//                   Save 20%
//                 </span>
//               </button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <PricingCard
//               title="Basic"
//               price={selectedPlan === "monthly" ? "₹9,999" : "₹95,990"}
//               period={selectedPlan === "monthly" ? "/month" : "/year"}
//               features={[
//                 "Access to core curriculum",
//                 "Basic project assignments",
//                 "Community forum access",
//                 "Email support",
//                 "Monthly webinars",
//               ]}
//               delay={0.1}
//             />
//             <PricingCard
//               title="Professional"
//               price={selectedPlan === "monthly" ? "₹14,999" : "₹143,990"}
//               period={selectedPlan === "monthly" ? "/month" : "/year"}
//               features={[
//                 "Everything in Basic",
//                 "Advanced project work",
//                 "Personal mentor",
//                 "Priority support",
//                 "Industry certifications",
//                 "Job placement assistance",
//               ]}
//               highlighted={true}
//               delay={0.2}
//             />
//             <PricingCard
//               title="Enterprise"
//               price={selectedPlan === "monthly" ? "₹19,999" : "₹191,990"}
//               period={selectedPlan === "monthly" ? "/month" : "/year"}
//               features={[
//                 "Everything in Professional",
//                 "Custom learning path",
//                 "Dedicated success manager",
//                 "24/7 priority support",
//                 "Resume building workshop",
//                 "Interview preparation",
//                 "Startup mentorship",
//               ]}
//               delay={0.3}
//             />
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className="text-3xl font-bold mb-6"
//             >
//               Ready to Start Your Journey?
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="text-lg text-gray-300 mb-8"
//             >
//               Join TRAInS today and transform your passion for technology into a
//               successful career.
//             </motion.p>

//             <Link to="/contact">
//               <motion.button
//                 className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold text-lg flex items-center gap-2 mx-auto"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Enroll Now
//                 <ArrowRight size={18} />
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// interface CategoryButtonProps {
//   active: boolean;
//   onClick: () => void;
//   label: string;
//   icon?: React.ReactNode;
// }

// const CategoryButton: React.FC<CategoryButtonProps> = ({
//   active,
//   onClick,
//   label,
//   icon,
// }) => (
//   <motion.button
//     onClick={onClick}
//     className={`px-5 py-2 rounded-full ${
//       active
//         ? "bg-blue-600 text-white"
//         : "bg-slate-800 hover:bg-slate-700 text-gray-300"
//     } transition-colors duration-200 flex items-center gap-2`}
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//   >
//     {icon}
//     {label}
//   </motion.button>
// );

// interface ServiceCardProps {
//   service: Service;
//   index: number;
//   isExpanded: boolean;
//   onToggle: () => void;
//   onPlayVideo: (e: React.MouseEvent) => void;
// }

// const ServiceCard: React.FC<ServiceCardProps> = ({
//   service,
//   index,
//   isExpanded,
//   onToggle,
//   onPlayVideo,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       viewport={{ once: true, margin: "-50px" }}
//       className={`bg-slate-800/80 backdrop-blur-sm rounded-xl overflow-hidden border ${
//         isExpanded ? "border-blue-500/50" : "border-slate-700"
//       } transition-colors duration-300`}
//     >
//       <div className="relative">
//         <div className="aspect-video bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center relative">
//           {service.imageUrl ? (
//             <>
//               <img
//                 src={service.imageUrl}
//                 alt={service.title}
//                 className="w-full h-full object-cover"
//               />
//               <button
//                 onClick={onPlayVideo}
//                 className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-blue-600/90 hover:bg-blue-500 flex items-center justify-center transition-colors duration-200"
//                 aria-label="Play video"
//               >
//                 <Play className="w-8 h-8 text-white fill-white" />
//               </button>
//             </>
//           ) : (
//             <service.icon size={48} className="text-blue-400" />
//           )}
//         </div>

//         <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-blue-400 border border-blue-500/30">
//           {service.duration}
//         </div>
//       </div>

//       <div className="p-6">
//         <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>

//         <p className="text-gray-300 mb-4 line-clamp-2">{service.description}</p>

//         <button
//           onClick={onToggle}
//           className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium"
//         >
//           {isExpanded ? "Show less" : "Learn more"}
//           <ChevronDown
//             size={16}
//             className={`transition-transform duration-300 ${
//               isExpanded ? "rotate-180" : ""
//             }`}
//           />
//         </button>

//         <AnimatePresence>
//           {isExpanded && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="overflow-hidden"
//             >
//               <div className="pt-4 border-t border-slate-700 mt-4">
//                 <h4 className="font-medium text-white mb-2">
//                   What you'll learn:
//                 </h4>
//                 <ul className="space-y-2">
//                   {service.features.map((feature, i) => (
//                     <li
//                       key={i}
//                       className="flex items-start gap-2 text-gray-300"
//                     >
//                       <span className="text-blue-400 font-bold mt-1">•</span>
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <Link to="/contact">
//                   <motion.button
//                     className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium flex items-center justify-center gap-2"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Enroll Now
//                     <ArrowRight size={16} />
//                   </motion.button>
//                 </Link>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// interface FeatureCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   delay?: number;
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({
//   icon,
//   title,
//   description,
//   delay = 0,
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5, delay }}
//     viewport={{ once: true }}
//     className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
//   >
//     <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
//       {icon}
//     </div>
//     <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
//     <p className="text-gray-300">{description}</p>
//   </motion.div>
// );

// interface PricingCardProps {
//   title: string;
//   price: string;
//   period: string;
//   features: string[];
//   highlighted?: boolean;
//   delay?: number;
// }

// const PricingCard: React.FC<PricingCardProps> = ({
//   title,
//   price,
//   period,
//   features,
//   highlighted = false,
//   delay = 0,
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5, delay }}
//     viewport={{ once: true }}
//     className={`rounded-xl p-6 ${
//       highlighted
//         ? "bg-blue-600/20 border-2 border-blue-500"
//         : "bg-slate-800/80 border border-slate-700"
//     }`}
//   >
//     {highlighted && (
//       <div className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
//         Most Popular
//       </div>
//     )}
//     <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
//     <div className="mb-6">
//       <span className="text-3xl font-bold text-white">{price}</span>
//       <span className="text-gray-400">{period}</span>
//     </div>
//     <ul className="space-y-3 mb-6">
//       {features.map((feature, index) => (
//         <li key={index} className="flex items-center gap-2 text-gray-300">
//           <CheckCircle size={16} className="text-blue-400 shrink-0" />
//           <span>{feature}</span>
//         </li>
//       ))}
//     </ul>
//     <Link to="/contact">
//       <motion.button
//         className={`w-full py-2 rounded-lg font-medium ${
//           highlighted
//             ? "bg-blue-500 hover:bg-blue-400 text-white"
//             : "bg-slate-700 hover:bg-slate-600 text-gray-200"
//         }`}
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//       >
//         Get Started
//       </motion.button>
//     </Link>
//   </motion.div>
// );

// interface Service {
//   id: number;
//   title: string;
//   description: string;
//   icon: React.FC<{ size?: number; className?: string }>;
//   category: ServiceCategory;
//   duration: string;
//   features: string[];
//   imageUrl?: string;
//   videoUrl?: string;
// }

// const services: Service[] = [
//   {
//     id: 1,
//     title: "Full Stack Development",
//     description:
//       "Learn end-to-end web development with modern technologies and build commercial-grade applications.",
//     icon: Globe,
//     category: "development",
//     duration: "16 Weeks",
//     imageUrl:
//       "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     videoUrl:
//       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
//     features: [
//       "Frontend frameworks (React, Vue, Angular)",
//       "Backend technologies (Node.js, Express)",
//       "Database design and management",
//       "API development and integration",
//       "Authentication and security",
//       "Deployment and DevOps basics",
//     ],
//   },
//   {
//     id: 2,
//     title: "Mobile App Development",
//     description:
//       "Master cross-platform and native mobile app development for iOS and Android.",
//     icon: Code,
//     category: "development",
//     duration: "12 Weeks",
//     imageUrl:
//       "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     videoUrl:
//       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
//     features: [
//       "Flutter for cross-platform development",
//       "Native iOS development with Swift",
//       "Native Android development with Kotlin",
//       "UI/UX design principles for mobile",
//       "App store submission and publishing",
//       "Backend integration and API consumption",
//     ],
//   },
//   {
//     id: 3,
//     title: "AI & Machine Learning",
//     description:
//       "Dive into the world of artificial intelligence and machine learning algorithms.",
//     icon: BookOpen,
//     category: "aiml",
//     duration: "20 Weeks",
//     imageUrl:
//       "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     videoUrl:
//       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
//     features: [
//       "Data preprocessing and analysis",
//       "Supervised and unsupervised learning",
//       "Deep learning with TensorFlow and PyTorch",
//       "Computer vision applications",
//       "Natural language processing",
//       "AI model deployment and scaling",
//     ],
//   },
//   {
//     id: 4,
//     title: "Cloud Computing & DevOps",
//     description:
//       "Learn to design, deploy and manage cloud infrastructure and automate development pipelines.",
//     icon: Cloud,
//     category: "cloud",
//     duration: "14 Weeks",
//     imageUrl:
//       "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
//     videoUrl:
//       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
//     features: [
//       "AWS, Azure, and Google Cloud platforms",
//       "Infrastructure as Code (Terraform, CloudFormation)",
//       "Containerization with Docker and Kubernetes",
//       "CI/CD pipeline implementation",
//       "Monitoring and logging",
//       "Cloud security best practices",
//     ],
//   },
//   {
//     id: 5,
//     title: "Embedded Systems & IoT",
//     description:
//       "Build smart devices and connected systems with embedded programming and IoT technologies.",
//     icon: Cpu,
//     category: "embedded",
//     duration: "18 Weeks",
//     imageUrl:
//       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
//     videoUrl:
//       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
//     features: [
//       "Microcontroller programming",
//       "Sensor integration and signal processing",
//       "Real-time operating systems",
//       "IoT protocols and communication",
//       "Edge computing concepts",
//       "Embedded systems security",
//     ],
//   },
//   {
//     id: 6,
//     title: "Data Science & Analytics",
//     description:
//       "Extract insights from data and build predictive models to drive business decisions.",
//     icon: Database,
//     category: "aiml",
//     duration: "16 Weeks",
//     imageUrl:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     videoUrl:
//       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
//     features: [
//       "Statistical analysis and hypothesis testing",
//       "Data visualization techniques",
//       "Predictive modeling and forecasting",
//       "Big data technologies (Hadoop, Spark)",
//       "Business intelligence applications",
//       "Data-driven decision making",
//     ],
//   },
//   {
//     id: 7,
//     title: "Advanced Data Science with Python",
//     description:
//       "Master advanced data science techniques and machine learning algorithms using Python.",
//     icon: Database,
//     category: "aiml",
//     duration: "18 Weeks",
//     imageUrl:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     videoUrl:
//       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
//     features: [
//       "Advanced statistical modeling",
//       "Time series analysis and forecasting",
//       "Deep learning with TensorFlow/Keras",
//       "Big data processing with Spark",
//       "Natural Language Processing (NLP)",
//       "Model deployment with Flask/Django",
//       "Data visualization with D3.js",
//     ],
//   },
//   {
//     id: 8,
//     title: "AWS Cloud Architecture",
//     description:
//       "Design and implement scalable, secure cloud solutions on AWS infrastructure.",
//     icon: Cloud,
//     category: "cloud",
//     duration: "14 Weeks",
//     imageUrl:
//       "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
//     videoUrl:
//       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
//     features: [
//       "AWS core services (EC2, S3, RDS, Lambda)",
//       "VPC design and implementation",
//       "Security and compliance best practices",
//       "Serverless architecture patterns",
//       "Cost optimization strategies",
//       "Disaster recovery planning",
//       "Migration strategies to AWS",
//     ],
//   },
//   {
//     id: 9,
//     title: "Kubernetes & Docker Mastery",
//     description:
//       "Become proficient in containerization and orchestration with Docker and Kubernetes.",
//     icon: Cloud,
//     category: "cloud",
//     duration: "12 Weeks",
//     imageUrl:
//       "https://images.unsplash.com/photo-1627398242454-45a1465e2477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
//     videoUrl:
//       "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
//     features: [
//       "Docker container fundamentals",
//       "Kubernetes architecture and components",
//       "Deploying microservices on Kubernetes",
//       "Persistent storage solutions",
//       "Monitoring and logging",
//       "CI/CD pipelines with Kubernetes",
//       "Security best practices",
//       "Auto-scaling applications",
//     ],
//   },
// ];

// export default Services;



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ChevronDown, BookOpen, Code, Database, Cloud, Cpu, Globe,
  Rocket, Users, Target, Award, Briefcase, Calendar, Clock, CheckCircle, Play
} from 'lucide-react';
import AnimatedHeading from '../components/AnimatedHeading';

type ServiceCategory = 'all' | 'development' | 'aiml' | 'cloud' | 'embedded' | 'datascience';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');
  const [showVideo, setShowVideo] = useState<number | null>(null);

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const filterServices = (category: ServiceCategory) => {
    setActiveCategory(category);
    setExpandedService(null);
  };

  const playVideo = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setShowVideo(id);
  };

  const closeVideo = () => {
    setShowVideo(null);
  };

  return (
    <div className="min-h-screen">
      {/* Services Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedHeading
              text="Our Services & Programs"
              className="text-4xl md:text-5xl font-bold mb-6"
              delay={0.2}
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-300"
            >
              Comprehensive training programs designed to transform learners into industry-ready professionals
            </motion.p>
          </div>
        </div>
        
        {/* Background decoration */}
        <motion.div 
          className="absolute top-20 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [10, 30, 10], 
            opacity: [0.5, 0.7, 0.5] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [10, -20, 10], 
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
        />
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-slate-800 rounded-xl w-full max-w-4xl aspect-video overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {showVideo && (
                <video 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                >
                  <source src={services.find(s => s.id === showVideo)?.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Why Choose Our Programs */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Why Choose Our Programs?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Target className="text-blue-400" size={24} />}
              title="Industry-Focused Curriculum"
              description="Our programs are designed in collaboration with industry experts to ensure you learn the most relevant and in-demand skills."
              delay={0.1}
            />
            <FeatureCard
              icon={<Users className="text-blue-400" size={24} />}
              title="Expert Mentorship"
              description="Learn from experienced professionals who provide personalized guidance throughout your learning journey."
              delay={0.2}
            />
            <FeatureCard
              icon={<Rocket className="text-blue-400" size={24} />}
              title="Real Project Experience"
              description="Work on real-world projects and build a portfolio that showcases your practical skills to potential employers."
              delay={0.3}
            />
            <FeatureCard
              icon={<Award className="text-blue-400" size={24} />}
              title="Industry Certification"
              description="Earn recognized certifications that validate your skills and boost your career prospects."
              delay={0.4}
            />
            <FeatureCard
              icon={<Briefcase className="text-blue-400" size={24} />}
              title="Career Support"
              description="Get comprehensive placement assistance, including resume building, interview preparation, and job referrals."
              delay={0.5}
            />
            <FeatureCard
              icon={<Calendar className="text-blue-400" size={24} />}
              title="Flexible Learning"
              description="Choose from various schedule options that fit your lifestyle and learning pace."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-8 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <CategoryButton 
              active={activeCategory === 'all'} 
              onClick={() => filterServices('all')}
              label="All Programs"
            />
            <CategoryButton 
              active={activeCategory === 'development'} 
              onClick={() => filterServices('development')}
              label="Development"
              icon={<Code size={16} />}
            />
            <CategoryButton 
              active={activeCategory === 'aiml'} 
              onClick={() => filterServices('aiml')}
              label="AI & ML"
              icon={<BookOpen size={16} />}
            />
            <CategoryButton 
              active={activeCategory === 'datascience'} 
              onClick={() => filterServices('datascience')}
              label="Data Science"
              icon={<Database size={16} />}
            />
            <CategoryButton 
              active={activeCategory === 'cloud'} 
              onClick={() => filterServices('cloud')}
              label="Cloud & DevOps"
              icon={<Cloud size={16} />}
            />
            <CategoryButton 
              active={activeCategory === 'embedded'} 
              onClick={() => filterServices('embedded')}
              label="Embedded Systems"
              icon={<Cpu size={16} />}
            />
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services
              .filter(service => activeCategory === 'all' || service.category === activeCategory)
              .map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  isExpanded={expandedService === service.id}
                  onToggle={() => toggleService(service.id)}
                  onPlayVideo={(e) => playVideo(service.id, e)}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-center"
          >
            Flexible Payment Plans
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          >
            Choose a payment plan that works best for you. All plans include access to our core features and support.
          </motion.p>

          <div className="flex justify-center mb-12">
            <div className="bg-slate-800 p-1 rounded-lg inline-flex">
              <button
                className={`px-6 py-2 rounded-md transition-colors duration-200 ${
                  selectedPlan === 'monthly'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setSelectedPlan('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-md transition-colors duration-200 ${
                  selectedPlan === 'yearly'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setSelectedPlan('yearly')}
              >
                Yearly
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Basic"
              price={selectedPlan === 'monthly' ? '₹9,999' : '₹95,990'}
              period={selectedPlan === 'monthly' ? '/month' : '/year'}
              features={[
                'Access to core curriculum',
                'Basic project assignments',
                'Community forum access',
                'Email support',
                'Monthly webinars'
              ]}
              delay={0.1}
            />
            <PricingCard
              title="Professional"
              price={selectedPlan === 'monthly' ? '₹14,999' : '₹143,990'}
              period={selectedPlan === 'monthly' ? '/month' : '/year'}
              features={[
                'Everything in Basic',
                'Advanced project work',
                'Personal mentor',
                'Priority support',
                'Industry certifications',
                'Job placement assistance'
              ]}
              highlighted={true}
              delay={0.2}
            />
            <PricingCard
              title="Enterprise"
              price={selectedPlan === 'monthly' ? '₹19,999' : '₹191,990'}
              period={selectedPlan === 'monthly' ? '/month' : '/year'}
              features={[
                'Everything in Professional',
                'Custom learning path',
                'Dedicated success manager',
                '24/7 priority support',
                'Resume building workshop',
                'Interview preparation',
                'Startup mentorship'
              ]}
              delay={0.3}
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
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold text-lg flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enroll Now
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

interface CategoryButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
  icon?: React.ReactNode;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ active, onClick, label, icon }) => (
  <motion.button
    onClick={onClick}
    className={`px-5 py-2 rounded-full ${
      active
        ? 'bg-blue-600 text-white'
        : 'bg-slate-800 hover:bg-slate-700 text-gray-300'
    } transition-colors duration-200 flex items-center gap-2`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    {label}
  </motion.button>
);

interface ServiceCardProps {
  service: Service;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  onPlayVideo: (e: React.MouseEvent) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isExpanded, onToggle, onPlayVideo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`bg-slate-800/80 backdrop-blur-sm rounded-xl overflow-hidden border ${
        isExpanded ? 'border-blue-500/50' : 'border-slate-700'
      } transition-colors duration-300`}
    >
      <div className="relative">
        <div className="aspect-video bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center relative">
          {service.imageUrl ? (
            <>
              <img 
                src={service.imageUrl} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={onPlayVideo}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-blue-600/90 hover:bg-blue-500 flex items-center justify-center transition-colors duration-200"
                aria-label="Play video"
              >
                <Play className="w-8 h-8 text-white fill-white" />
              </button>
            </>
          ) : (
            <service.icon size={48} className="text-blue-400" />
          )}
        </div>
        
        <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-blue-400 border border-blue-500/30">
          {service.duration}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
        
        <p className="text-gray-300 mb-4 line-clamp-2">
          {service.description}
        </p>
        
        <button
          onClick={onToggle}
          className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium"
        >
          {isExpanded ? 'Show less' : 'Learn more'}
          <ChevronDown 
            size={16} 
            className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          />
        </button>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-slate-700 mt-4">
                <h4 className="font-medium text-white mb-2">What you'll learn:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-blue-400 font-bold mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact">
                  <motion.button
                    className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Enroll Now
                    <ArrowRight size={16} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
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
    className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
  >
    <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  delay?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  period, 
  features, 
  highlighted = false,
  delay = 0 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`rounded-xl p-6 ${
      highlighted
        ? 'bg-blue-600/20 border-2 border-blue-500'
        : 'bg-slate-800/80 border border-slate-700'
    }`}
  >
    {highlighted && (
      <div className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
        Most Popular
      </div>
    )}
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <div className="mb-6">
      <span className="text-3xl font-bold text-white">{price}</span>
      <span className="text-gray-400">{period}</span>
    </div>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2 text-gray-300">
          <CheckCircle size={16} className="text-blue-400 shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link to="/contact">
      <motion.button
        className={`w-full py-2 rounded-lg font-medium ${
          highlighted
            ? 'bg-blue-500 hover:bg-blue-400 text-white'
            : 'bg-slate-700 hover:bg-slate-600 text-gray-200'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Get Started
      </motion.button>
    </Link>
  </motion.div>
);

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.FC<{ size?: number; className?: string }>;
  category: ServiceCategory;
  duration: string;
  features: string[];
  imageUrl?: string;
  videoUrl?: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Full Stack Development',
    description: 'Learn end-to-end web development with modern technologies and build commercial-grade applications.',
    icon: Globe,
    category: 'development',
    duration: '16 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    features: [
      'Frontend frameworks (React, Vue, Angular)',
      'Backend technologies (Node.js, Express)',
      'Database design and management',
      'API development and integration',
      'Authentication and security',
      'Deployment and DevOps basics'
    ]
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Master cross-platform and native mobile app development for iOS and Android.',
    icon: Code,
    category: 'development',
    duration: '12 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    features: [
      'Flutter for cross-platform development',
      'Native iOS development with Swift',
      'Native Android development with Kotlin',
      'UI/UX design principles for mobile',
      'App store submission and publishing',
      'Backend integration and API consumption'
    ]
  },
  {
    id: 3,
    title: 'AI & Machine Learning',
    description: 'Dive into the world of artificial intelligence and machine learning algorithms.',
    icon: BookOpen,
    category: 'aiml',
    duration: '20 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    features: [
      'Data preprocessing and analysis',
      'Supervised and unsupervised learning',
      'Deep learning with TensorFlow and PyTorch',
      'Computer vision applications',
      'Natural language processing',
      'AI model deployment and scaling'
    ]
  },
  {
    id: 4,
    title: 'Data Science Fundamentals',
    description: 'Master the essential skills of data analysis, visualization, and statistical modeling.',
    icon: Database,
    category: 'datascience',
    duration: '16 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    features: [
      'Python for data analysis (Pandas, NumPy)',
      'Data visualization with Matplotlib and Seaborn',
      'Statistical analysis and hypothesis testing',
      'Exploratory data analysis techniques',
      'Machine learning fundamentals',
      'Data storytelling and presentation'
    ]
  },
  {
    id: 5,
    title: 'Advanced Data Science',
    description: 'Take your data science skills to the next level with advanced techniques and big data tools.',
    icon: Database,
    category: 'datascience',
    duration: '18 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    features: [
      'Advanced statistical modeling',
      'Time series analysis and forecasting',
      'Big data processing with Spark',
      'Deep learning for data science',
      'Natural Language Processing (NLP)',
      'Model deployment with Flask/Django'
    ]
  },
  {
    id: 6,
    title: 'Cloud Computing & DevOps',
    description: 'Learn to design, deploy and manage cloud infrastructure and automate development pipelines.',
    icon: Cloud,
    category: 'cloud',
    duration: '14 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    features: [
      'AWS, Azure, and Google Cloud platforms',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Containerization with Docker and Kubernetes',
      'CI/CD pipeline implementation',
      'Monitoring and logging',
      'Cloud security best practices'
    ]
  },
  {
    id: 7,
    title: 'AWS Cloud Architecture',
    description: 'Design and implement scalable, secure cloud solutions on AWS infrastructure.',
    icon: Cloud,
    category: 'cloud',
    duration: '14 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    features: [
      'AWS core services (EC2, S3, RDS, Lambda)',
      'VPC design and implementation',
      'Security and compliance best practices',
      'Serverless architecture patterns',
      'Cost optimization strategies',
      'Disaster recovery planning'
    ]
  },
  {
    id: 8,
    title: 'Embedded Systems & IoT',
    description: 'Build smart devices and connected systems with embedded programming and IoT technologies.',
    icon: Cpu,
    category: 'embedded',
    duration: '18 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    features: [
      'Microcontroller programming',
      'Sensor integration and signal processing',
      'Real-time operating systems',
      'IoT protocols and communication',
      'Edge computing concepts',
      'Embedded systems security'
    ]
  }
];

export default Services;