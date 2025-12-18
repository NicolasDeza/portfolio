<!-- components/projects/DesktopFrame.vue -->
<script setup lang="ts">
defineProps<{
  src: string;
  alt?: string;
  showBar?: boolean;
}>();
</script>

<template>
  <div class="relative">
    <div
      class="overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
    >
      <!-- Barre navigateur  -->
      <div
        v-if="showBar"
        class="h-9 flex items-center gap-2 px-4 border-b border-white/5 bg-black/40"
      >
        <span class="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span class="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span class="w-2.5 h-2.5 rounded-full bg-white/20" />
      </div>

      <!-- Screenshot -->
      <img
        :src="src"
        :alt="alt"
        class="block w-full object-cover"
        loading="lazy"
      />
    </div>
  </div>
</template>
