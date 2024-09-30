<script lang="ts" setup>
import DarkModeButton from '~/components/DarkModeButton.vue';
const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <div>
    <header class="shadow-sm bg-yellow-700 text-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/">{{$t('Home')}}</NuxtLink>
        <ul class="flex gap-4">
          <NuxtLink to="/about">{{$t('About')}}</NuxtLink>
          <NuxtLink to="/courses">{{$t('Courses')}}</NuxtLink>
          <DarkModeButton />

            <Button v-for="locale in availableLocales" :onClick="() => setLocale(locale.code)" classType="small">
              {{ locale.name }} 
            </Button>
        </ul>
      </nav>
    </header>

    <!-- output page -->
    <div class="container mx-auto p-4">
      <div class="flex gap-2">
        <Button :onClick="() => setLocale('en')" classType="small">en</Button>
        <Button :onClick="() => setLocale('zh')" classType="small">zh</Button>
      </div>
      <slot />
    </div>
  </div>
</template>

