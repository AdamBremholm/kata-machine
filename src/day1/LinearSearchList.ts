const res = linear_search([2,3,4], 3)
console.log(res)

export default function linear_search(
  haystack: number[],
  needle: number,
): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle) {
      return true
    }
  }
  return false
}
