<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
        
        <!-- Modal panel -->
        <div class="flex min-h-screen items-center justify-center p-4">
          <div class="relative w-full max-w-2xl transform rounded-lg bg-white dark:bg-secondary-800 p-6 text-left shadow-xl transition-all">
            <!-- Header -->
            <div class="mb-4 flex items-center justify-between">
              <h3 class="text-2xl font-semibold text-secondary-900 dark:text-white">
                {{ title }}
              </h3>
              <button 
                @click="$emit('close')"
                class="text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-200"
              >
                ✕
              </button>
            </div>
            
            <!-- Content -->
            <div class="prose prose-sm max-w-none text-secondary-700 dark:text-secondary-300">
              <slot></slot>
            </div>
            
            <!-- Footer -->
            <div class="mt-6 flex justify-end">
              <button 
                @click="$emit('close')"
                class="btn btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  show: { type: Boolean, required: true },
  title: { type: String, required: true }
});

defineEmits(['close']);
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>