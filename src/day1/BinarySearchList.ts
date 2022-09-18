export default function bs_list(haystack: number[], needle: number): boolean {
  return search(haystack, 0, haystack.length - 1, needle)
}

function search(
  haystack: number[],
  lo: number,
  hi: number,
  needle: number,
): boolean {
  const m = Math.floor(lo + (hi - lo) / 2)
  const v = haystack[m]
  if (v === needle) {
    return true
  }
  if (lo >= hi) {
    return false
  }
  if (needle < v) {
    return search(haystack, lo, m, needle)
  }
  if (needle > v) {
    return search(haystack, m + 1, hi, needle)
  }
  return false
}
