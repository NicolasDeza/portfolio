<script setup lang="ts">
import { onMounted, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectCard from "~/components/projects/ProjectCard.vue";

gsap.registerPlugin(ScrollTrigger);

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://www.nicolasdeza.com/",
    },
  ],
});

useSeoMeta({
  title: "Développeur Web",
  description:
    "Développeur Full Web spécialisé en Nuxt, Vue.js, Laravel et WordPress. Je crée des sites web sur mesure, e-commerce et applications web modernes en Belgique.",

  ogTitle: "Développeur Web – Nicolas Deza",
  ogDescription:
    "Développeur Web spécialisé en Nuxt, Vue.js, Laravel et WordPress. Sites web sur mesure, e-commerce et applications web modernes.",
  ogImage: "https://www.nicolasdeza.com/og-image.jpg",
  ogUrl: "https://www.nicolasdeza.com",
  ogType: "website",

  twitterCard: "summary_large_image",
  twitterTitle: "Développeur Web – Nicolas Deza",
  twitterDescription:
    "Développeur Web spécialisé en Nuxt, Vue.js, Laravel et WordPress. Sites web sur mesure, e-commerce et applications web modernes.",
  twitterImage: "https://www.nicolasdeza.com/og-image.jpg",
});

onMounted(async () => {
  if (process.server) return;

  await nextTick();
  await new Promise((r) => setTimeout(r, 100));

  const cards = gsap.utils.toArray<HTMLElement>("#projects .project-card");

  if (!cards.length) return;

  gsap.fromTo(
    cards,
    {
      opacity: 0,
      y: 150,
      scale: 0.9,
      rotateX: 25,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      duration: 2.2,
      ease: "power4.out",
      stagger: {
        amount: 2.0,
        from: "center",
      },
      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
        once: true,
      },
    }
  );
});
</script>

<template>
  <!-- HERO -->
  <Hero />

  <!-- PROJETS -->
  <section
    id="projects"
    class="py-20 space-y-20 sm:pb-40 sm:pt-32 sm:space-y-32"
  >
    <h2 class="text-center text-3xl sm:text-4xl font-medium tracking-tight">
      Projets réalisés
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
      description="Site vitrine pour une entreprise dans le batiment d'aménagement intérieur et extérieur."
      role="Design & développement"
      stack="Wordpress, Elementor"
      image="/projects/avh-garden.be.png"
      link="https://avh-garden.be/"
    />
    <ProjectCard
      title="Samu-Horticole"
      description="Dashboard pour un indépendant horticole, permettant la gestion des clients et machines."
      role="Design & développement"
      stack="Laravel, Inertia, Vue, Tailwind"
      image="/projects/samu-horticole.png"
      link="/"
    />
  </section>
  <StackCarousel />
  <AboutSection />
  <CtaContact />
</template>
