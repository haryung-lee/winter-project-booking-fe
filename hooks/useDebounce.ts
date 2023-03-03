// export function useDebounce<F extends (...args: any[]) => any>(
//   func: F,
//   delay: number
// ) {
//   let timeout: NodeJS.Timeout
//   return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
//     const context = this
//     clearTimeout(timeout)
//     timeout = setTimeout(() => func.apply(context, args), delay)
//   }
// }

import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value])

  return debouncedValue
}
