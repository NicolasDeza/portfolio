<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import DesktopFrame from "./DesktopFrame.vue";

gsap.registerPlugin(ScrollTrigger);

const cardRef = ref<HTMLElement | null>(null);

defineProps<{
  title: string;
  description: string;
  role: string;
  stack: string;
  image: string;
  link: string;
  reverse?: boolean;
}>();

onMounted(() => {
  if (!cardRef.value) return;

  gsap.fromTo(
    cardRef.value,
    { opacity: 0, y: 32 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardRef.value,
        start: "top 85%",
        once: true,
      },
      // évite certains "sauts" au recalcul
      clearProps: "transform",
    }
  );
});
</script>

<template>
  <!-- Parent = GSAP (opacity + translateY) -->
  <section
    ref="cardRef"
    class="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl"
  >
    <!-- Child = hover scale (transform) -->
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-12 transition-transform duration-300 ease-out will-change-transform hover:scale-[1.030]"
      :class="reverse ? 'lg:[&>*:first-child]:order-2' : ''"
    >
      <!-- Visuel -->
      <DesktopFrame :src="image" :alt="title" :show-bar="true" />

      <!-- Contenu -->
      <div class="space-y-5">
        <h3 class="text-3xl font-semibold tracking-tight">
          {{ title }}
        </h3>

        <p class="text-white/70 max-w-md">
          {{ description }}
        </p>

        <ul class="text-sm text-white/50 space-y-1">
          <li><strong class="text-white/80">Rôle :</strong> {{ role }}</li>
          <li><strong class="text-white/80">Stack :</strong> {{ stack }}</li>
        </ul>

        <a
          :href="link"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center px-6 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          :aria-label="`Voir le projet ${title} (ouvre dans un nouvel onglet)`"
        >
          Voir le projet →
        </a>
      </div>
    </div>
  </section>
</template>
