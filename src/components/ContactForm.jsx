import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error('Email failed:', error);
    }
  };


  return (
    <section id="contact" className="py-24 bg-light dark:bg-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-bold tracking-wider uppercase mb-2"
          >
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-dark dark:text-light mb-6"
          >
            READY TO START?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Have questions about our memberships, classes, or facilities? Drop us a message and our team will get back to you shortly.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-dark-lighter p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800"
        >
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mb-6">
                <FiCheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-dark dark:text-light mb-2">Message Sent Successfully!</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Thank you for reaching out. One of our team members will contact you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-dark border focus:ring-2 focus:outline-none transition-colors ${errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary/20 text-dark dark:text-light'}`}
                    placeholder="John Doe"
                    {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Name is too short' } })}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-dark border focus:ring-2 focus:outline-none transition-colors ${errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary/20 text-dark dark:text-light'}`}
                    placeholder="john@example.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                    })}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Subject</label>
                <input
                  id="subject"
                  type="text"
                  className={`w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-dark border focus:ring-2 focus:outline-none transition-colors ${errors.subject ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary/20 text-dark dark:text-light'}`}
                  placeholder="How can we help you?"
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-dark border focus:ring-2 focus:outline-none transition-colors resize-none ${errors.message ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary/20 text-dark dark:text-light'}`}
                  placeholder="Tell us more about your fitness goals..."
                  {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Send Message <FiSend className="ml-2" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
