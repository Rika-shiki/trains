import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, Globe, MessageSquare ,  Linkedin, Facebook, Twitter, Instagram  } from 'lucide-react';
import AnimatedHeading from '../components/AnimatedHeading';
// import { Mail, PhoneCall, MapPin, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    bestTime: 'morning',
    hearAbout: '',
    newsletter: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://trainsapp.org/node_app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) throw new Error('Failed to submit');
  
      const result = await response.json();
      console.log('Form submitted:', result);
      setSubmitStatus('success');
  
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        bestTime: 'morning',
        hearAbout: '',
        newsletter: false,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };
  
  return (
    <div className="min-h-screen">
      {/* Contact Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedHeading
              text="Get In Touch"
              className="text-4xl md:text-5xl font-bold mb-6"
              delay={0.2}
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-300"
            >
              Have questions about our programs? We're here to help!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <QuickContactCard
              icon={<Phone className="text-blue-400" size={24} />}
              title="Call Us"
              info="+91 9087375340"
              action="Call now"
              link="tel:+919087375340"
              delay={0.1}
            />
            <QuickContactCard
              icon={<Mail className="text-blue-400 text-wrap" size={24} />}
              title="Email Us"
              info="trainsapp.offical  @gmail.com"
              action="Send email"
              link="mailto:trainsapp.offical@gmail.com"
              delay={0.2}
            />
            <QuickContactCard
              icon={<MessageSquare className="text-blue-400" size={24} />}
              title="Live Chat"
              info="Chat with our team"
              action="Start chat"
              link="#"
              delay={0.3}
            />
            <QuickContactCard
              icon={<Globe className="text-blue-400" size={24} />}
              title="Visit Us"
              info="Peelamedu, Coimbatore"
              action="Get directions"
              link="#"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-slate-700 h-full">
                <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Our Location</h3>
                      <p className="text-gray-300">Coimbatore, Tamil Nadu, India - 641004</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email Us</h3>
                      <p className="text-gray-300">trainsapp.official@gmail.com</p>
                      {/* <p className="text-gray-300">support@trains-tech.com</p> */}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Call Us</h3>
                      <p className="text-gray-300">+91 9087375340</p>
                      {/* <p className="text-gray-300">+91 87654 32109</p> */}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Working Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-300">Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4 my-8">
                  <FooterSocialLink icon={<Facebook size={18} />} href="https://www.facebook.com/profile.php?id=61575851871380" />
              <FooterSocialLink icon={<Twitter size={18} />} href="https://x.com/TraInsApp_OFCL" />
              <FooterSocialLink icon={<Instagram size={18} />} href="https://www.instagram.com/trainsapp_ofcl/" />
              <FooterSocialLink icon={<Linkedin size={18} />} href="https://www.linkedin.com/in/trains-app-110505362" />
            </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h2 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Program Information">Program Information</option>
                        <option value="Admission">Admission</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Career">Career Opportunities</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-300 mb-1">
                        Preferred Contact Method
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="bestTime" className="block text-sm font-medium text-gray-300 mb-1">
                        Best Time to Contact
                      </label>
                      <select
                        id="bestTime"
                        name="bestTime"
                        value={formData.bestTime}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      >
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 4PM)</option>
                        <option value="evening">Evening (4PM - 6PM)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
                      placeholder="Type your message here..."
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-300 mb-1">
                      How did you hear about us?
                    </label>
                    <input
                      type="text"
                      id="hearAbout"
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder="Search engine, social media, friend, etc."
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-blue-500 focus:ring-blue-500"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-300">
                      Subscribe to our newsletter for updates and tech insights
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 
                        ${isSubmitting ? 'bg-slate-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'}
                        transition-colors duration-200 text-white`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send size={18} />
                    </button>
                    
                    {submitStatus === 'success' && (
                      <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-green-400"
                      >
                        Message sent successfully!
                      </motion.p>
                    )}
                    
                    {submitStatus === 'error' && (
                      <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-red-400"
                      >
                        Error sending message. Please try again.
                      </motion.p>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="max-w-3xl mx-auto grid gap-6">
            <FAQItem
              question="What are the admission requirements?"
              answer="Our programs are open to students and professionals with a basic understanding of programming concepts. Each program has specific prerequisites that will be discussed during the application process."
              delay={0.1}
            />
            <FAQItem
              question="How long are the training programs?"
              answer="Program duration varies from 12 to 20 weeks, depending on the course and specialization chosen. We offer flexible timing options to accommodate different schedules."
              delay={0.2}
            />
            <FAQItem
              question="What is the fee structure?"
              answer="We offer various payment models, including our unique revenue-sharing option where students can pay a portion of their fees through project earnings. Contact us for detailed fee structures."
              delay={0.3}
            />
            <FAQItem
              question="Do you provide placement assistance?"
              answer="Yes, we provide comprehensive placement support, including resume building, interview preparation, and connections with our industry partners. Additionally, successful students can join our startup incubation program."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="bg-slate-800/50 rounded-xl overflow-hidden">
            <div className="aspect-[16/9] w-full relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.073148682991!2d76.9618573152603!3d11.0287248921434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858e5b6b4e3d1%3A0x1e1e5a1e1e1e1e1e!2sPeelamedu%2C%20Coimbatore%2C%20Tamil%20Nadu%20641004!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0"
                title="Peelamedu, Coimbatore Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface QuickContactCardProps {
  icon: React.ReactNode;
  title: string;
  info: string;
  action: string;
  link: string;
  delay?: number;
}

const QuickContactCard: React.FC<QuickContactCardProps> = ({ icon, title, info, action, link, delay = 0 }) => (
  <motion.a
    href={link}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
  >
    <div className="flex items-start gap-4">
      <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400 group-hover:bg-blue-500/30 transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-300 mb-2">{info}</p>
        <span className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
          {action} →
        </span>
      </div>
    </div>
  </motion.a>
);

interface SocialLinkProps {
  href: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-slate-700 hover:bg-blue-500/20 flex items-center justify-center text-gray-300 hover:text-blue-400 transition-colors duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    {label === 'LinkedIn' && <i className="fab fa-linkedin-in"></i>}
    {label === 'Twitter' && <i className="fab fa-twitter"></i>}
    {label === 'Facebook' && <i className="fab fa-facebook-f"></i>}
    {label === 'Instagram' && <i className="fab fa-instagram"></i>}
  </a>
);

interface FAQItemProps {
  question: string;
  answer: string;
  delay?: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
  >
    <h3 className="text-lg font-semibold mb-3 text-white">{question}</h3>
    <p className="text-gray-300">{answer}</p>
  </motion.div>
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
export default Contact;