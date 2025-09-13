import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import FlipCard from './FlipCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const SkillsCarousel: React.FC<{ categories: SkillCategory[] }> = ({ categories }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full py-4">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-600"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>
      
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="min-w-[300px] snap-center"
            style={{ scrollSnapAlign: 'center' }}
          >
            <FlipCard title={category.title} skills={category.skills} />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-600"
      >
        <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>
    </div>
  );
};

export default SkillsCarousel;