<template>
  <div>
    <h1>form</h1>
    <h2>reactive</h2>
    <p>count:{{ count }}</p>
    <p>doubleCount:{{ doubleCount }}</p>
    <p><button @click="increase">加一</button></p>
    <p>X:{{ mousePosition.x }},Y:{{ mousePosition.y }}</p>
  </div>
</template>
<script lang="ts">
import { ref, reactive, watch, computed, toRefs, onMounted, onUnmounted } from 'vue'
import { useMousePosition } from '../hooks'
type dataPropsType = {
  count: number
  doubleCount: number
  increase: () => void
}
export default {
  name: 'Form',
  components: {},
  setup(props, { emit, attrs, slots }) {
    const dataProps: dataPropsType = reactive({
      count: 0,
      increase: () => dataProps.count++,
      doubleCount: computed(() => dataProps.count * 2),
    })
    const mousePosition = useMousePosition()
    console.log(mousePosition)
    return {
      ...toRefs(dataProps),
      mousePosition,
    }
  },
}
</script>
<style scoped lang="scss"></style>
