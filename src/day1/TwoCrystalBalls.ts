export default function two_crystal_balls(breaks: boolean[]): number {
  const sq = Math.floor(Math.sqrt(breaks.length))
  const res = walk(breaks, sq)
  for (let i = res; i < breaks.length; i++) {
    const v = breaks[i];
    if(v){
      return i
    }
  }
  return -1

}

function walk(haystack: boolean[], jmpAmount: number): number {
  let j = jmpAmount
  for (let i = 0; i < haystack.length; i++) {
    if (i * jmpAmount < haystack.length) {
      const v = haystack[i * jmpAmount]
      if (v) {
        return j
      }
      else {
        j = i * jmpAmount
      }
    }
  }
  return j
}
