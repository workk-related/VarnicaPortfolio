import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Page Not Found | Varnica - Product & Project Manager';
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <h1 className="text-6xl font-bold mb-6">404</h1>
          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button 
            onClick={() => navigate('/')}
            className="flex items-center mx-auto"
          >
            <ArrowLeft size={18} className="mr-2" /> Back to Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;