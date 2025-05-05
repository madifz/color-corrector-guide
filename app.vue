<template>
  <div class="min-h-screen flex flex-col">
    <ClientOnly>
      <TheHeader />
      <main>
        <HeroSection id="hero" />
        <QuickGuideSection id="quick-guide" />
        <WebcamToolSection id="webcam-tool" />
        <ExtendedGuideSection id="extended-guide" />
      </main>
      <TheFooter />
    </ClientOnly>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue';

// Set up head metadata using the useHead composable
useHead({
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
});

onMounted(async () => {
  if (!process.client) return;
  
  // Wait for next tick to ensure client-side only execution
  await nextTick();
  
  // Check for saved theme preference or prefer-color-scheme
  if (
    localStorage.getItem('color-theme') === 'dark' || 
    (!localStorage.getItem('color-theme') && 
     window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
</script>

<style>
@import './assets/css/main.css';
</style>