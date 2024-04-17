import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .use(VueReCaptcha, { 
      siteKey: import.meta.env.VITE_RECAPTCHA_KEY ,
      loaderOptions: {
        autoHideBadge: true,
        useRecaptchaNet: true
      }
    })
})