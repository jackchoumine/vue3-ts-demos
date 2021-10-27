/*
 * @Description :
 * @Date        : 2021-10-27 23:44:26 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-10-27 23:57:25 +0800
 * @LastEditors : JackChou
 */
import { watch, ref, Ref } from 'vue'

declare type MaybeRef<T = unknown> = Ref<T> | T

export function useTitle(newTitle: MaybeRef<string>) {
  const title = ref(newTitle || document.title) // NOTE 技巧：使用已有的ref
  watch(
    title,
    (_title) => {
      // NOTE 技巧：同步更新 title
      if (_title) document.title = _title
    },
    { immediate: true }
  )
  return { title }
}
