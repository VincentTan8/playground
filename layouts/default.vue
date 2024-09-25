<script lang="ts" setup>
import DarkModeButton from '~/components/DarkModeButton.vue';

</script>

<template>
  <div>
    <header class="shadow-sm bg-yellow-700 text-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/">Home</NuxtLink>
        <ul class="flex gap-4">
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/courses">Courses</NuxtLink>
          <DarkModeButton />
        </ul>
      </nav>
    </header>

    <!-- output page -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

