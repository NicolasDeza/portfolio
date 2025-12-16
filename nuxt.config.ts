// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

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