# Internationalization (i18n) Guide

This project supports full internationalization with Greek (default) and English languages.

## 🌍 Supported Languages

- **Greek (el)** - Default language
- **English (en)** - Secondary language

## 🚀 Quick Start

The language toggle is available in the header (desktop) and mobile menu. Users can switch between languages instantly, and their preference is saved in localStorage.

## 📁 File Structure

```
src/i18n/
├── config.js                 # i18next configuration
├── format.js                 # Date/number formatting utilities
└── locales/
    ├── el/                   # Greek translations
    │   ├── common.json
    │   ├── layout.json
    │   ├── home.json
    │   ├── about.json
    │   ├── parts.json
    │   ├── services.json
    │   └── contact.json
    └── en/                   # English translations
        ├── common.json
        ├── layout.json
        ├── home.json
        ├── about.json
        ├── parts.json
        ├── services.json
        └── contact.json
```

## 🔧 Adding New Translations

### 1. Add New Keys to Translation Files

**For Greek (el):**
```json
// src/i18n/locales/el/your-namespace.json
{
  "new_key": "Νέο κείμενο"
}
```

**For English (en):**
```json
// src/i18n/locales/en/your-namespace.json
{
  "new_key": "New text"
}
```

### 2. Use in Components

```jsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation('your-namespace');
  
  return (
    <div>
      <h1>{t('new_key')}</h1>
    </div>
  );
};
```

### 3. Using Multiple Namespaces

```jsx
const { t } = useTranslation(['common', 'home', 'about']);

// Access translations
const title = t('home:hero.title');
const button = t('common:request_quote');
```

## 🎨 Language Toggle Component

The language toggle is an iOS-style segmented control:

```jsx
import LanguageToggle from '../components/i18n/LanguageToggle';

// Default variant
<LanguageToggle />

// Mobile variant (larger)
<LanguageToggle variant="mobile" />
```

## 📊 Formatting Utilities

Use the formatting utilities for locale-specific formatting:

```jsx
import { formatCurrency, formatDate, formatNumber } from '../i18n/format';

// Currency formatting
const price = formatCurrency(1234.56); // €1,234.56 (EN) or 1.234,56 € (EL)

// Date formatting
const date = formatDate(new Date()); // "January 1, 2024" (EN) or "1 Ιανουαρίου 2024" (EL)

// Number formatting
const number = formatNumber(1234.56); // "1,234.56" (EN) or "1.234,56" (EL)
```

## 🔄 Language Detection

The system automatically detects language in this order:
1. **localStorage** - User's saved preference
2. **navigator** - Browser language
3. **htmlTag** - HTML lang attribute
4. **fallback** - Greek (el)

## 📝 Best Practices

### 1. Key Naming Convention
- Use descriptive, hierarchical keys: `home.hero.title`
- Use snake_case for consistency: `request_quote`
- Group related keys: `navigation.home`, `navigation.about`

### 2. Namespace Organization
- **common**: Shared across all pages (buttons, labels, etc.)
- **layout**: Header, footer, navigation
- **home**: Homepage content
- **about**: About page content
- **parts**: Parts page content
- **services**: Services page content
- **contact**: Contact page content

### 3. Translation Guidelines
- Keep translations concise but complete
- Maintain consistent tone across languages
- Test with different text lengths (some languages are longer)
- Use interpolation for dynamic content: `t('welcome', { name: 'John' })`

### 4. Component Structure
```jsx
const MyComponent = () => {
  const { t } = useTranslation('namespace');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <button>{t('common:button_text')}</button>
    </div>
  );
};
```

## 🐛 Troubleshooting

### Common Issues

1. **Translation not found**: Check if the key exists in both language files
2. **Namespace not loaded**: Ensure the namespace is added to `src/i18n/config.js`
3. **Language not switching**: Check if the language toggle is properly connected

### Debug Mode

Enable debug mode in development:
```javascript
// In src/i18n/config.js
i18n.init({
  // ... other options
  debug: process.env.NODE_ENV === 'development'
});
```

## 🚀 Adding New Languages

1. Create new language directory: `src/i18n/locales/[lang]/`
2. Copy existing JSON files and translate content
3. Update `src/i18n/config.js` to include the new language
4. Add language option to `LanguageToggle` component
5. Update language detection configuration

## 📱 Mobile Considerations

- Language toggle is optimized for mobile with larger touch targets
- Translations should work well on small screens
- Consider text length differences between languages

## 🔍 SEO Considerations

- The `<html lang>` attribute is automatically updated
- Consider adding language-specific meta tags
- Implement hreflang tags for better SEO

---

For more information, refer to the [i18next documentation](https://www.i18next.com/) and [react-i18next documentation](https://react.i18next.com/).
