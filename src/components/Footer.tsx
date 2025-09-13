import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Youtube, FileText, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container-custom">
        
        {/* Centered Name & Subheading */}
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-primary mb-2 block">
            Varnica Bajaj
          </Link>
          <p className="text-muted-foreground text-sm">
            Tech-Driven Thinker | PM in Progress | Bridging Engineering & Product
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 my-8">
          <a
            href="tel:+919717146156"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Phone"
          >
            <Phone size={24} />
          </a>
          <a
            href="mailto:varnicabajaj24@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://linkedin.com/in/varnica-bajaj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="/VarnicaBajaj-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Resume"
          >
            <FileText size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Varnica. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
