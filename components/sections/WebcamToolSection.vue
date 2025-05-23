<template>
  <section :id="id" class="py-20 bg-gradient-to-b from-secondary-50 to-white dark:from-secondary-800 dark:to-secondary-900">
    <div class="container-section">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-6">
          Color Corrector Quiz
        </h2>
        <p class="text-xl text-center text-secondary-600 dark:text-secondary-300 mb-12 max-w-3xl mx-auto">
          Answer a few questions to find your perfect color corrector match.
        </p>
        
        <ColorQuiz />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: { type: String, default: 'color-quiz' }
});
</script>