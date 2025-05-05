<template>
  <div class="bg-white dark:bg-secondary-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div class="aspect-[4/3] overflow-hidden">
      <img 
        :src="imageUrl" 
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
    
    <div class="p-4">
      <h4 class="text-lg font-semibold text-secondary-900 dark:text-white mb-2">{{ title }}</h4>
      <p class="text-secondary-600 dark:text-secondary-300 text-sm mb-3">{{ description }}</p>
      
      <div class="flex justify-between items-center">
        <span class="text-primary-600 dark:text-primary-400 font-medium">{{ price }}</span>
        <button class="btn btn-primary text-sm px-3 py-1">
          View Details
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: String, required: true }
});
</script>