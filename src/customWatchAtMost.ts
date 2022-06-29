// 使用watch的版本
import {ref, unref, watch, nextTick} from 'vue'
export function watchAtMost<Immediate extends Readonly<boolean> = false>(
  source: any,
  cb: any,
  options: any,
): any {
  const {
    count,
    ...watchOptions
  } = options

  const current = ref(0)

  const stop = watch(
    source,
    (...args) => {
      current.value += 1
      if (current.value >= unref(count))
        nextTick(() => stop())

      cb(...args)
    },
    watchOptions,
  )

  return { count: current, stop }
}
