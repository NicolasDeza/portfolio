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

  /* =========================
     SEO GLOBAL (BASE)
     ========================= */
  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },

      title: "Nicolas Deza – Développeur Web",
      titleTemplate: "%s – Nicolas Deza",

      meta: [
        {
          name: "description",
          content:
            "Développeur web freelance en Belgique spécialisé en Nuxt, Vue.js, Laravel et WordPress. Création de sites modernes, performants et sur mesure.",
        },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Nicolas Deza" },
      ],

      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
    },
  },

  /* =========================
     SMTP / Nodemailer
     ========================= */
  runtimeConfig: {
    smtp: {
      host: process.env.NUXT_SMTP_HOST,
      port: parseInt(process.env.NUXT_SMTP_PORT || "587"),
      user: process.env.NUXT_SMTP_USER,
      pass: process.env.NUXT_SMTP_PASS,
    },
    mail: {
      from: process.env.NUXT_MAIL_FROM,
      to: process.env.NUXT_MAIL_TO,
    },
  },
});
