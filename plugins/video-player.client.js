import 'video.js/dist/video-js.css'
import VideoPlayer from '@videojs-player/vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .use(VideoPlayer)
})