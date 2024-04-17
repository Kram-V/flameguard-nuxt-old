<template>
  <div class="py-12 w-[90%] lg:w-[85%] xl:w-[1100px] 2xl:w-[1200px] mx-auto">
    <div class="mb-12 xxsm:mb-16 text-center">
      <h2 class="text-[28px] xxsm:text-[35px] lg:text-[40px] font-semibold relative">
        <span class="relative tracking-wide barlow-condensed uppercase pb-2 block">
          Featured Testimonials
          <span
            class="absolute bottom-0 top-[50px] sm:top-[55px] xl:top-[60px] left-1/2 transform -translate-x-1/2 w-[50px] sm:w-20 border-b-4 border-red-500"
          ></span>
        </span> 
      </h2>
    </div>

    <vueper-slides
      class="testimonials-carousel-container no-shadow"
      infinite
      :autoplay="true"
      :touchable="false"
      :fixed-height="slideHeight"
      duration="7000"
      fade
    >
      <vueper-slide  class="!bg-white px-10" v-for="(content, i) in contents" :key="i" :image="content.image">
        <template #content>
          <div class="text-center">
            <Icon name="fa6-solid:quote-left" class="text-[30px] sm:text-[40px] lg:text-[50px] mb-4 text-gray-400" />

            <p class="text-gray-700 text-[16px] sm:text-[20px] font-semibold leading-8">
              {{ content.message}}
            </p>

            <div class="w-full flex flex-col mt-5">
              <div>
                <h5 class="text-[18px] sm:text-[22px] font-bold">{{ content.client }}</h5>
              </div>

              <h6 class="text-[17px] sm:text-[19px] text-red-color font-medium">
                {{ content.position }}
              </h6>

              <h5 class="text-[18px] sm:text-[22px] font-bold">{{ content.organization }}</h5>
            </div>

            <Icon name="fa6-solid:quote-right" class="text-[30px] sm:text-[40px] lg:text-[50px] mt-4 text-gray-400" />
            
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
export default {

  data() {
    return {
      slideHeight: "450px",
      contents: [
        {
          message: "Flameguard did an outstanding job in conducting the inspection, testing, and maintenance of our fire sprinkler and kitchen suppression system. They demonstrated great expertise in NFPA standards, and their reports were both comprehensive and easy to understand. We have full confidence in their ability to perform the preventive maintenance of our fire protection systems.",
          client: "Engr. Celito A.",
          position: "Building Engineer",
          organization: "Seda Hotel Laguna"
        },

        {
          message: "The Flameguard team is top-notch in fire alarm design and maintenance. They consistently demonstrate exceptional on-site work that meets our high standards for safety and excellence. EMS has developed a strong and dependable relationship with Flameguard's leadership team through multiple projects. I assure you that their service will exceed your expectations, and I strongly recommend them.",
          client: "Engr. Kevin C.",
          position: "Plant Engineering Manager",
          organization: "Gruppo EMS"
        },

        {
          message: "I am impressed by the exceptional performance of Flameguard in Fire Protection maintenance. Their report includes detailed information such as pump curves, speed readings, voltage, and other crucial details about the pump. It also has a summary of deficiencies with recommendations to correct them. In my opinion, they are the best fire protection contractor in the Philippines.",
          client: "Engr. Jerswin J.",
          position: "Property Engineer",
          organization: "The Columns Ayala"
        },

        {
          message: "Working with Flameguard for both simple and complex projects is remarkably easy. Their design engineers possess expertise in preparing shop drawings, while their field workers are always prepared to assist in completing the work promptly. They are both excellent in fire alarm and sprinkler installations and design. We eagerly anticipate working together on future projects.",
          client: "Jay Q.",
          position: "Proprietor",
          organization: "VJC Tech"
        },
      ],
    };
  },

  watch: {
    $route(to, from) {
      this.updateSlideHeight();
    },
  },

  methods: {
    updateSlideHeight() {
      if (window.innerWidth < 900 && window.innerWidth >= 500) {
        this.slideHeight = "520px";
      } else if (window.innerWidth < 500 && window.innerWidth >= 480) {
        this.slideHeight = "560px";
      } else if (window.innerWidth < 480 && window.innerWidth >= 445) {
        this.slideHeight = "600px";
      } else if (window.innerWidth < 445 && window.innerWidth >= 416) {
        this.slideHeight = "620px";
      } else if (window.innerWidth < 416 && window.innerWidth >= 408) {
        this.slideHeight = "650px";
      } else if (window.innerWidth < 408 && window.innerWidth >= 378) {
        this.slideHeight = "690px";
      } else if (window.innerWidth < 378 && window.innerWidth >= 370) {
        this.slideHeight = "715px";
      } else if (window.innerWidth < 370 && window.innerWidth >= 350) {
        this.slideHeight = "740px";
      } else if (window.innerWidth < 350 && window.innerWidth >= 340) {
        this.slideHeight = "775px";
      } else if (window.innerWidth < 340 && window.innerWidth >= 335) {
        this.slideHeight = "794px";
      } else if (window.innerWidth < 335 && window.innerWidth >= 323) {
        this.slideHeight = "810px";
      } else if (window.innerWidth < 323) {
        this.slideHeight = "850px";
      } 
    },
  },

  mounted() {
    this.updateSlideHeight();

    window.addEventListener("resize", this.updateSlideHeight);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateSlideHeight);
  },
};
</script>

