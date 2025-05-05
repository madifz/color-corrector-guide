<template>
  <section :id="id" class="py-20 bg-white dark:bg-secondary-900">
    <div class="container-section">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Extended Makeup Tips & Techniques
        </h2>
        
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-semibold mb-4">How to Apply Color Correctors</h3>
            
            <p class="text-lg text-secondary-700 dark:text-secondary-300 mb-6">
              Proper application of color correctors is key to achieving a flawless base. Follow these professional techniques to get the best results:
            </p>
            
            <ol class="mb-8 space-y-4 list-decimal pl-5 text-secondary-700 dark:text-secondary-300">
              <li>
                <strong>Prep your skin:</strong> Always start with clean, moisturized skin. Apply a primer to create a smooth base and help your makeup last longer.
              </li>
              <li>
                <strong>Use sparingly:</strong> Color correctors are highly pigmented, so a little goes a long way. Start with a small amount and build up as needed.
              </li>
              <li>
                <strong>Target specific areas:</strong> Apply color correctors only to the areas that need correction. For example, use green corrector just on red blemishes, not all over the face.
              </li>
              <li>
                <strong>Blend thoroughly:</strong> Use a damp makeup sponge, a small brush, or your fingertips to blend the edges of the corrector to avoid harsh lines.
              </li>
              <li>
                <strong>Set with powder:</strong> Lightly dust a translucent setting powder over color-corrected areas before applying foundation to prevent the colors from mixing.
              </li>
            </ol>
          </div>
          
          <div>
            <h3 class="text-2xl font-semibold mb-4">Layering Tips & Blending Techniques</h3>
            
            <p class="text-lg text-secondary-700 dark:text-secondary-300 mb-6">
              The key to natural-looking makeup is proper layering and blending. Here's how to incorporate color correctors into your routine:
            </p>
            
            <ul class="mb-8 space-y-4 list-disc pl-5 text-secondary-700 dark:text-secondary-300">
              <li>
                <strong>Layer order:</strong> Skincare → Primer → Color Corrector → Concealer → Foundation → Powder
              </li>
              <li>
                <strong>Tap, don't swipe:</strong> Use a tapping motion to apply color correctors rather than swiping, which can remove product and create uneven application.
              </li>
              <li>
                <strong>Mixing techniques:</strong> For subtle correction, mix a small amount of color corrector with your concealer or foundation.
              </li>
              <li>
                <strong>Wait between layers:</strong> Allow each product to set for 30 seconds before applying the next layer for better adherence and less product movement.
              </li>
            </ul>
          </div>
          
          <!-- Product suggestions section - Uncomment when affiliate links are ready
          <div class="mt-12">
            <h3 class="text-2xl font-semibold mb-6">Recommended Products</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProductCard 
                title="Green Color Corrector" 
                description="Perfect for neutralizing redness from acne and rosacea"
                imageUrl="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg"
                price="$24.99"
              />
              
              <ProductCard 
                title="Peach Corrector Palette" 
                description="Ideal for dark circles and hyperpigmentation"
                imageUrl="https://images.pexels.com/photos/2639947/pexels-photo-2639947.jpeg"
                price="$32.50"
              />
              
              <ProductCard 
                title="Purple Tone Corrector" 
                description="Brightens dull or yellow-toned skin instantly"
                imageUrl="https://images.pexels.com/photos/2658261/pexels-photo-2658261.jpeg"
                price="$18.99"
              />
              
              <ProductCard 
                title="Yellow Neutralizer" 
                description="Covers blue and purple discoloration"
                imageUrl="https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg"
                price="$21.75"
              />
            </div>
          </div>
          -->
          
          <!-- Ad slot for future monetization - Uncomment when ads are ready
          <div class="mt-12">
            <AdSlot id="main-content-ad" class="my-8" />
          </div>
          -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: { type: String, default: 'extended-guide' }
});
</script>