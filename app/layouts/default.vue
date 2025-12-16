<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col bg-[#171717] text-white relative">
    <!-- Lignes horizontales du quadrillage full width -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <span class="h-line top-[33.33vh]" />
      <span class="h-line top-[66.66vh]" />
    </div>

    <!-- Header fixed & transparent -->
    <Header />

    <!-- Canvas / Wrapper -->
    <div
      class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 sm:border-x border-white/10 pt-10 flex-1 relative z-10"
    >
      <main class="min-h-full">
        <slot />
      </main>
    </div>
  </div>
</template>
