<script setup lang="ts">
const year = new Date().getFullYear();
const route = useRoute();

const goToHome = (e: Event) => {
  if (route.path === "/") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
</script>

<template>
  <footer aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Pied de page</h2>
    <div class="w-full mx-auto sm:px-6 lg:px-8">
      <div
        class="max-w-[1200px] mx-auto round bg-white/[0.02] backdrop-blur-sm border border-white/10 px-6 sm:px-10 pt-10 sm:pt-16 pb-6"
      >
        <div
          class="flex flex-col gap-6 py-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <!-- Identité -->
          <div>
            <p class="font-medium text-white mb-4">
              <NuxtLink
                to="/"
                class="hover:opacity-80 transition"
                @click="goToHome"
              >
                Nicolas Deza
              </NuxtLink>
            </p>
            <p class="text-sm text-white/60">
              Développeur web — sites modernes et performants
            </p>
            <p class="text-sm text-white/40 mt-1">Basé en Belgique</p>
          </div>

          <!-- Contact / Liens -->
          <nav aria-label="Liens de contact et réseaux sociaux">
            <div class="flex flex-col sm:items-end gap-3 text-sm">
              <a
                href="mailto:nicolasdeza@hotmail.be"
                class="text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transition mb-4"
                aria-label="Envoyer un email à nicolasdeza@hotmail.be"
              >
                nicolasdeza@hotmail.be
              </a>

              <div class="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/nicolas-deza-411711330/"
                  target="_blank"
                  rel="noopener"
                  class="text-white/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transition"
                  aria-label="Voir mon profil LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/NicolasDeza"
                  target="_blank"
                  rel="noopener"
                  class="text-white/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transition"
                  aria-label="Voir mon profil GitHub"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/nicolas__deza/"
                  target="_blank"
                  rel="noopener"
                  class="text-white/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transition"
                  aria-label="Voir mon profil Instagram"
                >
                  Instagram
                </a>
              </div>
            </div>
          </nav>
        </div>

        <!-- Séparateur interne -->
        <div
          class="mt-4 sm:mt-8 pt-6 border-t text-center border-white/10 text-xs text-white/40 space-y-2"
        >
          <p>© {{ year }} Nicolas Deza | Tous droits réservés</p>
          <NuxtLink
            to="/politique-confidentialite"
            class="inline-block hover:text-white/60 transition pt-1"
          >
            Politique de confidentialité
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
