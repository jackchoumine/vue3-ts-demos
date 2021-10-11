/*
 * @Description : 计数器hooks
 * @Date        : 2021-10-07 16:08:36 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-10-07 17:09:56 +0800
 * @LastEditors : JackChou
 */
import { computed, reactive, toRefs } from 'vue'
type dataPropsType = {
  count: number
  doubleCount: number
  increase: () => void
}

function useCount() {
  const dataProps: dataPropsType = reactive({
    count: 0,
    increase: () => {
      dataProps.count++
    },
    doubleCount: computed(() => dataProps.count * 2),
  })
  return {
    ...toRefs(dataProps), // 不加 increase，在模板中使用 counter.increase.value
    // increase: dataProps.increase, // 结构出 increase 在模板中使用 counter.increase
  }
}

export { useCount }
