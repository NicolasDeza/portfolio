<script setup lang="ts"></script>

<template>
  <section class="pb-6 sm:pb-8" aria-labelledby="cta-heading">
    <div class="w-full px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2
          id="cta-heading"
          class="text-3xl sm:text-4xl font-medium tracking-tight mb-6"
        >
          Un projet en tête&nbsp;?
        </h2>

        <p class="text-white/70 text-lg leading-relaxed mb-10">
          Discutons de vos besoins et voyons comment créer une solution web
          claire, performante et durable.
        </p>

        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-white border border-white/20 hover:border-white/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300"
          aria-label="Accéder à la page de contact"
        >
          Me contacter
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
