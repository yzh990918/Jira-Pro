// 仅在初始化执行一次
export const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.()
  }, [])
}
