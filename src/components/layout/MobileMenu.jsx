import { NavLink } from 'react-router-dom';
import { FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../constants/navigation';
import { siteConfig } from '../../constants/siteConfig';

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={onClose}
          />

          {/* Slide-in Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 shadow-2xl lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              {/* Close button */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-heading font-bold text-primary-600">
                  {siteConfig.shortName}
                </span>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                        isActive
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <FaPhone className="text-accent-500" />
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <FaEnvelope className="text-accent-500" />
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
