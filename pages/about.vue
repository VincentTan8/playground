<script lang="ts" setup>
  import { useTemplateRef, ref } from 'vue'
  const route = useRoute()

  const itemRefs = useTemplateRef('card')
  const list = ref([
    ["A♥", "♥", "A♥", "red"],
    ["K♠", "♠", "K♠"],
    ["Q♦", "♦", "Q♦", "red"],
    ["J♣", "♣", "J♣"],
    ["10♥","♥","10♥", "red"]
  ])
</script>

<template>
  <div>
    <h1>This is About</h1>
    <p>Current route: {{ route.path }}</p>
  </div>
  <div class="row">
    <Card 
      v-for="(cardText, index) in list" 
      :tl="cardText[0]" 
      :m="cardText[1]" 
      :br="cardText[2]" 
      ref="card" 
      :red = "cardText[3] === 'red'"
      :index = "list.length - index"
    />
  </div>
</template>

<style>
.row {
  margin:20px;
  display:  grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(5, 22px);
  background-color: #fff888;
  border-radius: 5px;
  transition: grid-template-columns 0.5s;
  
  justify-content: end; 
  justify-items: end;
}

.row:hover {
  grid-template-columns: repeat(5, 120px);
}
</style>