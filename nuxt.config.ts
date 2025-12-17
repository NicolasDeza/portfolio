// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/global.css", "~/assets/css/cursor-glow.css"],
  // nuxt.config.ts

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
  ],

  googleFonts: {
    families: {
      "Zalando Sans Expanded": [300, 400, 500, 600, 700],
    },
    display: "swap",
  },
});
