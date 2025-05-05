// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  
  // Components configuration
  components: {
    path: '~/components',
    pathPrefix: false,
  },
  
  // App config
  app: {
    head: {
      title: 'Color Corrector Guide - Find Your Perfect Match',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Learn how to use color correctors effectively with our comprehensive guide and interactive webcam tool to find your perfect match.' },
        { property: 'og:title', content: 'Color Corrector Guide - Find Your Perfect Match' },
        { property: 'og:description', content: 'Learn how to use color correctors effectively with our comprehensive guide and interactive webcam tool to find your perfect match.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Color Corrector Guide - Find Your Perfect Match' },
        { name: 'twitter:description', content: 'Learn how to use color correctors effectively with our comprehensive guide and interactive webcam tool to find your perfect match.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap' }
      ]
    }
  }
})