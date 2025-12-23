<script setup lang="ts">
useHead({
  link: [
    {
      rel: "canonical",
      href: "https://www.nicolasdeza.com/contact",
    },
  ],
});
useSeoMeta({
  title: "Contact",
  description:
    "Contactez Nicolas Deza, développeur Web en Belgique spécialisé en Nuxt, Vue.js, Laravel et WordPress.",

  ogTitle: "Contact – Nicolas Deza",
  ogDescription:
    "Un projet web à concrétiser ? Contactez Nicolas Deza, développeur Web spécialisé en Nuxt, Vue.js, Laravel et WordPress.",
  ogImage: "https://www.nicolasdeza.com/og-image.jpg",
  ogUrl: "https://www.nicolasdeza.com/contact",

  twitterCard: "summary_large_image",
  twitterTitle: "Contact – Nicolas Deza",
  twitterDescription:
    "Besoin d’un site web moderne ou d’une application sur mesure ? Contactez Nicolas Deza.",
  twitterImage: "https://www.nicolasdeza.com/og-image.jpg",
});
</script>

<template>
  <section
    class="flex items-center justify-center min-h-[100dvh] pt-32 py-12 pb-10 sm:pb-16"
  >
    <ContactForm />
  </section>
</template>
