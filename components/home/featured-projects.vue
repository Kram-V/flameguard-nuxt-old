<template>
  <div class="bg-gray-100">
    <div class="pt-12 lg:pb-4 w-[90%] lg:w-[85%] xl:w-[1100px] 2xl:w-[1200px] mx-auto">
      <div class="mb-2 lg:mb-6 text-center">
        <h2 class="text-[28px] xxsm:text-[35px] lg:text-[40px] font-semibold relative">
          <span class="relative tracking-wide barlow-condensed uppercase pb-2 block">
            Featured Projects
            <span
              class="absolute bottom-0 top-[50px] sm:top-[55px] xl:top-[60px] left-1/2 transform -translate-x-1/2 w-[50px] sm:w-20 border-b-4 border-red-500"
            ></span>
          </span>
        </h2>
      </div>

      <div> 
        <vueper-slides
          class="no-shadow text-xs"
          :visible-slides="visibleSlides"
          :gap="1"
          :slide-ratio="slideRatio"
          :dragging-distance="200"
          :bullets="false"
          :touchable="false"
          :duration="2000"
          :arrows="false"
          :pauseOnHover="false"
          :pauseOnTouch="false"
          autoplay
          infinite
        >
          <vueper-slide
            class="contents"
            v-for="(slide, i) in contents"
            :key="i"
            :image="slide.image"
          />
        </vueper-slides>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const visibleSlides = ref(4);
const slideRatio = ref(1 / 4);

const contents = ref([


  {
    image: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1697967325/Flameguard%20Images/Featured%20Projects/Toyota_bvkn1o.webp',
  },
  {
    image: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1702615738/Flameguard%20Images/Featured%20Projects/LF-Logo_gxew8u_tpsxxy.webp',
  },
  {
    image: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1702615738/Flameguard%20Images/Featured%20Projects/PL-Aguila-Manufacturing-Inc_ylcrvq_mzb7uy.webp',
  },
  {
    image: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1697964599/Flameguard%20Images/Featured%20Projects/gruppo-ems-inc_vdfkfr.webp',
  },
  {
    image: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1702615737/Flameguard%20Images/Featured%20Projects/ceva-logistics-inc_ne3fcx_yzsobt.webp',
  },
  {
    image: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1702615738/Flameguard%20Images/Featured%20Projects/dominos-pizza_ghpkmh_opxxkx.webp',
  },
  {
    image: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1702615737/Flameguard%20Images/Featured%20Projects/Toshiba-Logo_wjymzh_edqmmr.webp',
  },
  {
    image: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1702615738/Flameguard%20Images/Featured%20Projects/Prime-Sales_dxy6k8_wym49e.webp',
  },
  {
    image: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1702615738/Flameguard%20Images/Featured%20Projects/victoria-towers_yhhmn5_o30xho.webp',
  },  
  {
    image: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1702615738/Flameguard%20Images/Featured%20Projects/Seda-Nuvali_bzcwfq_k4yr9b.webp',
  },
  {
    image: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1702615738/Flameguard%20Images/Featured%20Projects/tagaytay-clifton-resort-suites_tzfav5_hddzcz.webp',
  },

  {
    image: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1702615738/Flameguard%20Images/Featured%20Projects/one-wilson-square_bfnrnz_xfuvm0.webp',
  },
  {
    image: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1702615738/Flameguard%20Images/Featured%20Projects/the-columns-ayala_bwhave_j5qthk.webp',
  },
  {
    image: 'https://res.cloudinary.com/ds5ovkisn/image/upload/v1704503241/Flameguard%20Images/Featured%20Projects/Wgroup_ua00go.webp',
  },
  

]);

  const updateVisibleSlides = () => {
    if (window.innerWidth >= 1024) {
      visibleSlides.value = 4;
      slideRatio.value = 1 / 4;
    } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
      visibleSlides.value = 3;
      slideRatio.value = 1 / 3;
    } else if (window.innerWidth < 768 && window.innerWidth >= 421) {
      visibleSlides.value = 2;
      slideRatio.value = 1 / 2;
    } else if (window.innerWidth < 420) {
      visibleSlides.value = 1;
      slideRatio.value = 1 / 1;
    }
  };

  // const updateSlideRatio = () => {
  //   if (window.innerWidth < 900 && window.innerWidth >= 500) {
  //     slideHeight.value = "520px";
  //   }
  // };

  watch(route, () => {
    updateVisibleSlides();
    // updateSlideRatio();
  }),

  onMounted(() => {
    updateVisibleSlides();
    // updateSlideRatio();

    window.addEventListener("resize", updateVisibleSlides);
    // window.addEventListener("resize", updateSlideRatio);
  }),

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateVisibleSlides);
    // window.removeEventListener("resize", updateSlideRatio);
  }) 
</script>

<style scoped>
.contents {
  /* opacity: .5; */
  box-sizing: border-box;
  border: 0px solid #333;
  color: #333;
  height: 100%;
  widows: 100%;

  /* background-position: center center; */
  /* cursor: pointer; */
}

.bg-white {
  --tw-bg-opacity: 0;
}

.custom-carousel {
  height: 100px; /* Set the desired height here */
}
</style>