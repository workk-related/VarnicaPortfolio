import React from 'react';
import { motion } from 'framer-motion';
import whatsappIcon from '../assets/images/WhatsAppIcon.png';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/+919717146156"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <img 
        src={whatsappIcon} 
        alt="Chat on WhatsApp"
        className="w-14 h-14"
      />
    </motion.a>
  );
};

export default WhatsAppButton;