/*
 * @Description : 跟踪鼠标玩位置
 * @Date        : 2021-10-05 11:10:36 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-10-05 11:13:56 +0800
 * @LastEditors : JackChou
 */

import { onMounted, onUnmounted, ref } from 'vue'

function useMousePosition() {
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
  return { positionX, positionY }
}

export default useMousePosition
