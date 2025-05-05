<template>
  <section :id="id" class="min-h-screen flex items-center relative overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-100 via-white to-accent-100 dark:from-secondary-900 dark:via-secondary-800 dark:to-primary-900 opacity-80"></div>
    
    <!-- Decorative circles -->
    <div class="absolute -top-20 -left-20 w-64 h-64 bg-primary-400 dark:bg-primary-700 rounded-full opacity-20 blur-3xl"></div>
    <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-accent-400 dark:bg-accent-700 rounded-full opacity-20 blur-3xl"></div>
    
    <div class="container-section relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Color Corrector Guide
        </h1>
        <p class="text-xl md:text-2xl text-secondary-700 dark:text-secondary-200 mb-10 leading-relaxed animate-slide-up">
          Discover the perfect color corrector for your skin tone and learn how to apply it like a pro.
        </p>
        <a href="#quick-guide" class="btn btn-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
          Get Started
        </a>
      </div>
    </div>
    
    <!-- Scrolling indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-8 h-12 rounded-full border-2 border-secondary-400 dark:border-secondary-600 flex justify-center pt-2">
        <div class="w-1 h-3 bg-secondary-400 dark:bg-secondary-600 rounded-full animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: { type: String, default: 'hero' }
});
</script>