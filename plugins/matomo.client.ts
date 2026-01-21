export default defineNuxtPlugin(() => {
  if (process.server) return;

  const _paq = (window as any)._paq || [];
  (window as any)._paq = _paq;

  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);

  const u = "https://nicolasdeza.matomo.cloud/";
  _paq.push(["setTrackerUrl", u + "matomo.php"]);
  _paq.push(["setSiteId", "1"]);

  const d = document;
  const g = d.createElement("script");
  const s = d.getElementsByTagName("script")[0];

  g.async = true;
  g.src = u + "matomo.js";
  s.parentNode?.insertBefore(g, s);
});
