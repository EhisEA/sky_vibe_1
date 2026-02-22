import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-primary-500 hover:bg-primary-600 text-white shadow-md hover:shadow-lg',
  secondary:
    'bg-accent-500 hover:bg-accent-600 text-white shadow-md hover:shadow-lg',
  outline:
    'border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white',
  white:
    'bg-white text-primary-600 hover:bg-gray-50 shadow-md hover:shadow-lg',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  ...props
}) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
