# Color Corrector Guide

A mobile-optimized, single-page application (SPA) built with Nuxt.js 3 that helps users understand and use color correctors effectively.

## Features

- Responsive, mobile-first design
- Interactive webcam tool for trying color correctors
- Comprehensive guide to color correction techniques
- SEO optimized with proper metadata

## Tech Stack

- Nuxt.js 3
- Vue 3
- Tailwind CSS
- WebRTC (for webcam functionality)

## Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## Local Development

To start the development server:

```bash
npm run dev
```

The application will be available at http://localhost:3000

## Building for Production

To generate a static site for production:

```bash
npm run generate
```

The output will be in the `.output/public` directory.

## Deployment to Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set the build command to: `npm run generate`
3. Set the output directory to: `.output/public`
4. Deploy!

## Project Structure

- `components/` - Reusable Vue components
  - `sections/` - Main page sections
  - `webcam/` - Webcam functionality components
  - `ui/` - UI components
- `pages/` - Application routes
- `public/` - Static assets
- `assets/` - CSS and other assets
- `nuxt.config.ts` - Nuxt configuration

## License

This project is licensed under the MIT License - see the LICENSE file for details.