<template>
  <div>
    <free-resources-videos-header />
    <div class="py-12 lg:py-15 w-[90%] lg:w-[85%] xl:w-[1100px] 2xl:w-[1200px] mx-auto">
      <free-resources-videos-content />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Fire protection system requirements videos | Flameguard',
  description: 'Learn about fire protection philippines requirements through videos.',
  keywords: 'flameguard fire protection inc, fire protection, fire, flameguard, flameguard ph, flameguard ph videos page, flameguard videos page, fire protection philippines, flameguard philippines, fire protection ph',
  copyright: '© 2024 Flameguard Fire Protection Inc',
  ogTitle: 'Fire protection system requirements videos | Flameguard',
  ogDescription: 'Learn about fire protection philippines requirements through videos.',
  ogImage: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1698118567/Flameguard%20Images/Header/videos_go1p3f.webp',
  ogUrl: 'https://flameguardph.com/videos',
})


useHead({ 
  script: [
      {
          src: 'https://static.elfsight.com/platform/platform.js'
      },
      {
          src: 'https://www.youtube.com/iframe_api'
      },
  ],
});
</script>
