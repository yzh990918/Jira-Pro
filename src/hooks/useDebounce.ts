/**
 * useDebounce Value
 * @param value any Type
 * @param delay delay
 * @returns debounced Value
 */
export const useDebounce = <V>(value: V, delay = 200): V => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    // 当 value 或 delay 发生变化时创建定时器，每次在上一个副作用执行完清理定时器
    const timer = setTimeout(() => { setDebounceValue(value) }, delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debounceValue
}
