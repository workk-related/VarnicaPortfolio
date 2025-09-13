import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, FileText } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact | Varnica - Product & Project Manager';
  }, []);

  const contactLinks = [
    {
    name: 'Email',
    icon: <Mail size={24} />,
    href: 'mailto:varnicabajaj24@gmail.com',
    label: 'varnicabajaj24@gmail.com'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={24} />,
    href: 'https://www.linkedin.com/in/varnica-bajaj/',
    label: 'linkedin.com/in/varnica-bajaj/'
  },
  {
    name: 'Phone',
    icon: <Phone size={24} />, 
    href: 'tel:+919717146156',
    label: '+91 9717146156'
  },
  {
    name: 'Resume',
    icon: <FileText size={24} />,
    href: '/VarnicaBajaj-Resume.pdf',
    label: 'View Resume'
  },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a question or want to work together? Reach out to me!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-lg mb-8">
              Feel free to reach out if you're looking for a product manager, have a question, or just want to connect.
            </p>

            <div className="space-y-6">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group p-4 rounded-lg hover:bg-secondary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="mr-4 text-accent">{link.icon}</span>
                  <div>
                    <p className="font-medium">{link.name}</p>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {link.label}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Current Status</h3>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="w-3 h-3 rounded-full bg-green-500 mr-2" />
                  <p className="font-medium">Available for new opportunities</p>
                </div>
                <p className="text-muted-foreground">
                  I’m currently seeking product and project management roles where I can blend strategy with empathy to build products that matter. I’m most energized by early-stage, fast-moving teams who care deeply about users, iterate with purpose, and aren't afraid to challenge the status quo. If you’re building something meaningful, I’d love to be part of that journey.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
