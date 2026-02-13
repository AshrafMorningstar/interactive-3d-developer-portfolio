import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Mail, Github, Linkedin, Calendar, Building2 } from 'lucide-react';
import { ProfessionalProfile } from '../types';
import { COLORS } from '../constants';
import SkillsChart from './SkillsChart';

interface RoleDetailProps {
  profile: ProfessionalProfile;
  onBack: () => void;
}

const RoleDetail: React.FC<RoleDetailProps> = ({ profile, onBack }) => {
  const colors = COLORS[profile.id];

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-950 overflow-y-auto">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-sm">BACK TO NEXUS</span>
          </button>
          <div className="flex items-center space-x-4">
             <a href="https://github.com/AshrafMorningstar" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors"><Github className="w-5 h-5"/></a>
             <a href="https://www.linkedin.com/in/ashrafmorningstar/" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
             <a href="mailto:contact@nexus.dev" className={`px-4 py-2 rounded-full ${colors.bg} text-white text-xs font-bold uppercase tracking-wider hover:opacity-90`}>
               Hire Me
             </a>
          </div>
        </div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border ${colors.border} bg-white/5 mb-6`}>
              <profile.icon className={`w-4 h-4 ${colors.main}`} />
              <span className={`text-xs font-mono font-bold uppercase ${colors.main}`}>{profile.shortTitle}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {profile.title}
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed mb-8 max-w-2xl">
              {profile.description}
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {profile.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className={`text-2xl font-bold font-mono ${colors.main}`}>{stat.value}</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* Visual Abstract representation of skills */}
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/5" />
             <div className="relative p-8 h-full flex flex-col justify-center">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                   <span className="w-2 h-2 rounded-full bg-white mr-3" />
                   Core Competencies
                </h3>
                <SkillsChart skills={profile.skills} roleType={profile.id} />
             </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="flex items-end justify-between mb-8">
             <h2 className="text-3xl font-bold text-white">Featured Work</h2>
             <div className="h-px flex-1 bg-white/10 ml-8" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.projects.map((project, idx) => (
              <div 
                key={project.id}
                className="group relative bg-neutral-900 border border-white/5 rounded-xl overflow-hidden hover:border-white/20 transition-all hover:translate-y-[-4px]"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-2 rounded-lg bg-white/5 ${colors.main}`}>
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </div>
                    {project.metric && (
                       <span className={`text-xs font-bold px-2 py-1 rounded bg-white/5 ${colors.main}`}>
                         {project.metric}
                       </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded border border-white/10 text-neutral-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience & Timeline */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-white mb-4">Experience</h2>
                <p className="text-neutral-400">
                  A timeline of my professional journey and key milestones in the industry.
                </p>
            </div>
            <div className="lg:col-span-2 space-y-8">
              {profile.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l border-white/10">
                  <div className={`absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full ${colors.bg}`} />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="font-mono text-sm text-neutral-500">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-sm text-neutral-400 mb-3">
                    <Building2 className="w-4 h-4 mr-2" />
                    {exp.company}
                  </div>
                  <p className="text-neutral-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
        </motion.div>

        {/* Footer Contact */}
        <motion.div variants={itemVariants} className="mt-20 pt-10 border-t border-white/10 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Ready to collaborate?</h2>
            <div className="flex justify-center space-x-6">
                <a href="mailto:contact@nexus.dev" className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>Email Me</span>
                </a>
                <a href="https://www.linkedin.com/in/ashrafmorningstar/" className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                </a>
            </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default RoleDetail;
