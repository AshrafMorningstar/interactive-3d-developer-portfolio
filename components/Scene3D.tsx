import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILES, COLORS } from '../constants';
import { RoleType } from '../types';

interface Scene3DProps {
  onSelectRole: (role: RoleType) => void;
}

const Scene3D: React.FC<Scene3DProps> = ({ onSelectRole }) => {
  const [rotation, setRotation] = useState(0);
  const [activeFace, setActiveFace] = useState<number>(0);
  
  const roles = Object.values(PROFILES);
  const totalFaces = roles.length;
  const anglePerFace = 360 / totalFaces;

  // Auto-rotate effect when idle
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev - anglePerFace);
      setActiveFace(prev => (prev + 1) % totalFaces);
    }, 5000);
    return () => clearInterval(interval);
  }, [anglePerFace, totalFaces]);

  const handleFaceClick = (roleId: RoleType) => {
    onSelectRole(roleId);
  };

  const getTransform = (index: number) => {
    const angle = index * anglePerFace;
    // Calculate translate Z based on width to form a prism/carousel
    // Assuming width 300px roughly
    const radius = 280; 
    return `rotateY(${angle}deg) translateZ(${radius}px)`;
  };

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center overflow-hidden perspective-1000">
      
      {/* Ambient background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative w-[320px] h-[420px] preserve-3d"
        animate={{ rotateY: rotation }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // smooth cubic bezier
      >
        {roles.map((role, index) => {
          const colors = COLORS[role.id];
          const isActive = index === activeFace;
          
          return (
            <div
              key={role.id}
              onClick={() => handleFaceClick(role.id)}
              className={`absolute inset-0 rounded-2xl border ${colors.border} bg-neutral-900/90 backdrop-blur-md cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_-12px] hover:${colors.shadow}`}
              style={{
                transform: getTransform(index),
                // backfaceVisibility: 'hidden', // Optional: keep visible for transparency effect
              }}
            >
              {/* Card Content */}
              <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-6">
                
                {/* Icon Halo */}
                <div className={`relative w-20 h-20 rounded-full ${colors.bg} bg-opacity-10 flex items-center justify-center mb-4 group-hover:bg-opacity-20 transition-all`}>
                  <div className={`absolute inset-0 rounded-full ${colors.bg} opacity-20 blur-md group-hover:opacity-40 animate-pulse`} />
                  <role.icon className={`w-10 h-10 ${colors.main}`} />
                </div>

                {/* Text Info */}
                <div>
                  <h3 className={`text-sm font-mono tracking-widest uppercase mb-2 ${colors.main} opacity-80`}>
                    {role.shortTitle}
                  </h3>
                  <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
                    {role.title.split(' ')[0]}
                  </h2>
                </div>

                <div className="w-12 h-1 bg-white/20 rounded-full" />

                <p className="text-neutral-400 text-sm line-clamp-3">
                  {role.tagline}
                </p>

                <button 
                  className={`px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 text-sm font-medium transition-colors ${colors.main}`}
                >
                  View Profile
                </button>
              </div>

              {/* Decorative corner accents */}
              <div className={`absolute top-0 left-0 w-4 h-4 border-t border-l ${colors.border} rounded-tl-lg m-2 opacity-50`} />
              <div className={`absolute bottom-0 right-0 w-4 h-4 border-b border-r ${colors.border} rounded-br-lg m-2 opacity-50`} />
            </div>
          );
        })}
      </motion.div>
      
      {/* Navigation Indicators */}
      <div className="absolute bottom-12 flex space-x-4 z-10">
        {roles.map((role, idx) => (
          <button
            key={role.id}
            onClick={() => {
                const diff = idx - activeFace;
                setRotation(prev => prev - (diff * anglePerFace));
                setActiveFace(idx);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeFace === idx ? COLORS[role.id].bg : 'bg-white/20 hover:bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Scene3D;
