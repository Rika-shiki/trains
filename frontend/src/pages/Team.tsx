import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getTeamMembers } from '../utils/supabase';
import AnimatedHeading from '../components/AnimatedHeading';

type TeamMember = {
  id: number;
  name: string;
  position: string;
  quote: string;
  image: string;
};

const Team = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const { data, error } = await getTeamMembers();
        
        if (error) {
          throw error;
        }
        
        if (data) {
          setTeamMembers(data);
        }
      } catch (error) {
        console.error('Error fetching team members:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTeamMembers();
  }, []);

  return (
    <div className="min-h-screen pb-20">
      {/* Team Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <svg width="100%" height="100%">
            <pattern
              id="pattern-circles"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
            >
              <circle id="pattern-circle" cx="10" cy="10" r="1.5" fill="#3B82F6" />
            </pattern>
            <rect
              id="rect"
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#pattern-circles)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedHeading
              text="Our Leadership Team"
              className="text-4xl md:text-5xl font-bold mb-6"
              delay={0.2}
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-300 mb-8"
            >
              Meet the visionaries behind TRAInS who are transforming education and creating tomorrow's tech leaders.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-slate-800/80 backdrop-blur-sm rounded-xl overflow-hidden h-full flex flex-col hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300"
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-blue-900 to-slate-900">
        <motion.img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4 flex-grow">
          <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
          <p className="text-blue-400 font-medium">{member.position}</p>
        </div>
        
        <blockquote className="border-l-4 border-blue-500 pl-4 py-2 italic text-gray-300">
          "{member.quote}"
        </blockquote>
      </div>
    </motion.div>
  );
};

export default Team;