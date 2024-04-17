<template>
  <div
    class="bg-gradient-to-l from-red-color to-dark-red-color py-8 bg-red-color"
  >
    <div class="w-[90%] lg:w-[85%] xl:w-[1100px] 2xl:w-[1200px] mx-auto grid grid-cols-12 items-center gap-6">
      <div class="flex flex-col col-span-12 lg:col-span-6 text-center lg:text-left leading-10 text-white">
        <p class="text-[18.5px] xxsm:text-[20px] sm:text-[23px] xl:text-[26px] uppercase mb-[8px]">Discover a new way of fire safety</p>

        <div class="uppercase text-[30px] xxsm:text-[35px] lg:text-[45px] font-semibold tracking-wider flex flex-col mb-[8px]">
          <p class="mb-[4px] xxsm:mb-[10px]">Simpler</p>
          <p class="mb-[4px] xxsm:mb-[10px]">Effective</p> 
          <p>Affordable</p>
        </div> 

        <p class="text-[18.5px] xxsm:text-[20px] sm:text-[23px] xl:text-[26px] mb-0 xxsm:mb-4 uppercase">
          ( Watch the video to learn more... )
        </p> 
      </div>

      <!-- START OF VIDEO WRAPPER --> 
      <div class="col-span-12 lg:col-span-6 w-full mb-3 lg:mb-0 rounded-xl">
        <img class="rounded-xl md:w-3/4 lg:w-full mx-auto" src="/assets/vid-placeholder.png" alt="Video Placeholder"/>
        <!-- <VideoPlayer
          class="overflow-hidden rounded-xl h-[250px] sm:h-[300px] md:h-[370px] lg:h-[300px] w-full md:w-3/4 lg:w-full mx-auto"
          :options="playerOptions"
        />   -->
      </div>
      <!-- END OF VIDEO WRAPPER -->
    </div>
  </div>
</template>

<script setup>
// import videoSource from "/assets/videos/video.mp4"; 

// const playerOptions = reactive({
//   sources: [
//     {
//       src: videoSource,
//       type: "video/mp4",
//     },
//   ],
//   loop: true,
//   volume: 1,
//   controls: true,
//   poster: "https://d1otjdv2bf0507.cloudfront.net/images/news/ImageForNews_39287_16554734783798186.jpg"
// })
</script>

