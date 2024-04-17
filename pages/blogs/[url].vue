<template>
  <div class="lg:py-15 w-[90%] lg:w-[85%] xl:w-[1100px] 2xl:w-[1200px] mx-auto">
    <div class="w-full grid grid-cols-12" :class="`${!content ? 'my-[200px]' : 'mt-[190px] sm:mt-[120px] lg:mt-[190px] mb-[60px]'}`">
      <div class="col-span-12 xl:col-span-9 pr-0 xl:pr-10 xl:border-r" v-if="content">
        <div class="text-[26px] sm:text-[30px] 2xl:text-[35px] leading-10 sm:leading-[50px] font-bold mb-6">
          {{ content.title }}
        </div>

        <div class="mb-16">
          <img  :src="content.thumbnail_image_url" alt="">

          <div class="flex flex-col sm:flex-row gap-2 mt-3 text-gray-400">
            <div class="flex items-center pr-2 sm:border-r sm:border-gray-300"><Icon name="solar:pen-bold" class="text-[20px] mr-1" /> {{ content.author }}</div>
            <div class="flex items-center pr-2 sm:border-r sm:border-gray-300"><Icon name="mdi:clock" class="text-[20px] mr-1" /> {{ new Date(content.created_at).toLocaleDateString('en-PH', options) }}</div>
            <div class="flex items-center"><Icon name="mdi:tag" class="text-[20px] mr-1" /> {{ content.category.name }}</div>
          </div>
        </div>


        <div class="ckeditor-content-container" v-html="JSON.parse(content.content)"></div>
      </div>

      <div class="col-span-3 hidden xl:block pl-10" v-if="content">
        <div class="flex justify-center icon-container">
          <Icon name="material-symbols:settings-outline" class="text-[36px]" />
        </div>

        <div class="font-bold text-center uppercase mt-3">
          Something working on this part
        </div>
      </div>

      <div class="col-span-12 pt-[140px] sm:pt-[100px] lg:pt-[200px] 2xl:pt-[320px] pb-[0px] sm:pb-[10px] lg:pb-[60px] 2xl:pb-[140px] text-center text-[30px] sm:text-[40px]" v-if="!content">
        <div class=" font-semibold">
          Getting Data... <Icon name="bx:loader-alt" v-if="isLoading" class="text-[35px] sm:text-[40px] animate-spin text-black" />
        </div>
      </div>
    </div>
  </div>
</template> 

<script setup>
import { watch } from "vue";
import axios from "axios";

const route = useRoute();

const options = { year: 'numeric', month: 'long', day: 'numeric' };

const content = ref(null);

const isLoading = ref(false);

const blogTitle = ref(null);
const blogThumbnailImage = ref(null);
const blogDescription = ref(null);
const blogURL = ref(null);

watch(content, () => {
  blogTitle.value = content.value.title
  blogThumbnailImage.value = content.value.thumbnail_image_url;
  blogDescription.value = content.value.brief_description;
  blogURL.value = `https://flameguardph.com/blogs/${content.value.url}`
})

const { data } = await useAsyncData(
  'blogs',
  () => $fetch(`${import.meta.env.VITE_BASE_URL}/api/blog-posts/front/${route.params.url}`)
)


onMounted(() => {
  isLoading.value = true
  axios.get(`${import.meta.env.VITE_BASE_URL}/api/blog-posts/front/${route.params.url}`)
  .then(res => {
    isLoading.value = false
    content.value = res.data

    console.log("RESPONSE", res.data)
  })
  .catch(e => {
    isLoading.value = false
    console.log("ERROR: ", e.response.data)
  })
})

useSeoMeta({
  title: () => data?.value?.title_tag,
  description: () => data?.value?.description_tag,
  keywords: () => 'flameguard fire protection inc, fire protection, fire, flameguard, flameguard ph, flameguard ph Blogs page, flameguard blogs page, fire protection philippines, flameguard philippines, fire protection ph',
  copyright: () => '© 2024 Flameguard Fire Protection Inc',
  ogTitle: () => data?.value?.title_tag,
  ogDescription: () => data?.value?.description_tag,
  ogImage: () => data?.value?.thumbnail_image_url,
  ogUrl: () =>  blogURL.value,
})

</script>

<style scoped>
.icon-container {
  animation: spin 3s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>