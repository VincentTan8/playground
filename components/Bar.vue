<script lang="ts" setup>
  const {title} = storeToRefs(useMyGlobalStore())
</script>

<template>
  <div>
    <!-- testing stores with pinia using this title -->
    <h1> Your name is {{ title }} </h1>
  </div>
</template>
