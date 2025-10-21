import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';
import { Globe } from 'lucide-react';

/**
 * iOS 18-style Language Toggle Component
 * Features:
 * - Glassmorphism design
 * - Smooth animations
 * - Fully accessible
 * - Responsive design
 */
const LanguageToggle = ({ variant = 'default', className }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || 'el';

  const languages = [
    { code: 'el', label: 'ΕΛ', fullName: 'Ελληνικά' },
    { code: 'en', label: 'EN', fullName: 'English' }
  ];

  const handleLanguageChange = (langCode) => {
    if (langCode === currentLanguage) return;
    i18n.changeLanguage(langCode);
  };

  const handleKeyDown = (event, langCode) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleLanguageChange(langCode);
    }
    // Arrow key navigation
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      const currentIndex = languages.findIndex(l => l.code === currentLanguage);
      const nextIndex = event.key === 'ArrowRight' 
        ? (currentIndex + 1) % languages.length 
        : (currentIndex - 1 + languages.length) % languages.length;
      handleLanguageChange(languages[nextIndex].code);
    }
  };

  // Mobile variant (for mobile menu)
  if (variant === 'mobile') {
    return (
      <div className="flex flex-col space-y-2 px-2 py-3">
        <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
          <Globe className="w-3.5 h-3.5" />
          <span className="font-medium">Language</span>
        </div>
        <div className="flex space-x-2">
          {languages.map((lang) => {
            const isActive = currentLanguage === lang.code;
            return (
              <button
                key={lang.code}
                aria-label={`Switch to ${lang.fullName}`}
                aria-pressed={isActive}
                className={cn(
                  'flex-1 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-jdgreen focus:ring-offset-2',
                  'active:scale-95',
                  isActive
                    ? 'bg-jdgreen text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
                onClick={() => handleLanguageChange(lang.code)}
                onKeyDown={(e) => handleKeyDown(e, lang.code)}
              >
                {lang.fullName}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Default variant (for navbar)
  return (
    <div
      className={cn(
        'relative inline-flex items-center rounded-full p-0.5',
        'bg-gradient-to-br from-gray-100 to-gray-200',
        'shadow-inner border border-gray-200/50',
        'backdrop-blur-sm',
        className
      )}
      role="tablist"
      aria-label="Language selection"
    >
      {/* Sliding background indicator */}
      <div
        className={cn(
          'absolute inset-0.5 rounded-full transition-all duration-300 ease-out',
          'bg-white shadow-md',
          currentLanguage === 'en' && 'translate-x-[calc(100%-0.25rem)]'
        )}
        style={{
          width: 'calc(50% - 0.125rem)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)'
        }}
      />
      
      {languages.map((lang) => {
        const isActive = currentLanguage === lang.code;
        return (
          <button
            key={lang.code}
            role="tab"
            aria-selected={isActive}
            aria-label={`Switch to ${lang.fullName}`}
            className={cn(
              'relative z-10 flex items-center justify-center',
              'px-3 py-1.5 rounded-full text-sm font-semibold',
              'transition-all duration-300 ease-out',
              'focus:outline-none focus:ring-2 focus:ring-jdgreen focus:ring-offset-2',
              'hover:scale-105 active:scale-95',
              'min-w-[44px]',
              isActive
                ? 'text-jdgreen'
                : 'text-gray-500 hover:text-gray-700'
            )}
            onClick={() => handleLanguageChange(lang.code)}
            onKeyDown={(e) => handleKeyDown(e, lang.code)}
            tabIndex={0}
          >
            <span className="relative font-bold tracking-wide">
              {lang.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
