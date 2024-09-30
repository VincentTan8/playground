<script setup lang="ts">
import Bar from '~/components/Bar.vue';
const {title, greetTitle} = storeToRefs(useMyGlobalStore())
const route = useRoute()
const woaClick = () => console.log('nice click') 
</script>

<template>
  <div>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
    <input 
      type="text" 
      id="title" 
      v-model="title" 
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      placeholder="Title" 
      required 
    />
    <Bar />
    <p>{{ greetTitle }}</p>
    <div class="flex space-x-1">
      <UButton
        class="rounded px-1 text-gray-900 bg-yellow-500 hover:bg-yellow-600 dark:text-white focus:outline-none focus:ring"
        @click="useMyGlobalStore().sayHello(title)"
      >
      {{$t('UButton Greet Me')}}
      </UButton>

      <button class="rounded-full px-6 py-4 text-gray-900 bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 dark:text-white">
      {{$t('Mash Me normal button')}}
      </button>

      <NuxtLink to="/about"> 
        <Button :onClick="()=>{}" classType="">{{$t('ABOUT nuxtlink with button')}}</Button> 
      </NuxtLink>

      <Button :onClick="() => useMyGlobalStore().sayHello(title)" classType="base"> {{ $t('Custom Button')}} </Button>
    </div>


    <div>
      <p>{{ $t('welcome') }}</p>
    </div>


  </div>
</template>
