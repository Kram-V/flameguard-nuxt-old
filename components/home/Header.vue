<template>
   <div class="mt-[150px] sm:mt-[90px] lg:mt-[155px] 2xl:mt-[150px]">
    <vueper-slides
      infinite
      :autoplay="true"
      :touchable="false"
      duration="7000"
      fixed-height="500px"  
      fade 
    >
      <vueper-slide v-for="(slide, i) in contents" :key="i" :image="slide.image">
        <template #content>
          <div class="px-[10%] 2xl:px-[20%] h-full horizontal-gradient flex items-center 3xl:justify-center">
            <div class="text-center lg:text-left 3xl:text-center lg:w-[600px] flex flex-col details-container">
              <h1
              v-if="slide.mainText === 'FREE FIRE PROTECTION MAINTENANCE BOOK'"
              class="text-white text-[30px] lg:text-[40px] 2xl:text-[43px] mb-[6px] sm:mb-[0px] lg:mb-[10px] font-semibold uppercase barlow-condensed leading-[45px] sm:leading-[55px]"
              >
                {{ slide.mainText }}
              </h1>

              <h2
              v-if="slide.mainText !== 'FREE FIRE PROTECTION MAINTENANCE BOOK'"
              class="text-white text-[30px] lg:text-[40px] 2xl:text-[43px] mb-[6px] sm:mb-[0px] lg:mb-[10px] font-semibold uppercase barlow-condensed leading-[45px] sm:leading-[55px]"
              >
                {{ slide.mainText }}
              </h2>

              <p class="text-white text-[18px] sm:text-[20px] 2xl:text-[22px] font-medium mb-[12px]">
                {{ slide.subText }}
              </p>

              <NuxtLink :to="slide.link">
                <Button btnRed isRounded
                  ><span>{{ slide.btnText }}</span></Button
                >
              </NuxtLink>
            </div>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
const womanCorporateImage = ref("")
const scienceBasedFireSafety = ref("")
const EmpoweringSafety = ref("")

export default {
  data() {
    return {
      contents: [
        {
          image: EmpoweringSafety,
          mainText: "FREE FIRE PROTECTION MAINTENANCE BOOK",
          subText:
            "Get our exclusive free eBook and learn how to write a Fire Safety Maintenance Report (FMSR) and perform ITM.",
          dataAos: "fade-in",
          btnText: "Click Here to Download",
          link: "/preventive-maintenance-ebook", 
        },

        {
          image: womanCorporateImage,
          mainText: "FIRE PROTECTION REQUIREMENTS BLOGS",
          subText:
            "Learn about fire protection requirements in the Philippines right at your fingertips.",
          dataAos: "fade-in",
          btnText: "Click Here to Learn More",
          link: "/blogs",
        },
        {
          image: scienceBasedFireSafety,
          mainText: "PHILIPPINES FIRE PROTECTION SPECIALIST",
          subText: "The only fire protection contractor in the Philippines certified by NFPA: CFPS and CWBSP.",
          dataAos: "fade-in",
          btnText: "Learn More About Us",
          link: "/about-us", 
        }, 
      ],
    };
  },

  watch: {
    $route(to, from) {
      this.updateSlideForFreeOnlineResources();
      this.updateSlideForEmpoweringSafety();
      this.updateSlideForScienceBasedFireSafety();
    },
  },

  methods: {
    updateSlideForFreeOnlineResources() { 
      if (window.innerWidth < 1024) {
        womanCorporateImage.value = "https://res.cloudinary.com/ds5ovkisn/image/upload/v1702520394/Flameguard%20Images/Header/woman-corporate-attire-small_sza5u5.webp"
      }  else {
        womanCorporateImage.value = "https://res.cloudinary.com/ds5ovkisn/image/upload/v1702520186/Flameguard%20Images/Header/woman-corporate-attire_i0ngrz.webp"
      }
    },

    updateSlideForEmpoweringSafety() {
      if (window.innerWidth >= 1400) {
        EmpoweringSafety.value = "https://res.cloudinary.com/ds5ovkisn/image/upload/v1703470972/Flameguard%20Images/Header/FG_WEB_BNR_desktop_bmbhzh_ldt1st.webp"
      } else if (window.innerWidth <= 1399 && window.innerWidth >= 1024) {
        EmpoweringSafety.value = "https://res.cloudinary.com/ds5ovkisn/image/upload/v1703470973/Flameguard%20Images/Header/FG-WEB-BNR-tablet_e59kr0_giardi.webp"
      } else {
        EmpoweringSafety.value = "https://res.cloudinary.com/ds5ovkisn/image/upload/v1703561033/Flameguard%20Images/Header/FG_WEB_BNR_mobile_wh4lpl.webp"
      }
    },

    updateSlideForScienceBasedFireSafety() {
      if (window.innerWidth >= 1400) {
        scienceBasedFireSafety.value = "https://res.cloudinary.com/ds5ovkisn/image/upload/v1702719332/Flameguard%20Images/Header/science-based-fire-safety-large_nefkxb.webp"
      } else if (window.innerWidth <= 1399 && window.innerWidth >= 1024) {
        scienceBasedFireSafety.value = "https://res.cloudinary.com/ds5ovkisn/image/upload/v1702719598/Flameguard%20Images/Header/science-based-fire-safety-medium_zmtl04.webp"
      } else {
        scienceBasedFireSafety.value = "https://res.cloudinary.com/ds5ovkisn/image/upload/v1702719868/Flameguard%20Images/Header/science-based-fire-safet-small_t9fj01.webp"
      }
    },
  },

  mounted() {
    this.updateSlideForFreeOnlineResources();
    this.updateSlideForEmpoweringSafety();
    this.updateSlideForScienceBasedFireSafety();

    window.addEventListener("resize", this.updateSlideForFreeOnlineResources);
    window.addEventListener("resize", this.updateSlideForEmpoweringSafety);
    window.addEventListener("resize", this.updateSlideForScienceBasedFireSafety);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.updateSlideForFreeOnlineResources);
    window.removeEventListener("resize", this.updateSlideForEmpoweringSafety);
    window.removeEventListener("resize", this.updateSlideForScienceBasedFireSafety);
  },
};
</script>

<style scoped>
.horizontal-gradient {
  background: linear-gradient(
    to left,
    transparent,
    rgba(0, 0, 0, 0),
    rgba(64, 60, 60, 0.932),
    rgb(54, 53, 53),
    rgb(54, 53, 53)
  );
}

@media (max-width: 1023px) {
    .horizontal-gradient {
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
      background-size: cover;
      background-position: center top;
      background-attachment: fixed;
  }
}

/* .slanted-bg {
  position: relative;
  overflow: hidden;
  transform: skewY(-14deg);
  transform: skewX(-30deg);
  border-radius: 40px;
}

.slanted-bg:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  transform: skewY(14deg);
  transform: skewX(30deg);
} */
</style>