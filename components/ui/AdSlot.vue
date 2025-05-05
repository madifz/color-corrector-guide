<template>
  <div :id="id" class="bg-secondary-100 dark:bg-secondary-800 rounded-lg p-6 text-center">
    <div class="border-2 border-dashed border-secondary-300 dark:border-secondary-600 p-8 rounded">
      <h4 class="text-secondary-500 dark:text-secondary-400 text-lg font-medium mb-2">Advertisement Placeholder</h4>
      <p class="text-secondary-400 dark:text-secondary-500 text-sm">
        This space is reserved for future ad content.
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: { type: String, required: true }
});
</script>