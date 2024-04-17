<style scoped>
img {
  margin: auto;  
}
</style>

<template>
  <div class="mb-16 mt-14 lg:mb-24 lg:mt-24">
    <h1 class="text-center mb-10 font-medium barlow-condensed text-[28px] xxsm:text-[32px] md:text-[35px] 2xl:text-[40px] leading-[45px] xl:leading-[55px]" v-if="!isInFireAlarm">
      We will also teach you how to conduct basic periodic inspections and pump tests
      <span class="text-red-color">with no extra cost, absolutely free!</span>
    </h1>

    <div class="gap-6 grid grid-cols-1 md:grid-cols-2">

      <UnLazyImage
        alt="Basic periodic inspections and pump tests 1"
        class="rounded-lg"
        placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702778397/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-4_vayeka.webp"
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702619195/Flameguard%20Images/Fire%20Sprinkler%20and%20Fire%20Suppression/we-will-also-1_affq6s_erz6ko.webp"
      />

      <UnLazyImage
        alt="Basic periodic inspections and pump tests 2"
        class="rounded-lg"
        placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702778541/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-5_fgvcrs.webp"
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702619196/Flameguard%20Images/Fire%20Sprinkler%20and%20Fire%20Suppression/we-will-also-2_voq8db_yun5ph.webp"
      />

      <UnLazyImage
        alt="Basic periodic inspections and pump tests 3"
        class="rounded-lg"
        placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702778716/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-6_jkxkpq.webp"
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702619198/Flameguard%20Images/Fire%20Sprinkler%20and%20Fire%20Suppression/we-will-also-3_dao6vr_lyjwsf.webp"
      />

      <UnLazyImage
        alt="Basic periodic inspections and pump tests 4"
        class="rounded-lg"
        placeholder-src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702778716/Flameguard%20Images/Placeholder%20For%20Image%20Loader/placeholder-6_jkxkpq.webp"
        src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1702619049/Flameguard%20Images/Fire%20Sprinkler%20and%20Fire%20Suppression/we-will-also-4_brtex8.webp"
      />

    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isInFireAlarm: {
    type: Boolean,
    default: false
  }
})
</script>