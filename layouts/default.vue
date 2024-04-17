<template>
  <div>
    <Header />
      <slot />
    <Footer />
  </div>
</template>

<!-- <script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://static.elfsight.com/platform/platform.js",
          defer: true,
          'data-use-service-core': true,
        },
        {
          src: "https://www.youtube.com/iframe_api",
          defer: true,
        },
      ],
    };
  },
};
</script> -->

<script setup>
// useHead({
//   titleTemplate: "Flameguard Ph - %s",
// })
</script>
