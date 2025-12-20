<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

let handler: ((e: MouseEvent) => void) | null = null;
let rafId: number | null = null;
let isRunning = false;

onMounted(() => {
  // Respect pour accessibilité
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const glow = document.querySelector(".cursor-glow") as HTMLElement | null;
  if (!glow) return;

  // Position actuelle et cible
  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let targetX = currentX;
  let targetY = currentY;

  handler = (e: MouseEvent) => {
    targetX = e.clientX;
    targetY = e.clientY;
  };

  const animate = () => {
    if (!isRunning) return;

    // Interpolation linéaire (lerp) pour effet fluide
    currentX += (targetX - currentX) * 0.1;
    currentY += (targetY - currentY) * 0.1;

    glow.style.setProperty("--x", `${currentX}px`);
    glow.style.setProperty("--y", `${currentY}px`);

    rafId = requestAnimationFrame(animate);
  };

  isRunning = true;
  window.addEventListener("mousemove", handler, { passive: true });
  animate();
});

onUnmounted(() => {
  isRunning = false;

  if (handler) {
    window.removeEventListener("mousemove", handler);
    handler = null;
  }

  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
});
</script>

<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen flex flex-col bg-[#171717] text-white relative">
    <!-- Grille décorative -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <span class="h-line top-[22vh]" />
      <span class="h-line top-[78vh]" />
    </div>

    <!-- Cursor glow (Ecran pc seulement) -->
    <div
      class="cursor-glow fixed inset-0 pointer-events-none z-[1] hidden lg:block"
    />
    <!-- Header -->
    <Header />

    <!-- Contenu centré -->
    <div
      class="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 sm:border-x border-white/10 flex-1"
    >
      <main class="flex flex-col h-full">
        <slot />
      </main>
    </div>

    <!-- Footer FULL 1200px  -->
    <Footer />
  </div>
</template>
