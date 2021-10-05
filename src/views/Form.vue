<template>
  <div>
    <h1>form</h1>
    <h2>reactive</h2>
    <p>count:{{ count }}</p>
    <p>doubleCount:{{ doubleCount }}</p>
    <p><button @click="increase">加一</button></p>
    <p>X:{{ positionX }},Y:{{ positionY }}</p>
  </div>
</template>
<script lang="ts">
import { ref, reactive, watch, computed, toRefs, onMounted, onUnmounted } from 'vue'
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
    const positionX = ref(0)
    const positionY = ref(0)
    const updateMousePosition = (event: MouseEvent) => {
      positionX.value = event.pageX
      positionY.value = event.pageY
    }
    onMounted(() => {
      document.addEventListener('click', updateMousePosition)
    })
    onUnmounted(() => {
      document.removeEventListener('click', updateMousePosition)
    })
    return {
      ...toRefs(dataProps),
      positionX,
      positionY,
    }
  },
}
</script>
<style scoped lang="scss"></style>
