const math2Dot = (newN: number) => {
  return Math.round(newN*100)/100
}

const formatSize = (size: number): string => {
  let newN = size / 1024
  if (newN > 1024) {
    newN = newN / 1024
    if (newN > 1024) {
      newN = newN / 1024
      if (newN > 1024) {
        return `${math2Dot(newN)}T`
      }
      return `${math2Dot(newN)}G`
    }
    return `${math2Dot(newN)}M`
  }
  return `${math2Dot(newN)}K`
}

export default {
  formatSize
}