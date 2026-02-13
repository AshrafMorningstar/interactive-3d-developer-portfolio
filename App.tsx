import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Scene3D from './components/Scene3D';
import RoleDetail from './components/RoleDetail';
import { RoleType } from './types';
import { PROFILES } from './constants';

const App: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<RoleType | null>(null);

  return (
    <div className="min-h-screen bg-nexus-bg text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
      </div>

      <AnimatePresence mode="wait">
        {!selectedRole ? (
          <motion.div 
            key="hub"
            className="h-screen flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <header className="fixed top-0 w-full p-8 z-20 flex justify-between items-center pointer-events-none">
               <div className="pointer-events-auto">
                 <h1 className="text-2xl font-bold tracking-tighter">NEXUS<span className="text-cyan-500">.3D</span></h1>
                 <p className="text-xs text-neutral-500 tracking-[0.2em] uppercase">Ashraf Morningstar Portfolio</p>
               </div>
               <nav className="pointer-events-auto hidden md:flex space-x-6 text-sm font-medium text-neutral-400">
                 <a href="https://github.com/AshrafMorningstar" className="hover:text-white transition-colors">GITHUB</a>
                 <a href="https://www.linkedin.com/in/ashrafmorningstar/" className="hover:text-white transition-colors">LINKEDIN</a>
               </nav>
            </header>

            {/* Main 3D Scene */}
            <main className="flex-grow relative z-10">
              <Scene3D onSelectRole={setSelectedRole} />
            </main>

            {/* Footer Hints */}
            <footer className="fixed bottom-0 w-full p-8 text-center pointer-events-none">
              <p className="text-xs text-neutral-600 uppercase tracking-widest animate-pulse">
                Click a card to explore profile
              </p>
            </footer>
          </motion.div>
        ) : (
          <RoleDetail 
            key="detail"
            profile={PROFILES[selectedRole]} 
            onBack={() => setSelectedRole(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
