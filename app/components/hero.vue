<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import type { VNodeRef } from "vue";
import gsap from "gsap";

// Éléments à animer (dans l’ordre du DOM)
const items = ref<HTMLElement[]>([]);

// Ref handler typé pour Vue + TS
const setItemRef: VNodeRef = (el) => {
  if (el instanceof HTMLElement) {
    items.value.push(el);
  }
};

onMounted(async () => {
  await nextTick();

  if (!items.value.length) return;

  gsap.to(items.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.12,
    delay: 0.2,
  });
});
</script>

<template>
  <section class="min-h-[100dvh] flex items-center pt-12 sm:pt-0">
    <div class="w-full flex justify-center">
      <!-- Bloc centré dans le wrapper -->
      <div class="max-w-3xl">
        <h1
          :ref="setItemRef"
          class="animate-item text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight"
        >
          Nicolas Deza
        </h1>

        <p :ref="setItemRef" class="animate-item mt-4 text-xl text-white/80">
          Développeur web
        </p>

        <p :ref="setItemRef" class="animate-item mt-6 text-lg text-white/60">
          Je crée des sites modernes et performants
        </p>

        <div
          :ref="setItemRef"
          class="animate-item mt-10 flex items-center gap-6"
        >
          <a
            href="#projects"
            class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition"
          >
            Voir mes projets
          </a>

          <a
            href="#contact"
            class="text-sm text-white/70 hover:text-white transition"
          >
            Me contacter
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* État initial avant l’animation */
.animate-item {
  opacity: 0;
  transform: translateY(30px);
}
</style>
