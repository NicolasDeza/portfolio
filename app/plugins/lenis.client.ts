import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineNuxtPlugin((nuxtApp) => {
  // Enregistrer le plugin ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Initialiser Lenis
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  // Synchroniser Lenis avec GSAP ScrollTrigger
  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // Remettre le scroll en haut lors des changements de page
  nuxtApp.hook("page:finish", () => {
    lenis.scrollTo(0, { immediate: true });
  });

  // Fournir l'instance Lenis globalement
  return {
    provide: {
      lenis,
    },
  };
});
