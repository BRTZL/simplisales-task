export function flattenObject(obj: any) {
  let result: {
    [key: string]: any
  } = {}

  for (const i in obj) {
    if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
      const temp = flattenObject(obj[i])
      for (const j in temp) {
        result[i + '.' + j] = temp[j]
      }
    } else {
      result[i] = obj[i]
    }
  }
  return result
}
