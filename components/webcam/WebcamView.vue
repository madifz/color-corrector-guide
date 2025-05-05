<template>
  <ClientOnly>
    <div v-if="mounted" class="relative">
      <!-- Side-by-side video comparison -->
      <div class="flex flex-col md:flex-row gap-4">
        <!-- Original video feed -->
        <div class="flex-1 relative">
          <div class="aspect-video bg-secondary-200 dark:bg-secondary-700 rounded-lg overflow-hidden">
            <video 
              ref="videoElement" 
              autoplay 
              playsinline 
              muted 
              class="w-full h-full object-cover"
            ></video>
          </div>
          <div class="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
            Original
          </div>
        </div>
        
        <!-- Filtered video feed -->
        <div class="flex-1 relative">
          <div class="aspect-video bg-secondary-200 dark:bg-secondary-700 rounded-lg overflow-hidden">
            <canvas 
              ref="canvasElement" 
              class="w-full h-full object-cover"
            ></canvas>
          </div>
          <div class="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
            With {{ getFilterLabel }} Corrector
          </div>
        </div>
      </div>
      
      <!-- Status message -->
      <div v-if="status" class="mt-4 p-4 bg-secondary-100 dark:bg-secondary-700 rounded-lg text-center">
        {{ status }}
      </div>
    </div>

    <!-- Fallback content -->
    <template #fallback>
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-1 aspect-video bg-secondary-200 dark:bg-secondary-700 rounded-lg animate-pulse"></div>
        <div class="flex-1 aspect-video bg-secondary-200 dark:bg-secondary-700 rounded-lg animate-pulse"></div>
      </div>
    </template>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';

const props = defineProps({
  selectedFilter: { type: String, default: 'none' }
});

const emit = defineEmits(['stop-webcam']);

const mounted = ref(false);
const videoElement = ref(null);
const canvasElement = ref(null);
const stream = ref(null);
const status = ref('');
const animationFrame = ref(null);

const getFilterLabel = computed(() => {
  const filters = {
    'none': 'No',
    'green': 'Green',
    'orange': 'Orange',
    'purple': 'Purple',
    'yellow': 'Yellow'
  };
  
  return filters[props.selectedFilter] || 'No';
});

onMounted(() => {
  if (!process.client) return;
  mounted.value = true;
  initializeWebcam();
});

async function initializeWebcam() {
  if (!process.client) return;
  
  try {
    status.value = 'Requesting webcam access...';
    
    stream.value = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user' }
    });
    
    if (videoElement.value) {
      videoElement.value.srcObject = stream.value;
      
      videoElement.value.onloadedmetadata = () => {
        status.value = '';
        
        if (canvasElement.value) {
          canvasElement.value.width = videoElement.value.videoWidth;
          canvasElement.value.height = videoElement.value.videoHeight;
          startCanvasDrawing();
        }
      };
    }
  } catch (error) {
    console.error('Error accessing webcam:', error);
    status.value = `Webcam access error: ${error.message}`;
    emit('stop-webcam');
  }
}

onUnmounted(() => {
  if (!process.client) return;
  
  stopWebcam();
});

function stopWebcam() {
  if (stream.value) {
    stream.value.getTracks().forEach(track => track.stop());
  }
  
  if (animationFrame.value) {
    cancelAnimationFrame(animationFrame.value);
  }
  
  stream.value = null;
}

function startCanvasDrawing() {
  if (!process.client) return;
  
  const video = videoElement.value;
  const canvas = canvasElement.value;
  
  if (!video || !canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  function drawCanvas() {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    if (props.selectedFilter !== 'none') {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      applyColorFilter(data, props.selectedFilter);
      ctx.putImageData(imageData, 0, 0);
    }
    
    animationFrame.value = requestAnimationFrame(drawCanvas);
  }
  
  drawCanvas();
}

watch(() => props.selectedFilter, () => {
  if (!process.client || !videoElement.value || videoElement.value.readyState < 2) return;
});

function applyColorFilter(data, filterType) {
  const length = data.length;
  let r, g, b;
  
  for (let i = 0; i < length; i += 4) {
    r = data[i];
    g = data[i + 1];
    b = data[i + 2];
    
    switch (filterType) {
      case 'green':
        data[i + 1] = Math.min(g + 20, 255);
        data[i] = Math.max(r - 15, 0);
        break;
        
      case 'orange':
        data[i] = Math.min(r + 25, 255);
        data[i + 1] = Math.min(g + 10, 255);
        data[i + 2] = Math.max(b - 20, 0);
        break;
        
      case 'purple':
        data[i] = Math.min(r + 10, 255);
        data[i + 2] = Math.min(b + 25, 255);
        break;
        
      case 'yellow':
        data[i] = Math.min(r + 25, 255);
        data[i + 1] = Math.min(g + 25, 255);
        data[i + 2] = Math.max(b - 20, 0);
        break;
    }
  }
}
</script>