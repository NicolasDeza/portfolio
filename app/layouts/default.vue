<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col bg-[#171717] text-white">
    <!-- Header fixed & transparent -->
    <Header />

    <!-- Canvas / wrapper visuel -->
    <div
      class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 sm:border-x border-white/10 pt-10 flex-1"
    >
      <main class="min-h-full">
        <slot />
      </main>
    </div>
  </div>
</template>
