<script setup lang="ts">
import { reactive, ref } from "vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const errors = ref<Record<string, string>>({});
const loading = ref(false);
const success = ref(false);

const submit = async () => {
  errors.value = {};
  success.value = false;
  loading.value = true;

  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: form,
    });
    success.value = true;
    form.name = form.email = form.message = "";
  } catch (error: any) {
    errors.value.global = error.data?.message || "Erreur lors de l'envoi";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="w-full max-w-6xl mx-auto px-4 sm:px-6">
    <div
      class="grid md:grid-cols-2 gap-6 md:gap-8 xl:gap-12 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/10 p-6 sm:p-8 md:p-10 xl:p-12"
    >
      <!-- Colonne gauche : Informations -->
      <div class="space-y-4 md:space-y-6">
        <div>
          <h2 class="text-2xl sm:text-3xl font-medium mb-3 md:mb-2">
            Me contacter
          </h2>
          <p class="text-sm sm:text-base text-white/60 leading-relaxed">
            Un projet à concrétiser ? Contactez-moi pour en discuter et définir
            la meilleure solution.
          </p>
        </div>

        <div class="space-y-3 md:space-y-4 pt-2 md:pt-4">
          <div>
            <p class="text-xs sm:text-sm text-white/50 mb-1">Email</p>
            <a
              href="mailto:nicolasdeza@hotmail.be"
              class="text-sm sm:text-base text-white/80 hover:text-white transition break-all"
            >
              nicolasdeza@hotmail.be
            </a>
          </div>

          <div>
            <p class="text-xs sm:text-sm text-white/50 mb-1">Localisation</p>
            <p class="text-sm sm:text-base text-white/80">Belgique</p>
          </div>

          <div>
            <p class="text-xs sm:text-sm text-white/50 mb-2">Réseaux sociaux</p>
            <div class="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/in/nicolas-deza-411711330/"
                target="_blank"
                rel="noopener"
                class="text-sm sm:text-base text-white/60 hover:text-white transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/NicolasDeza"
                target="_blank"
                rel="noopener"
                class="text-sm sm:text-base text-white/60 hover:text-white transition"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/nicolas__deza/"
                target="_blank"
                rel="noopener"
                class="text-sm sm:text-base text-white/60 hover:text-white transition"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Colonne droite : Formulaire -->
      <form @submit.prevent="submit" class="space-y-4 md:space-y-6">
        <!-- Erreur globale -->
        <p
          v-if="errors.global"
          class="text-xs sm:text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 sm:px-4 py-2"
        >
          {{ errors.global }}
        </p>

        <!-- Nom -->
        <div class="space-y-1.5 sm:space-y-2">
          <label for="name" class="block text-xs sm:text-sm text-white/70">
            Nom
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Votre nom"
            class="w-full rounded-lg bg-white/5 border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-sm outline-none focus:border-white/30 focus:ring-2 focus:ring-white/20 transition"
            :class="{ 'border-red-500/50': errors.name }"
          />
          <p v-if="errors.name" class="text-xs text-red-400 mt-1">
            {{ errors.name }}
          </p>
        </div>

        <!-- Email -->
        <div class="space-y-1.5 sm:space-y-2">
          <label for="email" class="block text-xs sm:text-sm text-white/70">
            Email
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="email@exemple.com"
            class="w-full rounded-lg bg-white/5 border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-sm outline-none focus:border-white/30 focus:ring-2 focus:ring-white/20 transition"
            :class="{ 'border-red-500/50': errors.email }"
          />
          <p v-if="errors.email" class="text-xs text-red-400 mt-1">
            {{ errors.email }}
          </p>
        </div>

        <!-- Message -->
        <div class="space-y-1.5 sm:space-y-2">
          <label for="message" class="block text-xs sm:text-sm text-white/70">
            Message
          </label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            class="w-full rounded-lg bg-white/5 border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-sm outline-none resize-none focus:border-white/30 focus:ring-2 focus:ring-white/20 transition"
            :class="{ 'border-red-500/50': errors.message }"
            placeholder="Décrivez votre projet ou votre besoin..."
          />
          <p v-if="errors.message" class="text-xs text-red-400 mt-1">
            {{ errors.message }}
          </p>
        </div>

        <!-- Bouton -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full h-10 sm:h-11 rounded-full text-sm sm:text-base font-medium bg-white text-black hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          <span v-if="!loading">Envoyer le message</span>
          <span v-else>Envoi en cours…</span>
        </button>

        <!-- Succès -->
        <p
          v-if="success"
          class="text-xs sm:text-sm text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg px-3 sm:px-4 py-2 text-center"
        >
          ✓ Message envoyé avec succès !
        </p>
      </form>
    </div>
  </div>
</template>
