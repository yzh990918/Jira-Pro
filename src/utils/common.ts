export const isFalsy = (value: unknown) => (value === 0 ? false : !value)
export const cleanObject = (object: object) => {
  // Object.assign({}, object)
  const result = { ...object }
  Object.keys(result).forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const value = result[key]
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (isFalsy(value)) delete result[key]
  })
  return result
}
