import { defineStore } from 'pinia'

export const useMyGlobalStore = defineStore("Global", () => {
  //define state
  const title = ref("");
  //define getter
  const greetTitle = computed(() => {
    if(!title.value) return "Henlo";
    //return `Hello ${title.value}`;
    return "Hello " + title.value;
  })
  //define actions
  const sayHello = (name: string = "stranger") => {
    alert(`Hello ${name}`)
  }
  
  return { title, greetTitle, sayHello}
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMyGlobalStore, import.meta.hot))
}