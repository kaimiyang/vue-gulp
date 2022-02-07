const formatSize = (size: number) => {
  let newN = size / 1024
  if (newN > 1024) {
    newN = newN / 1024
    if (newN > 1024) {
      newN = newN / 1024
      if (newN > 1024) {
        return [newN, 'T']
      }
      return [newN, 'G']
    }
    return [newN, 'M']
  }
  return [newN, 'K']
}

export default {
  formatSize
}