<template>
  <div
    style="z-index: 999"
    class="grid grid-cols-12 justify-items-center items-center text-center sm:text-left"
  >
    <!-- <div class="mb-16 text-center col-span-12">
      <h1 class="text-[35px] sm:text-[40px] 2xl:text-[44px] font-semibold relative">
        <span class="relative tracking-wide barlow-condensed uppercase pb-2 block">
          Media Gallery
          <span
          class="absolute bottom-0 top-[50px] sm:top-[55px] xl:top-[60px] left-1/2 transform -translate-x-1/2 w-[50px] sm:w-20 border-b-4 border-red-500"
          ></span>
        </span>
      </h1>
    </div>

    <div class="col-span-12"  style="z-index: 999">
      <p class="text-[20px] text-gray-700 mb-10 font-semibold">
        Welcome to our comprehensive <span class="text-red-color italic">Flameguard Fire Protection Inc's Media Gallery</span> . Here, you can access a wide range of informative resources, including YouTube videos, all dedicated to enhancing your knowledge about fire safety and protection.
      </p>
    </div>

    <div class="col-span-12"  style="z-index: 999">
      <p class="text-[20px] text-gray-700 mb-10 font-semibold">
        We take great pride in curating an extensive collection of educational videos that cover various aspects of fire prevention, firefighting techniques, and emergency preparedness. Our how-to instructional videos are designed to empower you with the necessary skills to handle fire incidents efficiently, ensuring the safety of yourself and others.
      </p>
    </div> -->

    <div
      style="z-index: 99"
      class="col-span-12 mb-24 mt-16 sm:mb-32 sm:mt-24 2xl:mb-56 2xl:mt-44 text-[30px] lg:text-[40px] text-center font-semibold"
    >
      <div class="flex justify-center mb-6">
        <img
          class="w-[60px] lg:w-[80px] text-center"
          src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1694846800/Flameguard%20Images/Flaticons/tool_ym9mzy.webp"
          alt=""
        />
      </div>

      <div>
        This webpage is still being updated. Come back later to check our
        contents.
      </div>
    </div>
  </div>

  <!-- START OF MEDIA GALLERY -->
  <!-- <div class="w-full mb-3 mt-24">
    <div ref="youtubeEmbed" class="elfsight-app-85a7df38-01ef-442f-aad9-4170b5c1207c"></div> 
  </div> -->
  <!-- END OF MEDIA GALLERY -->
</template>

<script>
export default {
  methods: {
    reloadYouTubeVideo() {
      // Get the reference to the ElfSight component using the ref attribute

      const youtubeEmbed = this.$refs.youtubeEmbed;

      // Check if the reference exists before manipulating it
      if (youtubeEmbed) {
        // Clear the content inside the ElfSight component (i.e., the YouTube video)
        youtubeEmbed.innerHTML = "";

        // Use the ElfSight library method to reload the YouTube video
        // Replace 'your-embed-id' with the actual ID provided by the library
        ElfSightApps.init({ id: "your-embed-id" });
      } else {
        console.error("youtubeEmbed ref not found."); // Debugging purposes
      }
    },
  },

  unmounted() {
    this.reloadYouTubeVideo();
  },
};
</script>
