import i18n from './config';

/**
 * Format currency based on current language
 */
export const formatCurrency = (amount, currency = 'EUR') => {
  const locale = i18n.language === 'el' ? 'el-GR' : 'en-US';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

/**
 * Format date based on current language
 */
export const formatDate = (date, options = {}) => {
  const locale = i18n.language === 'el' ? 'el-GR' : 'en-US';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  return new Intl.DateTimeFormat(locale, { ...defaultOptions, ...options }).format(dateObj);
};

/**
 * Format number based on current language
 */
export const formatNumber = (number, options = {}) => {
  const locale = i18n.language === 'el' ? 'el-GR' : 'en-US';
  
  return new Intl.NumberFormat(locale, options).format(number);
};

/**
 * Format relative time (e.g., "2 hours ago")
 */
export const formatRelativeTime = (date) => {
  const locale = i18n.language === 'el' ? 'el-GR' : 'en-US';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  
  if (diffInSeconds < 60) {
    return rtf.format(-diffInSeconds, 'second');
  } else if (diffInSeconds < 3600) {
    return rtf.format(-Math.floor(diffInSeconds / 60), 'minute');
  } else if (diffInSeconds < 86400) {
    return rtf.format(-Math.floor(diffInSeconds / 3600), 'hour');
  } else {
    return rtf.format(-Math.floor(diffInSeconds / 86400), 'day');
  }
};

/**
 * Get current locale for other formatting needs
 */
export const getCurrentLocale = () => {
  return i18n.language === 'el' ? 'el-GR' : 'en-US';
};
