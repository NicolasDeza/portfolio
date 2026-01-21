export default defineNuxtPlugin(() => {
  if (!import.meta.client) return;

  const _paq = (window as any)._paq || [];
  (window as any)._paq = _paq;

  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);

  const u = "https://nicolasdeza.matomo.cloud/";
  _paq.push(["setTrackerUrl", u + "matomo.php"]);
  _paq.push(["setSiteId", "1"]);

  const g = document.createElement("script");
  g.async = true;
  g.src = u + "matomo.js";

  document.head.appendChild(g);
});
