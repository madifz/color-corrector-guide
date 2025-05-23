<template>
  <div class="max-w-2xl mx-auto px-4">
    <!-- Quiz Section -->
    <div v-if="!quizComplete" class="space-y-8">
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold mb-2">Find Your Perfect Color Corrector</h2>
        <p class="text-secondary-600 dark:text-secondary-300">
          Question {{ currentQuestionIndex + 1 }} of {{ questions.length }}
        </p>
      </div>

      <div class="bg-white dark:bg-secondary-800 rounded-lg p-6 shadow-lg">
        <h3 class="text-xl font-semibold mb-4">
          {{ currentQuestion.question }}
        </h3>
        
        <div class="grid gap-3">
          <button
            v-for="option in currentQuestion.options"
            :key="option.id"
            @click="selectAnswer(option)"
            class="p-4 text-left rounded-lg border-2 transition-all duration-200 hover:border-primary-500 dark:hover:border-primary-400"
            :class="[
              selectedAnswer?.id === option.id
                ? 'border-primary-500 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/30'
                : 'border-secondary-200 dark:border-secondary-700'
            ]"
          >
            {{ option.text }}
          </button>
        </div>
      </div>

      <div class="flex justify-between items-center">
        <button
          v-if="currentQuestionIndex > 0"
          @click="previousQuestion"
          class="btn bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700"
        >
          Previous
        </button>
        <button
          v-if="currentQuestionIndex < questions.length - 1"
          @click="nextQuestion"
          :disabled="!selectedAnswer"
          class="btn btn-primary ml-auto"
          :class="{ 'opacity-50 cursor-not-allowed': !selectedAnswer }"
        >
          Next
        </button>
        <button
          v-else
          @click="completeQuiz"
          :disabled="!selectedAnswer"
          class="btn btn-primary ml-auto"
          :class="{ 'opacity-50 cursor-not-allowed': !selectedAnswer }"
        >
          See Results
        </button>
      </div>
    </div>

    <!-- Results Section -->
    <div v-else class="space-y-8">
      <div class="text-center">
        <h2 class="text-2xl font-bold mb-2">Your Perfect Match</h2>
        <p class="text-secondary-600 dark:text-secondary-300">
          Based on your answers, we recommend:
        </p>
      </div>

      <div class="bg-white dark:bg-secondary-800 rounded-lg p-6 shadow-lg">
        <h3 class="text-xl font-semibold mb-4">
          {{ recommendation.title }}
        </h3>
        <p class="text-secondary-600 dark:text-secondary-300 mb-6">
          {{ recommendation.description }}
        </p>

        <!-- Before/After Images -->
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <img
              :src="recommendation.beforeImage"
              alt="Before applying color corrector"
              class="w-full h-48 object-cover rounded-lg"
            />
            <p class="text-center mt-2 text-sm text-secondary-500">Before</p>
          </div>
          <div>
            <img
              :src="recommendation.afterImage"
              alt="After applying color corrector"
              class="w-full h-48 object-cover rounded-lg"
            />
            <p class="text-center mt-2 text-sm text-secondary-500">After</p>
          </div>
        </div>

        <!-- Product Recommendations -->
        <div class="space-y-4">
          <h4 class="font-semibold">Recommended Products:</h4>
          <div class="grid gap-4">
            <a
              v-for="product in recommendation.products"
              :key="product.name"
              :href="product.link"
              target="_blank"
              rel="noopener noreferrer"
              class="flex justify-between items-center p-4 rounded-lg border border-secondary-200 dark:border-secondary-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
            >
              <span>{{ product.name }}</span>
              <span class="text-primary-600 dark:text-primary-400">{{ product.price }}</span>
            </a>
          </div>
        </div>

        <!-- Share Results -->
        <div class="mt-8 pt-6 border-t border-secondary-200 dark:border-secondary-700">
          <button
            @click="shareResults"
            class="btn btn-primary w-full mb-4"
          >
            Share Results
          </button>
          <button
            @click="restartQuiz"
            class="btn w-full bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { quizQuestions, productRecommendations } from './QuizData';

const questions = quizQuestions;
const currentQuestionIndex = ref(0);
const answers = ref([]);
const selectedAnswer = ref(null);
const quizComplete = ref(false);

const currentQuestion = computed(() => questions[currentQuestionIndex.value]);

const recommendation = computed(() => {
  if (!quizComplete.value) return null;
  const mainConcern = answers.value[0];
  return productRecommendations[mainConcern.corrector];
});

function selectAnswer(option) {
  selectedAnswer.value = option;
}

function nextQuestion() {
  if (!selectedAnswer.value) return;
  
  answers.value[currentQuestionIndex.value] = selectedAnswer.value;
  currentQuestionIndex.value++;
  selectedAnswer.value = answers.value[currentQuestionIndex.value] || null;
}

function previousQuestion() {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
    selectedAnswer.value = answers.value[currentQuestionIndex.value];
  }
}

function completeQuiz() {
  if (!selectedAnswer.value) return;
  
  answers.value[currentQuestionIndex.value] = selectedAnswer.value;
  quizComplete.value = true;
}

function restartQuiz() {
  currentQuestionIndex.value = 0;
  answers.value = [];
  selectedAnswer.value = null;
  quizComplete.value = false;
}

function shareResults() {
  const shareText = `I found my perfect color corrector match at colorcorrectorguide.com! It's a ${recommendation.value.title.toLowerCase()} - exactly what I needed! 💄✨`;
  
  if (navigator.share) {
    navigator.share({
      title: 'My Color Corrector Match',
      text: shareText,
      url: window.location.href
    }).catch(console.error);
  } else {
    // Fallback to clipboard
    navigator.clipboard.writeText(shareText)
      .then(() => alert('Share text copied to clipboard!'))
      .catch(console.error);
  }
}
</script>