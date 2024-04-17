<template>
  <div>
    <NuxtLayout>
      <NuxtPage /> 
    </NuxtLayout>
  </div>
</template>


<script setup>
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1694848824/Flameguard%20Images/Icons%20and%20Logos/flameguard-icon_de9cza.webp'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      crossorigin: ''
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;0,6..12,900;0,6..12,1000;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700;1,6..12,800;1,6..12,900;1,6..12,1000&display=swap',
      crossorigin: ''
    },
  ],
})
</script>

<style>
body {
  font-family: 'Nunito Sans', sans-serif;
}

.nunito-sans {
  font-family: 'Nunito Sans', sans-serif;
}

.barlow-condensed {
  font-family: 'Barlow Condensed', sans-serif;
}

.vue_client_recaptcha {
  display: flex;
  align-items: center;
  gap: 10px;
}

.vueperslides__arrow {
  font-size: 6px !important;
}

.vueperslides__bullet .default {
  width: 8px !important;
  height: 8px !important;
}

.vueperslides__bullet--active .default {
  border-width: 4px !important;
}

.vueperslides__arrow svg {
  stroke-width: 3 !important;
}

.testimonials-carousel-container .vueperslides__arrows, .testimonials-carousel-container .vueperslides__bullets {
  color: black !important;
}

.video-js .vjs-big-play-button  {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

@keyframes right-to-original-spot {
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.vueperslide--visible .details-container {
  animation: right-to-original-spot 2s ease-in-out;
}
</style>
