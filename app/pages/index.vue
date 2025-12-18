<script setup lang="ts">
import ProjectCard from "~/components/projects/ProjectCard.vue";
</script>

<template>
  <!-- HERO -->
  <Hero />

  <!-- PROJETS -->
  <section id="projects" class="py-20 space-y-20 lg:py-32 lg:space-y-32">
    <h2 class="text-center text-3xl sm:text-4xl font-medium tracking-tight">
      Projets
    </h2>
    <ProjectCard
      title="Atelier de Bidibule"
      description="Site e-commerce sur mesure pour une créatrice indépendante, avec personnalisation des produits et paiement en ligne."
      role="Design & développement"
      stack="Laravel, Inertia, Vue, Tailwind, Stripe"
      image="/projects/atelier-de-bidibulle.png"
      link="https://atelierdebidibulle.be"
    />
    <ProjectCard
      reverse
      title="Avh-Garden"
      description="Site vitrine pour une entreprise dans le batiment d'aménagement intérieur et extérieur"
      role="Design & développement"
      stack="Wordpress, Elementor"
      image="/projects/avh-garden.be.png"
      link="https://avh-garden.be/"
    />
  </section>
</template>
