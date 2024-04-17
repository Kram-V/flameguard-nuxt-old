<template>
  <div>
    <home-header />
    <home-systems />
    <home-why-choose-us />
    <home-our-learning-curve />
    <home-video />
    <home-featured-testimonials />
    <home-featured-projects />
    <home-recognitions-memberships /> 
  </div>
</template>  

<script setup>
useSeoMeta({
  title: 'Fire Protection Company in the Philippines | Flameguard',
  description: 'The leading fire protection contractor in the Philippines recognized by NFPA.',
  keywords: 'flameguard fire protection inc, fire protection, fir e, flameguard, flameguard ph, flameguard ph home page, flameguard home page, fire protection philippines, flameguard philippines, fire protection ph',
  copyright: '© 2024 Flameguard Fire Protection Inc',
  ogTitle: 'Fire Protection Company in the Philippines | Flameguard',
  ogDescription: 'The leading fire protection contractor in the Philippines recognized by NFPA.',
  ogImage: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1702719868/Flameguard%20Images/Header/science-based-fire-safet-small_t9fj01.webp',
  ogUrl: 'https://flameguardph.com/',
  ogType: 'website'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://flameguardph.com/'
    },
  ],
})
</script>