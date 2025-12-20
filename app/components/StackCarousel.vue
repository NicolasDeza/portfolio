<script setup lang="ts">
const stack = [
  { name: "Nuxt", src: "/stack/nuxt.svg" },
  { name: "Vue", src: "/stack/vue.svg" },
  { name: "Tailwind", src: "/stack/tailwindcss.svg" },
  { name: "Laravel", src: "/stack/laravel.svg" },
  { name: "Elementor", src: "/stack/elementor.svg" },
  { name: "Inertia", src: "/stack/inertia.svg" },
  { name: "Stripe", src: "/stack/stripe.svg" },
  { name: "WordPress", src: "/stack/wordpress.svg" },
];
</script>

<template>
  <section class="pb-20 sm:pb-32">
    <!-- Titre contenu -->
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-center text-3xl sm:text-4xl font-medium tracking-tight">
        Technologies utilisées
      </h2>
    </div>

    <!-- Bandeau FULL WIDTH -->
    <div
      class="isolate h-[140px] sm:h-[160px] lg:h-[180px] overflow-hidden flex items-center mt-10"
    >
      <!-- Gradients -->
      <div
        class="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#171717] to-transparent z-10"
      />
      <div
        class="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#171717] to-transparent z-10"
      />

      <!-- Logos -->
      <div
        class="flex w-max animate-marquee gap-5 sm:gap-12 lg:gap-16 px-4 sm:px-6"
      >
        <div
          v-for="(item, index) in [...stack, ...stack]"
          :key="index"
          class="flex items-center justify-center min-w-[100px] sm:min-w-[120px] opacity-70 hover:opacity-100 transition"
        >
          <img
            :src="item.src"
            :alt="item.name"
            class="h-9 sm:h-10 md:h-12 object-contain grayscale"
          />
        </div>
      </div>
    </div>
  </section>
</template>
