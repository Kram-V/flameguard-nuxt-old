import 'vueperslides/dist/vueperslides.css';
import { VueperSlides, VueperSlide } from "vueperslides";


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .component("VueperSlides" ,VueperSlides)
    .component("VueperSlide", VueperSlide)
})