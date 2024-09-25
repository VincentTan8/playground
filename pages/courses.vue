<template>
  <div>
    <h1>Courses</h1>
    <p>Hello {{ title }}</p>
    <button class="rounded bg-black text-white px-1"@click="useMyGlobalStore().sayHello(title)">Greet Me</button>
  </div>
</template>

<script lang="ts" setup>
const {title, greetTitle} = storeToRefs(useMyGlobalStore())
</script>

<style>

</style>