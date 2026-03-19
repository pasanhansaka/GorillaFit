import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

export function ServiceCard({ icon, title, description }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white dark:bg-dark-lighter p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:border-primary dark:hover:border-primary group transition-all duration-300"
    >
      <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-dark dark:text-light">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
        {description}
      </p>
    </motion.div>
  );
}

export function TrainerCard({ image, name, specialty }) {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="relative group overflow-hidden rounded-2xl aspect-[4/5]"
    >
      {/* Using a placeholder if image fails or isn't provided, but normally uses `image` prop */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
        <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
        <p className="text-primary font-medium">{specialty}</p>
      </div>
    </motion.div>
  );
}

export function PricingCard({ plan, price, features, isPopular = false }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: isPopular ? -20 : -10, scale: 1.02 }}
      className={`relative p-8 rounded-3xl border ${isPopular ? 'bg-dark text-white border-dark shadow-2xl z-10' : 'bg-white dark:bg-dark-lighter border-gray-200 dark:border-gray-800 text-dark dark:text-light shadow-lg'}`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{plan}</h3>
      <div className="flex items-baseline mb-6">
        <span className="text-4xl font-black font-heading">Rs.{price}</span>
        <span className={`ml-2 ${isPopular ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>/mon</span>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <FiCheck className={`w-5 h-5 mr-3 shrink-0 ${isPopular ? 'text-primary' : 'text-primary'}`} />
            <span className={isPopular ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'}>{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 ${isPopular ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-gray-100 dark:bg-gray-800 text-dark dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
        Choose Plan
      </button>
    </motion.div>
  );
}
