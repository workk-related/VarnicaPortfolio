import React, { useState } from 'react';
import { Button } from './Button';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xldbyjqe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="space-y-6 bg-card p-8 rounded-lg shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-input bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-input bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-input bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full rounded-md border border-input bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Your message here..."
        />
      </div>

      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center space-x-2"
          fullWidth
        >
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          <Send size={18} />
        </Button>

        {formStatus === 'success' && (
          <motion.p 
            className="mt-2 text-green-600 dark:text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Message sent successfully! I'll get back to you soon.
          </motion.p>
        )}

        {formStatus === 'error' && (
          <motion.p 
            className="mt-2 text-red-600 dark:text-red-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            There was an error sending your message. Please try again.
          </motion.p>
        )}
      </div>
    </motion.form>
  );
};

export default ContactForm;
