/*
 * @Description : 跟踪鼠标玩位置
 * @Date        : 2021-10-05 11:10:36 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-10-05 20:54:27 +0800
 * @LastEditors : JackChou
 */
import { onMounted, onUnmounted, ref, reactive, toRefs } from 'vue'

function useMousePosition() {
  const position = reactive({ x: 0, y: 0 })
  // const positionX = ref(0)
  // const positionY = ref(0)
  const updateMousePosition = (event: MouseEvent) => {
    // positionX.value = event.pageX
    // positionY.value = event.pageY
    Object.assign(position, { x: event.pageX, y: event.pageY })
  }
  onMounted(() => {
    document.addEventListener('click', updateMousePosition)
  })
  onUnmounted(() => {
    document.removeEventListener('click', updateMousePosition)
  })
  return { ...toRefs(position) }
}

export { useMousePosition }
