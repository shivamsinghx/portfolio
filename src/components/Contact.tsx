import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="dark:bg-neo-navy dark:text-white">
      <div className="neo-container">
        <h2 className="section-title dark:text-neo-lime">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <p className="text-lg mb-8 dark:text-white">
              I'm always open to new opportunities, collaborations, or just a friendly chat about tech. Feel free to reach out through the form or via the contact details below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-neo-pink dark:bg-neo-lime/40 text-white dark:text-neo-lime rounded-full flex items-center justify-center mr-4 border-2 border-neo-black dark:border-neo-lime/60 shadow-neo-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-sm text-neo-blue dark:text-neo-lime font-medium">Email</h3>
                  <a href="mailto:shivamsingx@gmail.com" className="text-lg font-medium hover:text-neo-pink dark:hover:text-neo-lime">
                    shivamsingx@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-neo-yellow dark:bg-neo-lime/40 text-neo-black dark:text-neo-lime rounded-full flex items-center justify-center mr-4 border-2 border-neo-black dark:border-neo-lime/60 shadow-neo-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-sm text-neo-blue dark:text-neo-lime font-medium">Location</h3>
                  <p className="text-lg font-medium">New Delhi, INDIA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="neo-card dark:bg-neo-darkblue dark:border-neo-lime/40 dark:text-white p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-neo-black dark:border-neo-lime/40 rounded-md focus:outline-none focus:ring-2 focus:ring-neo-blue dark:focus:ring-neo-lime dark:bg-neo-mint/20"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-neo-black dark:border-neo-lime/40 rounded-md focus:outline-none focus:ring-2 focus:ring-neo-blue dark:focus:ring-neo-lime dark:bg-neo-mint/20"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-neo-black dark:border-neo-lime/40 rounded-md focus:outline-none focus:ring-2 focus:ring-neo-blue dark:focus:ring-neo-lime dark:bg-neo-mint/20"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-neo-black dark:border-neo-lime/40 rounded-md focus:outline-none focus:ring-2 focus:ring-neo-blue dark:focus:ring-neo-lime dark:bg-neo-mint/20"
                />
              </div>
              
              <button 
                type="submit" 
                className="neo-button dark:bg-neo-lime/40 dark:border-neo-lime/60 dark:text-white w-full flex items-center justify-center space-x-2 hover:dark:bg-neo-lime/50"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
