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
  <form
    @submit.prevent="submit"
    class="relative w-full max-w-xl mx-auto p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] space-y-6"
  >
    <!-- Titre -->
    <div class="space-y-1">
      <h2 class="text-2xl font-semibold">Me contacter</h2>
      <p class="text-sm text-white/60">
        Discutons de votre projet ou d’une collaboration.
      </p>
    </div>

    <!-- Erreur globale -->
    <p
      v-if="errors.global"
      class="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2"
    >
      {{ errors.global }}
    </p>

    <!-- Nom -->
    <div class="space-y-1">
      <label class="text-sm text-white/70">Nom</label>
      <input
        v-model="form.name"
        type="text"
        placeholder="Votre nom"
        class="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/30 focus:bg-black/40 transition"
      />
      <p v-if="errors.name" class="text-xs text-red-400">
        {{ errors.name }}
      </p>
    </div>

    <!-- Email -->
    <div class="space-y-1">
      <label class="text-sm text-white/70">Email</label>
      <input
        v-model="form.email"
        type="email"
        placeholder="email@exemple.com"
        class="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/30 focus:bg-black/40 transition"
      />
      <p v-if="errors.email" class="text-xs text-red-400">
        {{ errors.email }}
      </p>
    </div>

    <!-- Message -->
    <div class="space-y-1">
      <label class="text-sm text-white/70">Message</label>
      <textarea
        v-model="form.message"
        rows="5"
        placeholder="Expliquez-moi votre besoin..."
        class="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3 text-sm outline-none resize-none focus:border-white/30 focus:bg-black/40 transition"
      />
      <p v-if="errors.message" class="text-xs text-red-400">
        {{ errors.message }}
      </p>
    </div>

    <!-- Bouton -->
    <button
      type="submit"
      :disabled="loading"
      class="w-full h-11 rounded-full font-medium bg-white text-black hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition"
    >
      <span v-if="!loading">Envoyer le message</span>
      <span v-else>Envoi en cours…</span>
    </button>

    <!-- Succès -->
    <p
      v-if="success"
      class="text-sm text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2"
    >
      Message envoyé avec succès ✓
    </p>
  </form>
</template>
