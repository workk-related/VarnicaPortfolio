import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
  title: string;
  skills: string[];
}

const FlipCard: React.FC<FlipCardProps> = ({ title, skills }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const gradientText = "bg-gradient-to-r from-accent via-purple-500 to-blue-500 bg-clip-text text-transparent";

  return (
    <div 
      className="relative w-full h-[300px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-transform duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center text-center hover:shadow-xl transition-shadow">
            <h3 className={`text-2xl font-bold ${gradientText}`}>
              {title}
            </h3>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 overflow-auto hover:shadow-xl transition-shadow">
            <ul className="list-disc list-inside space-y-2">
              {skills.map((skill, index) => (
                <li key={index} className="text-sm text-gray-700 dark:text-gray-200">
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