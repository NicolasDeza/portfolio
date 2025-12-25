<script setup lang="ts">
import { nextTick } from "vue";

const isMenuOpen = ref(false);
const route = useRoute();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const goToHome = async (e?: Event) => {
  closeMenu();

  if (route.path === "/") {
    e?.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    await navigateTo("/", { replace: true });
    window.scrollTo({ top: 0 });
  }
};

const goToProjects = async (e?: Event) => {
  closeMenu();

  if (route.path !== "/") {
    e?.preventDefault();
    await navigateTo("/");
    await nextTick();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" });
      });
    });
  } else {
    e?.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }
};

// États de page
const isHomePage = computed(() => route.path === "/");
const isContactPage = computed(() => route.path === "/contact");
</script>

<template>
  <header class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto">
    <div
      class="flex items-center justify-between gap-4 sm:gap-20 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
    >
      <!-- Partie 1 -> Prénom + Nom -->
      <NuxtLink
        to="/"
        class="font-medium tracking-wide hover:opacity-80 transition whitespace-nowrap"
        @click="goToHome"
      >
        Nicolas Deza
      </NuxtLink>

      <!-- Center: Nav Desktop -->
      <nav class="hidden md:flex items-center gap-8 text-sm text-white/80">
        <button
          type="button"
          class="hover:text-white transition"
          :class="isHomePage ? 'text-white' : ''"
          @click="goToProjects"
        >
          Projets
        </button>

        <NuxtLink
          to="/contact"
          class="hover:text-white transition"
          :class="isContactPage ? 'text-white' : ''"
        >
          Contact
        </NuxtLink>
      </nav>

      <!-- Bouton Hamburger Mobile -->
      <button
        @click="toggleMenu"
        class="md:hidden p-2 text-white/70 hover:text-white transition"
        :aria-expanded="isMenuOpen"
        aria-label="Menu"
      >
        <svg
          v-if="!isMenuOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Partie 2 -> Icones réseaux  -->
      <div class="hidden md:flex items-center gap-4">
        <!-- GitHub -->
        <a
          href="https://github.com/NicolasDeza"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          class="text-white/70 hover:text-white transition"
        >
          <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
            <path
              d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.45 7.86 10.98.58.11.79-.25.79-.56
              0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.06-.72.08-.71.08-.71
              1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.76.41-1.27.74-1.56
              -2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04
              0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18
              .63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1
              0 4.43-2.69 5.41-5.25 5.7.42.36.8 1.07.8 2.16
              0 1.56-.02 2.82-.02 3.21 0 .31.21.68.8.56
              4.56-1.53 7.85-5.87 7.85-10.98C23.5 5.74 18.27.5 12 .5z"
            />
          </svg>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/nicolas-deza-411711330/"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          class="text-white/70 hover:text-white transition"
        >
          <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
            <path
              d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5
              1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07
              c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.67V24h-5v-7.5
              c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.96V24h-5V8z"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- Menu Mobile Dropdown -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="isMenuOpen"
        class="md:hidden mt-2 py-4 px-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col gap-4"
      >
        <button
          type="button"
          class="hover:text-white transition py-2"
          :class="isHomePage ? 'text-white' : 'text-white/80'"
          @click="goToProjects"
        >
          Projets
        </button>

        <NuxtLink
          to="/contact"
          class="hover:text-white transition py-2"
          :class="isContactPage ? 'text-white' : 'text-white/80'"
          @click="closeMenu"
        >
          Contact
        </NuxtLink>

        <!-- Icones réseaux en mobile -->
        <div class="flex items-center gap-4 pt-4 border-t border-white/10">
          <!-- GitHub -->
          <a
            href="https://github.com/NicolasDeza"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            class="text-white/70 hover:text-white transition"
          >
            <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
              <path
                d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.45 7.86 10.98.58.11.79-.25.79-.56
                0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.06-.72.08-.71.08-.71
                1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.76.41-1.27.74-1.56
                -2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04
                0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18
                .63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1
                0 4.43-2.69 5.41-5.25 5.7.42.36.8 1.07.8 2.16
                0 1.56-.02 2.82-.02 3.21 0 .31.21.68.8.56
                4.56-1.53 7.85-5.87 7.85-10.98C23.5 5.74 18.27.5 12 .5z"
              />
            </svg>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/nicolas-deza-411711330/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            class="text-white/70 hover:text-white transition"
          >
            <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
              <path
                d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5
                1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07
                c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.67V24h-5v-7.5
                c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.96V24h-5V8z"
              />
            </svg>
          </a>
        </div>
      </nav>
    </Transition>
  </header>
</template>
