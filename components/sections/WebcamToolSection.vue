<template>
  <section :id="id" class="py-20 bg-secondary-50 dark:bg-secondary-800">
    <div class="container-section">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-6">
          Webcam Color Corrector Tool
        </h2>
        <p class="text-xl text-center text-secondary-600 dark:text-secondary-300 mb-12 max-w-3xl mx-auto">
          Try out different color correctors virtually to see how they can enhance your complexion.
        </p>
        
        <ClientOnly>
          <!-- Webcam interface -->
          <div v-if="mounted">
            <!-- Initial state -->
            <div v-if="!isWebcamStarted" class="flex flex-col items-center space-y-2">
              <button 
                @click="startWebcam" 
                class="btn btn-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-center flex flex-col items-center"
              >
                <span class="text-lg">Try out some Color Correctors now!</span>
                <span class="text-sm mt-2">(click here to start camera)</span>
              </button>
            </div>

            <!-- Webcam active state -->
            <template v-else>
              <!-- Stop camera button -->
              <div class="flex justify-center mb-4">
                <button 
                  @click="stopWebcam" 
                  class="btn bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Click here to stop camera
                </button>
              </div>
              
              <WebcamView 
                :selectedFilter="selectedFilter" 
                @stop-webcam="stopWebcam"
              />
              
              <div class="mt-8">
                <ColorFilterControls 
                  :selectedFilter="selectedFilter" 
                  @select-filter="selectedFilter = $event" 
                />
              </div>
              
              <div v-if="webcamError" class="mt-8 p-6 bg-red-50 dark:bg-red-900/30 rounded-lg">
                <h3 class="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">
                  Webcam Access Error
                </h3>
                <p class="text-secondary-700 dark:text-secondary-300">
                  {{ webcamError }}
                </p>
                <p class="mt-4 text-secondary-600 dark:text-secondary-400">
                  Try using a browser that supports webcam access, such as Chrome, Firefox, or Edge.
                </p>
              </div>
              
              <div class="mt-8 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                <h3 class="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  How to use this tool
                </h3>
                <p class="text-secondary-700 dark:text-secondary-300">
                  Select a color corrector filter from the options above to see how it affects your appearance. The left side shows your original webcam feed, while the right side shows the simulated corrector effect. For best results, please use in natural light or bright lighting.
                </p>
              </div>
            </template>
          </div>

          <!-- Loading state -->
          <template #fallback>
            <div class="flex justify-center">
              <div class="animate-pulse bg-secondary-200 dark:bg-secondary-700 rounded-lg p-8">
                <div class="h-6 w-48 bg-secondary-300 dark:bg-secondary-600 rounded"></div>
              </div>
            </div>
          </template>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

defineProps({
  id: { type: String, default: 'webcam-tool' }
});

const mounted = ref(false);
const isWebcamStarted = ref(false);
const webcamError = ref(null);
const selectedFilter = ref('none');

onMounted(() => {
  if (!process.client) return;
  mounted.value = true;
});

function startWebcam() {
  if (!process.client) return;
  
  isWebcamStarted.value = true;
  
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    webcamError.value = "Your browser doesn't support webcam access.";
    return;
  }
}

function stopWebcam() {
  isWebcamStarted.value = false;
  selectedFilter.value = 'none';
}
</script>