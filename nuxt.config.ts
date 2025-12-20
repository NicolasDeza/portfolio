// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/global.css", "~/assets/css/cursor-glow.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
  ],

  colorMode: {
    preference: "dark",
    fallback: "dark",
    classSuffix: "",
  },

  googleFonts: {
    families: {
      "Zalando Sans Expanded": [300, 400, 500, 600, 700],
    },
    display: "swap",
  },

  //  SMTP / nodemailer
  runtimeConfig: {
    smtp: {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    mail: {
      from: process.env.MAIL_FROM,
    },
  },
});
