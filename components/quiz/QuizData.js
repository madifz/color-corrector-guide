export const quizQuestions = [
  {
    id: 'concern',
    question: 'What is your main skin concern?',
    options: [
      { id: 'redness', text: 'Redness', corrector: 'green' },
      { id: 'darkCircles', text: 'Dark Circles', corrector: 'orange' },
      { id: 'dullness', text: 'Dullness', corrector: 'purple' },
      { id: 'hyperpigmentation', text: 'Hyperpigmentation', corrector: 'yellow' }
    ]
  },
  {
    id: 'undertone',
    question: 'What is your skin undertone?',
    options: [
      { id: 'warm', text: 'Warm' },
      { id: 'cool', text: 'Cool' },
      { id: 'neutral', text: 'Neutral' },
      { id: 'unsure', text: 'Not Sure' }
    ]
  },
  {
    id: 'location',
    question: 'Where on your face is the concern most visible?',
    options: [
      { id: 'underEyes', text: 'Under eyes' },
      { id: 'cheeks', text: 'Cheeks' },
      { id: 'allOver', text: 'All over' },
      { id: 'tZone', text: 'T-zone' }
    ]
  }
];

export const productRecommendations = {
  green: {
    title: 'Green Color Corrector',
    description: 'Perfect for neutralizing redness from acne and rosacea',
    beforeImage: 'https://images.pexels.com/photos/3762892/pexels-photo-3762892.jpeg',
    afterImage: 'https://images.pexels.com/photos/3762890/pexels-photo-3762890.jpeg',
    products: [
      {
        name: 'Color Correct Pro - Green',
        price: '$24.99',
        link: 'https://example.com/green-corrector'
      },
      {
        name: 'Natural Balance Green Concealer',
        price: '$19.99',
        link: 'https://example.com/natural-green'
      }
    ]
  },
  orange: {
    title: 'Orange/Peach Color Corrector',
    description: 'Ideal for dark circles and under-eye darkness',
    beforeImage: 'https://images.pexels.com/photos/3762893/pexels-photo-3762893.jpeg',
    afterImage: 'https://images.pexels.com/photos/3762894/pexels-photo-3762894.jpeg',
    products: [
      {
        name: 'Bright Eyes Peach Corrector',
        price: '$22.99',
        link: 'https://example.com/peach-corrector'
      },
      {
        name: 'Orange Neutralizer Plus',
        price: '$18.99',
        link: 'https://example.com/orange-plus'
      }
    ]
  },
  purple: {
    title: 'Purple/Lavender Color Corrector',
    description: 'Brightens dull or yellow-toned skin',
    beforeImage: 'https://images.pexels.com/photos/3762895/pexels-photo-3762895.jpeg',
    afterImage: 'https://images.pexels.com/photos/3762896/pexels-photo-3762896.jpeg',
    products: [
      {
        name: 'Lavender Glow Corrector',
        price: '$21.99',
        link: 'https://example.com/lavender-glow'
      },
      {
        name: 'Purple Radiance Stick',
        price: '$17.99',
        link: 'https://example.com/purple-stick'
      }
    ]
  },
  yellow: {
    title: 'Yellow Color Corrector',
    description: 'Covers purple-toned dark spots and bruising',
    beforeImage: 'https://images.pexels.com/photos/3762897/pexels-photo-3762897.jpeg',
    afterImage: 'https://images.pexels.com/photos/3762898/pexels-photo-3762898.jpeg',
    products: [
      {
        name: 'Yellow Neutralizer Cream',
        price: '$20.99',
        link: 'https://example.com/yellow-cream'
      },
      {
        name: 'Sunshine Corrector Palette',
        price: '$25.99',
        link: 'https://example.com/yellow-palette'
      }
    ]
  }
};