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
SITE_URL=https://www.i-k-psoma.gr
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

Set up a redirect from `i-k-psoma.gr` to `www.i-k-psoma.gr` (no trailing slash) to avoid duplicate content issues.

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
=======
<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# JOHN-DEERE-WEBSITE

<em>Empowering Agriculture with Authentic John Deere Solutions</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/Konstantinos-Pechlivanidis/john-deere-website?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/Konstantinos-Pechlivanidis/john-deere-website?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/Konstantinos-Pechlivanidis/john-deere-website?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=flat&logo=Markdown&logoColor=white" alt="Markdown">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/Font%20Awesome-538DD7.svg?style=flat&logo=Font-Awesome&logoColor=white" alt="Font%20Awesome">

</div>
<br>

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)

---

## Overview

Elevate your web development experience with **john-deere-website**, a robust React application tailored for seamless user engagement in the agricultural sector.

**Why john-deere-website?**

This project simplifies the development of user-friendly interfaces while ensuring maintainability and responsiveness. The core features include:

- 🌟 **Efficient Module Resolution:** Simplifies import statements, enhancing code readability and maintainability.
- 📚 **Comprehensive Setup Guide:** Provides essential commands for development, testing, and deployment, streamlining the developer experience.
- ⚙️ **Robust Project Configuration:** Defines dependencies and scripts, ensuring a cohesive development environment.
- 🎨 **Responsive Design with Tailwind CSS:** Facilitates customizable themes and dark mode, enhancing UI consistency and user experience.
- 🔄 **Component-Based Architecture:** Promotes reusability and maintainability, allowing for efficient collaboration among developers.
- 📞 **User Engagement Features:** Enhances interaction with components like RequestQuoteButton and ContactSection, improving support request management.

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript
- **Package Manager:** Npm

### Installation

Build john-deere-website from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/Konstantinos-Pechlivanidis/john-deere-website
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd john-deere-website
    ```

3. **Install the dependencies:**

**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

### Testing

John-deere-website uses the {__test_framework__} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

---

<div align="left"><a href="#top">⬆ Return</a></div>

---
master

