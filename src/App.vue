<script setup lang="ts">
import { watchAtMost  } from '@vueuse/core'
import {ref} from 'vue'

const source = ref(0)

watchAtMost(
  source,
  (value) => {
    console.log('变化了', value)
  },
  {
    count: 4
  }
)

const clickedFn = () => {
  source.value ++
}

</script>

<template>
 <div>{{source}}</div>
  <button @click="clickedFn">
    点击按钮
  </button>
</template>