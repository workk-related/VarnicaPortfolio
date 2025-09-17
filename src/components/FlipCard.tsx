import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
  title: string;
  skills: string[];
}

const FlipCard: React.FC<FlipCardProps> = ({ title, skills }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const gradientText = "bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent";

  return (
    <div 
      className="relative w-full h-[320px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-transform duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full bg-card rounded-xl p-6 shadow-lg border border-border flex items-center justify-center text-center hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-secondary/30">
            <h3 className={`text-2xl font-bold ${gradientText}`}>
              {title}
            </h3>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-card rounded-xl p-6 shadow-lg border border-border overflow-auto hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-secondary/30">
            <ul className="list-disc list-inside space-y-2">
              {skills.map((skill, index) => (
                <li key={index} className="text-sm text-foreground hover:text-accent transition-colors">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default FlipCard;