<template>
  <div>
    <h3 class="text-xl font-semibold mb-4 text-secondary-800 dark:text-secondary-200">
      Select a Color Corrector
    </h3>
    
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      <button 
        v-for="filter in filters" 
        :key="filter.id"
        @click="selectFilter(filter.id)"
        :class="[
          'p-4 rounded-lg shadow transition-all duration-200 flex flex-col items-center', 
          selectedFilter === filter.id 
            ? 'ring-2 ring-primary-500 dark:ring-primary-400 bg-primary-50 dark:bg-primary-900/30' 
            : 'bg-white dark:bg-secondary-700 hover:bg-secondary-50 dark:hover:bg-secondary-600'
        ]"
      >
        <div 
          class="w-12 h-12 rounded-full mb-2" 
          :style="{backgroundColor: filter.color}"
        ></div>
        <span class="text-secondary-800 dark:text-secondary-200">{{ filter.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  selectedFilter: { type: String, default: 'none' }
});

const emit = defineEmits(['select-filter']);

const filters = [
  { id: 'none', name: 'None', color: '#f1f5f9' },
  { id: 'green', name: 'Green', color: '#10b981' },
  { id: 'orange', name: 'Orange', color: '#f97316' },
  { id: 'purple', name: 'Purple', color: '#a855f7' },
  { id: 'yellow', name: 'Yellow', color: '#facc15' }
];

function selectFilter(filterId) {
  emit('select-filter', filterId);
}
</script>