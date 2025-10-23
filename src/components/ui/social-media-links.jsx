import React from 'react';

const SocialMediaLinks = ({ variant = 'default', className = '' }) => {
  const baseClasses = "flex items-center space-x-4";
  const variantClasses = {
    default: "text-gray-600",
    footer: "text-gray-300",
    contact: "text-gray-600"
  };

  const iconClasses = {
    default: "h-6 w-6 hover:text-jdyellow transition-colors duration-200",
    footer: "h-5 w-5 hover:text-jdyellow transition-colors duration-200",
    contact: "h-6 w-6 hover:text-jdgreen transition-colors duration-200"
  };

  const linkClasses = {
    default: "hover:scale-110 transition-transform duration-200",
    footer: "hover:scale-110 transition-transform duration-200",
    contact: "hover:scale-110 transition-transform duration-200"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {/* Facebook Link */}
      <a
        href="https://www.facebook.com/profile.php?id=100009717723166"
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkClasses[variant]} group`}
        aria-label="Follow us on Facebook"
      >
        <svg
          className={`${iconClasses[variant]} group-hover:scale-110`}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>

      {/* Instagram Link */}
      <a
        href="https://www.instagram.com/i.k.psomaoe/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkClasses[variant]} group`}
        aria-label="Follow us on Instagram"
      >
        <svg
          className={`${iconClasses[variant]} group-hover:scale-110`}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243s.122-.928.49-1.243c.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243s-.122.928-.49 1.243c-.369.315-.807.49-1.297.49zm-7.83 1.297c-1.297 0-2.448.49-3.323 1.297-.928.875-1.418 2.026-1.418 3.323s.49 2.448 1.418 3.323c.875.807 2.026 1.297 3.323 1.297s2.448-.49 3.323-1.297c.928-.875 1.418-2.026 1.418-3.323s-.49-2.448-1.418-3.323c-.875-.807-2.026-1.297-3.323-1.297z"/>
        </svg>
      </a>
    </div>
  );
};

export default SocialMediaLinks;
