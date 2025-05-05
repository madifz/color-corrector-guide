<template>
  <footer class="bg-secondary-100 dark:bg-secondary-800 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-center md:text-left mb-4 md:mb-0">
          <h3 class="text-xl font-bold text-primary-600 dark:text-primary-400">Color Corrector Guide</h3>
          <p class="text-secondary-600 dark:text-secondary-300 mt-2">
            Your quickie to fix that uneven color complexion
          </p>
        </div>
        
        <div class="flex space-x-4">
          <button 
            @click="showPrivacyPolicy = true"
            class="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Privacy Policy
          </button>
          <button 
            @click="showTermsOfService = true"
            class="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Terms of Service
          </button>
          <a 
            href="mailto:support@colorcorrectorguide.com" 
            class="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
      
      <div class="mt-8 text-center text-secondary-500 dark:text-secondary-400 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Color Corrector Guide. All rights reserved.</p>
      </div>
    </div>

    <!-- Privacy Policy Modal -->
    <Modal
      :show="showPrivacyPolicy"
      title="Privacy Policy"
      @close="showPrivacyPolicy = false"
    >
      <h4 class="text-xl font-semibold mb-4">Information Collection and Use</h4>
      <p class="mb-4">
        We collect information that your browser sends whenever you visit our website. This may include your browser type, browser version, the pages you visit, the time and date of your visit, and other statistics.
      </p>

      <h4 class="text-xl font-semibold mb-4">Webcam Usage</h4>
      <p class="mb-4">
        Our website includes a webcam feature that allows you to try different color correctors virtually. We want to assure you that:
        <ul class="list-disc pl-6 mb-4">
          <li>All webcam processing is done locally in your browser</li>
          <li>We do not store or transmit any video data</li>
          <li>No recordings are made or saved</li>
          <li>The feature only works while you're actively using it</li>
        </ul>
      </p>

      <h4 class="text-xl font-semibold mb-4">Cookies</h4>
      <p class="mb-4">
        We use cookies to remember your preferences (such as dark mode settings). You can choose to disable cookies through your browser settings, but this may affect the functionality of certain features.
      </p>

      <h4 class="text-xl font-semibold mb-4">Changes to This Policy</h4>
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>
    </Modal>

    <!-- Terms of Service Modal -->
    <Modal
      :show="showTermsOfService"
      title="Terms of Service"
      @close="showTermsOfService = false"
    >
      <h4 class="text-xl font-semibold mb-4">Acceptance of Terms</h4>
      <p class="mb-4">
        By accessing and using Color Corrector Guide, you accept and agree to be bound by the terms and conditions of this agreement.
      </p>

      <h4 class="text-xl font-semibold mb-4">Use License</h4>
      <p class="mb-4">
        Permission is granted to temporarily use this website for personal, non-commercial purposes only. This is the grant of a license, not a transfer of title.
      </p>

      <h4 class="text-xl font-semibold mb-4">Disclaimer</h4>
      <p class="mb-4">
        The materials on Color Corrector Guide are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
      </p>

      <h4 class="text-xl font-semibold mb-4">Limitations</h4>
      <p class="mb-4">
        In no event shall Color Corrector Guide or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website.
      </p>

      <h4 class="text-xl font-semibold mb-4">Virtual Try-On Feature</h4>
      <p>
        The virtual try-on feature is provided for reference purposes only. Results may vary when using actual color corrector products. We recommend testing products on a small area of your skin before full application.
      </p>
    </Modal>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const showPrivacyPolicy = ref(false);
const showTermsOfService = ref(false);
</script>