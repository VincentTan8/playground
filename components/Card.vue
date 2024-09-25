<script lang="ts" setup>
  const props = defineProps({
    tl: {
      type: String,
      required: true
    },
    m: {
      type: String,
      required: true
    },
    br: {
      type: String,
      required: true
    },
    red: {
      type: Boolean,
      required: false
    },
    index: {
      type: Number,
      required: false
    },
  });
  // const red = props.red
  // const br = props.br

  // defineExpose({
  //   red,
  //   br
  // })
</script>

<template>
  <div>
    <div class="card" :class="{ isRed: red }" :style="'z-index:' + index" ref="cardItem" >
      <div class="tl">{{ tl }}</div>
      <div class="m">{{ m }}</div>
      <div class="br">{{ br }}</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 2px 2px 2px 2px #00000077;
  border-radius: 5px;
  background-color: #ffffff;
  width: 120px;
  height: 150px;

  display: grid;
  grid-template-columns: 30px 60px 30px;
  grid-template-rows: 35px 80px 35px;
  align-items: center;
  justify-items: center;

  position: relative; 
}

.tl {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding: 4px;
  font-size: 0.8rem;
}

.m {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  font-size: 60px;
}

.br {
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  padding: 4px;
  font-size: 0.8rem;
  transform: rotate(180deg);
}

.isRed {
  color: #c50000;
}

</style>