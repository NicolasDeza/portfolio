<script setup lang="ts">
  import { useRouter } from 'vue-router'

const router = useRouter()

router.afterEach(() => {
  if (import.meta.client && (window as any)._paq) {
    ;(window as any)._paq.push(['trackPageView'])
  }
})
</script>

<template>
  <NuxtLoadingIndicator
    color="#FFFFFF"
    :height="2"
    :duration="2500"
    :throttle="0"
  />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
