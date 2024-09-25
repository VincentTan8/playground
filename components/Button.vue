<script lang="ts" setup>
//useTemplateRef grants access to template elements from this segment
  import { useTemplateRef, ref } from 'vue'
  const newClass = ref(" ")
  const myButton = useTemplateRef('myButton')

  const props = defineProps({
    classType: {
      type: String,
      required: false
    },
    onClick: {
      type: Function,
      required: true
    }

  });

  //needs to be transferred to a custom style sheet
  switch (props.classType) {
    case 'base': 
      newClass.value = "rounded px-6 py-4 text-gray-900 bg-yellow-500 lowercase hover:bg-yellow-600 active:bg-yellow-700 dark:text-white focus:outline-none focus:ring";
      break;
    default:
      newClass.value = "rounded-full text-white bg-yellow-500 uppercase py-4 px-6 font-semibold text-sm tracking-wider";
      break;
  }

  const handleClick = () => {
    props.onClick()
    myButton.value?.blur
  }

</script>

<template>
  <button
    :class = "newClass"
    @click = "handleClick"
    ref = "myButton"
  >
    <slot></slot> <!-- This lets you put different content inside the button -->
  </button>
</template>

<style scoped>
  
</style>