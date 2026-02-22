import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { siteConfig } from '../../constants/siteConfig';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-primary-50 text-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <FaPhone />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
          <a
            href={`tel:${siteConfig.phone}`}
            className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-primary-50 text-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <FaEnvelope />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-primary-50 text-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <FaMapMarkerAlt />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
          <p className="text-sm text-gray-600">{siteConfig.address}</p>
          <p className="text-xs text-gray-500 mt-1">
            Serving {siteConfig.areas.join(', ')}
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-primary-50 text-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <FaClock />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
          <div className="text-sm text-gray-600 space-y-0.5">
            <p>{siteConfig.hours.weekdays}</p>
            <p>{siteConfig.hours.saturday}</p>
            <p>{siteConfig.hours.sunday}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
