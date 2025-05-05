<template>
  <section :id="id" class="py-20 bg-white dark:bg-secondary-900">
    <div class="container-section">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Quick Color Corrector Guide
        </h2>
        
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-semibold mb-4">What is a Color Corrector?</h3>
            <p class="text-lg text-secondary-700 dark:text-secondary-300 mb-6">
              Color correctors are makeup products designed to neutralize discoloration on your skin before applying foundation. 
              Based on color theory, they work by canceling out unwanted tones to create an even base for the rest of your makeup.
            </p>
          </div>
          
          <div>
            <h3 class="text-2xl font-semibold mb-4">Choosing the Right Color</h3>
            <p class="text-lg text-secondary-700 dark:text-secondary-300 mb-4">
              Color correction relies on the color wheel principle, where opposite colors neutralize each other:
            </p>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <!-- Green color corrector -->
              <!-- Image source: https://www.pexels.com/photo/close-up-of-woman-with-green-contact-lenses-9769859/ -->
              <div class="color-card bg-green-50 dark:bg-green-900/30 flex gap-4">
                <div class="w-1/3">
                  <img 
                    src="https://images.pexels.com/photos/9769859/pexels-photo-9769859.jpeg" 
                    alt="Green color corrector"
                    class="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div class="w-2/3">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 rounded-full bg-green-500 mr-3"></div>
                    <h4 class="text-xl font-semibold">Green</h4>
                  </div>
                  <p class="text-secondary-700 dark:text-secondary-300">
                    Neutralizes redness from acne, rosacea, or general irritation. Perfect for covering broken capillaries and red blemishes.
                  </p>
                </div>
              </div>
              
              <!-- Orange/Peach color corrector -->
              <!-- Image source: https://www.pexels.com/photo/orange-cream-in-clear-container-4465831/ -->
              <div class="color-card bg-orange-50 dark:bg-orange-900/30 flex gap-4">
                <div class="w-1/3">
                  <img 
                    src="https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg" 
                    alt="Orange color corrector"
                    class="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div class="w-2/3">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 rounded-full bg-orange-400 mr-3"></div>
                    <h4 class="text-xl font-semibold">Orange/Peach</h4>
                  </div>
                  <p class="text-secondary-700 dark:text-secondary-300">
                    Covers dark circles and hyperpigmentation, especially effective for medium to deep skin tones to cancel out blue or purple undertones.
                  </p>
                </div>
              </div>
              
              <!-- Purple/Lavender color corrector -->
              <!-- Image source: https://www.pexels.com/photo/close-up-shot-of-spilled-cosmetic-products-7256114/ -->
              <div class="color-card bg-purple-50 dark:bg-purple-900/30 flex gap-4">
                <div class="w-1/3">
                  <img 
                    src="https://images.pexels.com/photos/7256114/pexels-photo-7256114.jpeg" 
                    alt="Purple color corrector"
                    class="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div class="w-2/3">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 rounded-full bg-purple-400 mr-3"></div>
                    <h4 class="text-xl font-semibold">Purple/Lavender</h4>
                  </div>
                  <p class="text-secondary-700 dark:text-secondary-300">
                    Brightens dull or yellow-toned skin, adding luminosity to sallow complexions. Great for neutralizing yellow discoloration.
                  </p>
                </div>
              </div>
              
              <!-- Yellow color corrector -->
              <!-- Image source: https://www.pexels.com/photo/a-woman-with-yellow-eyeshadow-makeup-7955872/ -->
              <div class="color-card bg-yellow-50 dark:bg-yellow-900/30 flex gap-4">
                <div class="w-1/3">
                  <img 
                    src="https://images.pexels.com/photos/7955872/pexels-photo-7955872.jpeg" 
                    alt="Yellow color corrector"
                    class="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div class="w-2/3">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 rounded-full bg-yellow-400 mr-3"></div>
                    <h4 class="text-xl font-semibold">Yellow</h4>
                  </div>
                  <p class="text-secondary-700 dark:text-secondary-300">
                    Covers purple pigmentation like bruises or veins. Also great for brightening under-eye areas on fair to light skin tones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: { type: String, default: 'quick-guide' }
});
</script>