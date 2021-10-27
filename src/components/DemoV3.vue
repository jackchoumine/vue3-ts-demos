<!--
 * @Description :
 * @Date        : 2021-10-27 21:57:25 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-10-27 22:12:25 +0800
 * @LastEditors : JackChou
-->
<template>
  <div>
    <h1>vue3 的语法</h1>
    <p>count:{{ count }}</p>
    <p>doubleCount:{{ doubleCount }}</p>
    <button @click="onClick">+1</button>
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue'
export default {
  name: 'DemoV3',
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    onMounted(() => {
      setTimeout(() => {
        count.value = 20
      }, 3000)
    })
    function onClick() {
      count.value++
    }
    return {
      count,
      doubleCount,
      onClick,
    }
  },
}
</script>
