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
// Animation texte
const words = ["fiabilité", "rapidité", "durabilité"] as const;
const currentWord = ref("");
const displayedWord = ref("");
let index = 0;
let isTyping = false;

// Fonction pour écrire le mot lettre par lettre
const typeWord = async (word: string) => {
  if (isTyping) return;
  isTyping = true;

  // Effacer l'ancien mot
  for (let i = displayedWord.value.length; i >= 0; i--) {
    displayedWord.value = displayedWord.value.slice(0, i);
    await new Promise((resolve) => setTimeout(resolve, 30));
  }

  // Écrire le nouveau mot
  currentWord.value = word;
  for (let i = 0; i <= word.length; i++) {
    displayedWord.value = word.slice(0, i);
    await new Promise((resolve) => setTimeout(resolve, 80));
  }

  isTyping = false;
};

// Fonction pour changer de mot
const changeWord = () => {
  index = (index + 1) % words.length;
  const nextWord = words[index];
  if (nextWord) typeWord(nextWord);
};

onMounted(async () => {
  await nextTick();

  if (!items.value.length) return;

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    // Afficher immédiatement sans animation
    gsap.set(items.value, { opacity: 1, y: 0 });
    const firstWord = words[0];
    if (firstWord) {
      currentWord.value = firstWord;
      displayedWord.value = firstWord;
    }
  } else {
    gsap.to(items.value, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.25,
      delay: 0.3,
    });

    // Démarrer l'animation de frappe après l'animation d'entrée
    setTimeout(() => {
      const firstWord = words[0];
      if (firstWord) typeWord(firstWord);
      // Changer de mot toutes les 3 secondes
      setInterval(changeWord, 3000);
    }, 1800);
  }
});
</script>

<template>
  <section
    id="hero"
    class="min-h-[100dvh] flex items-center px-4 mt-8 sm:mt-0"
    aria-labelledby="hero-title"
  >
    <div class="w-full flex justify-center">
      <!-- Bloc centré dans le wrapper -->
      <div class="max-w-4xl">
        <h1
          id="hero-title"
          :ref="setItemRef"
          class="animate-item text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight"
        >
          Nicolas Deza
          <span
            class="block text-xl sm:text-2xl lg:text-3xl font-normal mt-3 sm:mt-4 text-white/80"
          >
            Créateur de sites web freelance
          </span>
        </h1>

        <p
          :ref="setItemRef"
          class="animate-item mt-4 sm:mt-6 text-lg text-white/60 leading-relaxed"
        >
          Design moderne, performance et
          <span
            class="inline-block font-medium text-white transition-all duration-300 ease-out ml-1 min-w-[120px]"
          >
            {{ displayedWord }}
            <span class="animate-pulse">|</span>
          </span>
          <br />
          Pour une présence en ligne professionnelle
        </p>

        <div
          :ref="setItemRef"
          class="animate-item mt-10 flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#projects"
            class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 hover:scale-105 transition-all duration-300 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#171717]"
            aria-label="Voir mes projets réalisés"
          >
            Voir mes projets
          </a>

          <div
            class="flex items-center gap-2 text-sm text-emerald-400"
            role="status"
            aria-live="polite"
          >
            <span class="relative flex h-2 w-2" aria-hidden="true">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"
              ></span>
            </span>
            <span>Disponible pour nouveaux projets</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-item {
  opacity: 0;
  /* transform: translateY(30px); */
}

@media (prefers-reduced-motion: reduce) {
  .animate-item {
    opacity: 1;
  }
}
</style>
