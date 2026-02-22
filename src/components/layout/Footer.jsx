import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { siteConfig } from '../../constants/siteConfig';
import { navLinks } from '../../constants/navigation';
import { services } from '../../constants/services';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-gray-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-white text-lg font-heading font-bold mb-4">
              {siteConfig.shortName}
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Professional cleaning services across Portlaoise, Dublin, and
              Kildare. Trusted by hundreds of homes and businesses.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center bg-primary-800 hover:bg-accent-500 rounded-lg transition-colors"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center bg-primary-800 hover:bg-accent-500 rounded-lg transition-colors"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href={siteConfig.social.twitter}
                aria-label="Twitter"
                className="w-9 h-9 flex items-center justify-center bg-primary-800 hover:bg-accent-500 rounded-lg transition-colors"
              >
                <FaTwitter className="text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-heading font-bold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white text-lg font-heading font-bold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm hover:text-accent-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white text-lg font-heading font-bold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 text-sm hover:text-accent-400 transition-colors"
                >
                  <FaPhone className="text-accent-500 mt-0.5 flex-shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm hover:text-accent-400 transition-colors"
                >
                  <FaEnvelope className="text-accent-500 mt-0.5 flex-shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <FaMapMarkerAlt className="text-accent-500 mt-0.5 flex-shrink-0" />
                {siteConfig.address}
              </li>
            </ul>
            <div className="mt-4 text-xs space-y-1">
              <p>{siteConfig.hours.weekdays}</p>
              <p>{siteConfig.hours.saturday}</p>
              <p>{siteConfig.hours.sunday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>&copy; {currentYear} {siteConfig.businessName}. All rights reserved.</p>
          <p>
            Serving {siteConfig.areas.join(', ')} &amp; surrounding areas
          </p>
        </div>
      </div>
    </footer>
  );
}
