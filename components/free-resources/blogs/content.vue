<template>
  <div style="z-index: 99">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10" style="z-index: 99">
      <!-- <div class="grid grid-cols-1" style="z-index: 99"> -->
      <div
        style="z-index: 99"
        class="p-4 pb-6 rounded-md box-shadow"
        v-for="(content, i) in contents"
        :key="i"
      >
        <div class="mb-2 border-2 overflow-hidden">
          <NuxtLink :to="`/blogs/${content.url}`">
            <img
              class="w-full transition-transform duration-300 transform hover:scale-110"
              :src="content.thumbnail_image_url"
              alt=""
            />
          </NuxtLink>
        </div>

        <h2 class="text-xl font-semibold barlow-condensed uppercase">
          <span class="hover:text-gray-500 duration-500">
            <NuxtLink :to="`/blogs/${content.url}`">{{ content.title }}</NuxtLink>
          </span>
        </h2>

        <div class="my-2 text-red-color text-[18px] barlow-condensed font-medium">
          <span class="mr-1">by {{ content.author }} |</span>
          <span class="mr-1">{{ new Date(content.created_at).toLocaleDateString('en-PH', options) }} |</span>
          <span>{{ content.category.name }}</span>
        </div>

        <p class="text-[18px] pb-1 text-gray-700">{{ content.brief_description }}</p>

        <NuxtLink
          :to="`/blogs/${content.url}`"
          class="border-b border-red-color text-red-color hover:border-none font-medium"
          ><span>Learn More.</span>
        </NuxtLink>
      </div>

      <div class="col-span-12 pt-[80px] sm:pt-[100px] 2xl:pt-[120px] pb-[70px] sm:pb-[120px] 2xl:pb-[140px] text-center text-[30px] sm:text-[40px]" v-if="!contents">
        <h3 class=" font-semibold">
          Getting Data... 
          <Icon name="bx:loader-alt" v-if="isLoading" class="text-[35px] sm:text-[40px] animate-spin text-black" />
        </h3> 
      </div>

      <div class="col-span-12 pt-[80px] pb-[70px] sm:pt-[120px] sm:pb-[140px] text-center text-[30px] lg:text-[40px]" v-if="contents && contents.length === 0">
        <h3 class=" font-semibold">
          No Blog Posts Yet
        </h3>
      </div>

      <!-- <div style="z-index: 99" class="col-span-12 mb-56 mt-44 text-[52px] text-center font-semibold">
        <div class="flex justify-center mb-6">
          <img class=" w-[120px] text-center" src="https://res.cloudinary.com/ds5ovkisn/image/upload/v1694846800/Flameguard%20Images/Flaticons/tool_ym9mzy.webp" alt="">
        </div>

        <div>
          This webpage is still being updated. Come back later to check our contents.
        </div>
      </div> -->
    </div>
  </div>
</template> 

<script setup>
import { onMounted, ref } from "vue"; 
import axios from "axios";

const options = { year: 'numeric', month: 'long', day: 'numeric' };

const contents = ref(null);

const isLoading = ref(false);


onMounted(() => {
  isLoading.value = true
  axios.get(`${import.meta.env.VITE_BASE_URL}/api/blog-posts/front`)
  .then(res => {

    isLoading.value = false
  
    contents.value = res.data;
  })
  .catch(e => {
    isLoading.value = false
   
     console.log("ERROR: ", e.response.data)
  })
})
</script>

<style scoped>
.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
