import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const JoinWaitlist = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <CheckCircle className="w-24 h-24 text-white mx-auto mb-8" />
          <h2 className="text-6xl font-display uppercase mb-4">You're In</h2>
          <p className="text-xl text-neutral-400">Welcome to the revolution.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <section className="min-h-[70vh] flex items-center border-b-2 border-white">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm uppercase tracking-mega font-bold mb-6 block">Join Us</span>
              <h1 className="text-[12vw] font-display uppercase leading-[0.8] mb-12">
                Break
                <br />
                <span className="outline-text">Free</span>
              </h1>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-12">
              <FormField
                label="What Should We Call You?"
                type="text"
                placeholder="Your full name"
                required
              />

              <FormField
                label="Where Can We Reach You?"
                type="email"
                placeholder="your@email.com"
                required
              />

              <div>
                <label className="text-sm uppercase tracking-ultra font-bold mb-4 block">
                  Your Creative Weapon
                </label>
                <select
                  required
                  className="w-full bg-black border-2 border-white px-8 py-4 text-white focus:outline-none focus:border-neutral-400 transition-colors"
                >
                  <option value="">Select your medium</option>
                  <option value="photography">Photography</option>
                  <option value="painting">Painting</option>
                  <option value="sculpture">Sculpture</option>
                  <option value="digital">Digital Art</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <FormField
                label="Your Story (Optional)"
                type="textarea"
                placeholder="Tell us about your art and vision..."
                rows={4}
              />

              <motion.button
                whileHover={{ scale: 0.98 }}
                type="submit"
                className="w-full group bg-white text-black py-6 flex items-center justify-center space-x-4 hover:bg-neutral-200 transition-colors"
              >
                <span className="text-sm uppercase tracking-ultra font-bold">Join The Revolution</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const FormField = ({ 
  label, 
  type, 
  placeholder, 
  required, 
  rows 
}: { 
  label: string; 
  type: string; 
  placeholder: string; 
  required?: boolean;
  rows?: number;
}) => (
  <div>
    <label className="text-sm uppercase tracking-ultra font-bold mb-4 block">
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        rows={rows}
        placeholder={placeholder}
        required={required}
        className="w-full bg-black border-2 border-white px-8 py-4 text-white focus:outline-none focus:border-neutral-400 transition-colors"
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-black border-2 border-white px-8 py-4 text-white focus:outline-none focus:border-neutral-400 transition-colors"
      />
    )}
  </div>
);

export default JoinWaitlist;