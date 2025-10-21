# Ι. & Κ. ΨΩΜΑ Ο.Ε. - John Deere Parts Website

A modern, responsive website for Ι. & Κ. ΨΩΜΑ Ο.Ε., specializing in authentic John Deere agricultural machinery parts and equipment in Greece.

## 🚀 Features

- **Multilingual Support**: Greek and English with i18next
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Meta tags, structured data, sitemap generation
- **Performance**: Lazy loading, code splitting, optimized images
- **Accessibility**: WCAG compliant with skip links and semantic HTML
- **Security**: CSP headers, HTTPS enforcement, GDPR compliance

## 🛠️ Tech Stack

- **React 19** with Create React App
- **Tailwind CSS** for styling
- **Shadcn/ui** for components
- **React Router** for navigation
- **i18next** for internationalization
- **React Helmet** for SEO

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

## 🌐 Deployment & DNS

### Environment Variables

Create a `.env.production` file:

```env
SITE_URL=https://i-k-psoma.gr
NODE_ENV=production
GENERATE_SOURCEMAP=false
```

### DNS Configuration

Configure the following DNS records for `i-k-psoma.gr`:

```
Type: A
Name: @
Value: [Your hosting provider's IP]

Type: CNAME  
Name: www
Value: i-k-psoma.gr
```

### Redirect Configuration

Set up a redirect from `www.i-k-psoma.gr` to `i-k-psoma.gr` (no trailing slash) to avoid duplicate content issues.

### Hosting Providers

This project is compatible with:

- **Vercel**: Zero-config deployment
- **Netlify**: Drag & drop the `build` folder
- **Render**: Static site deployment
- **GitHub Pages**: Deploy from `build` folder

### Build Artifacts

The production build creates a `build/` directory containing:

- Optimized HTML, CSS, and JavaScript
- Compressed images and assets
- Generated sitemap.xml
- Security headers configuration
- PWA manifest and service worker

## 🔧 Development

### Available Scripts

- `npm start` - Development server
- `npm run build` - Production build
- `npm test` - Run tests
- `npm run lint` - Lint code
- `npm run format` - Format code
- `npm run analyze` - Bundle analysis
- `npm run lighthouse` - Performance audit

### Project Structure

```
src/
├── components/          # Reusable components
├── pages/              # Page components
├── i18n/              # Internationalization
├── lib/               # Utilities
└── config/            # Configuration
```

## 📊 Performance

Target Lighthouse scores:
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

## 🔒 Security

- Content Security Policy (CSP)
- HTTPS enforcement
- XSS protection
- Clickjacking prevention
- Secure headers

## 📱 PWA Features

- Service worker for offline functionality
- Web app manifest
- Installable on mobile devices
- Responsive design

## 🌍 Internationalization

Supports Greek (el) and English (en) with:
- Automatic language detection
- URL-based language switching
- SEO-friendly hreflang tags
- Localized content and metadata

## 📈 Analytics

GDPR-compliant analytics with cookie consent:
- Privacy-friendly tracking
- User consent management
- Cookie banner implementation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

© 2025 Ι. & Κ. ΨΩΜΑ Ο.Ε. All rights reserved.