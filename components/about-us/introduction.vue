<template>
  <div class="w-[90%] lg:w-[85%] xl:w-[1100px] 2xl:w-[1200px] mx-auto grid grid-cols-12 items-center gap-6 py-12">
   <div style="z-index: 99" class="col-span-12 lg:col-span-6 sm:text-left">
     <p class="text-[17px] xxsm:text-[20px] text-gray-700 leading-8 xxsm:leading-9 sm:leading-10 font-semibold">
       <span class="text-[25px] xxsm:text-3xl 2xl:text-[34px] font-medium barlow-condensed text-black"
         >Flameguard</span 
       >
        is the leading fire protection company in the Philippines – contractor and installer of fire protection systems such as fire sprinkler, fire alarm (FDAS), Novec 1230, deluge; offering science-based solutions to different fire hazards. 
        With our top-of-the-line competency and customer-oriented attitude, you’ll have peace of mind that your safety is guaranteed. Not only will you save time and resources by choosing us, but you'll also be taking a big step toward ensuring your property is secure.
     </p>
   </div>

   <!-- START OF VIDEO WRAPPER -->
   <div style="z-index: 99" class="col-span-12 lg:col-span-6 w-full mb-6">
     <img class="rounded-xl md:w-3/4 lg:w-full mx-auto" src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1699334552/Flameguard%20Images/placeholder/vid-placeholder_rdesjg.png" alt="Video Placeholder"/>
     <!-- <video-player -->
         <!-- class="overflow-hidden rounded-xl h-[250px] sm:h-[300px] md:h-[370px] lg:h-[300px] w-full md:w-3/4 lg:w-full mx-auto" -->
         <!-- :options="playerOptions" -->
       <!-- /> -->
   </div>
   <!-- END OF VIDEO WRAPPER -->
 </div>
</template>

<script>
// import videoSource from "@/assets/videos/video.mp4";
export default {
 data() {
   return {
     // playerOptions: {
       // sources: [
         // {
           // src: videoSource,
           // type: "video/mp4",
         // },
       // ],
       // loop: true,
       // volume: 1,
       // controls: true,
       // poster: "https://d1otjdv2bf0507.cloudfront.net/images/news/ImageForNews_39287_16554734783798186.jpg"
     // },
   };
 },
};
</script>

