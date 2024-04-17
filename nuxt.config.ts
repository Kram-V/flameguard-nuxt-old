import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@unlazy/nuxt",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  unlazy: {
    ssr: false,
  },

  // ssr: true,

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },

  alias: {
    "@": resolve(__dirname, "/"),
  },

  css: ["~/assets/main.css"],
});
