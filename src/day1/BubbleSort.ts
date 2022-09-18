export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
  }
}
// export function bubble_sort_home_made(arr: number[]): void {
//   let len = arr.length
//   let swapped = false
//   do {
//     swapped = false
//     for (let i = 0; i < len - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//         swapped = true
//       }
//     }
//     --len
//   } while (swapped)
// }
