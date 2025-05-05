<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-secondary-900/80 backdrop-blur-md shadow-sm transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex items-center justify-between">
        <a href="#hero" class="text-2xl font-bold text-primary-600 dark:text-primary-400">
          Color Corrector Guide
        </a>
        
        <nav class="hidden md:flex space-x-6">
          <a v-for="link in navLinks" :key="link.href" 
             :href="link.href" 
             class="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            {{ link.text }}
          </a>
        </nav>
        
        <div class="flex items-center space-x-4">
          <ClientOnly>
            <!-- Theme toggle button -->
            <button class="p-2 rounded-md text-secondary-600 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
                    @click="toggleDarkMode">
              <span v-if="isDarkMode">🌞</span>
              <span v-else>🌙</span>
            </button>

            <!-- Fallback for when ClientOnly is not yet mounted -->
            <template #fallback>
              <div class="w-10 h-10"></div>
            </template>
          </ClientOnly>
          
          <!-- Mobile menu button -->
          <button class="md:hidden p-2 rounded-md text-secondary-600 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
                  @click="isMobileMenuOpen = !isMobileMenuOpen">
            <span v-if="!isMobileMenuOpen">☰</span>
            <span v-else>✕</span>
          </button>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden mt-4 py-2 space-y-2">
        <a v-for="link in navLinks" :key="link.href" 
           :href="link.href" 
           class="block py-2 text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
           @click="isMobileMenuOpen = false">
          {{ link.text }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const navLinks = [
  { text: 'Home', href: '#hero' },
  { text: 'Quick Guide', href: '#quick-guide' },
  { text: 'Webcam Tool', href: '#webcam-tool' },
  { text: 'Extended Guide', href: '#extended-guide' }
];

const isMobileMenuOpen = ref(false);
const isDarkMode = ref(false);

// Initialize dark mode state on mount
onMounted(() => {
  if (!process.client) return;
  
  isDarkMode.value = document.documentElement.classList.contains('dark');
});

const toggleDarkMode = () => {
  if (!process.client) return;
  
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
  }
};
</script>