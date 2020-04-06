function selectionSort(arr) {
  // return arr.sort((a, b) => a > b ? 1 : -1)

  for (let i = 0; i < arr.length; i++) {
    let minNum = Math.min(...arr.slice(i))

    let minNumIndex = arr.indexOf(minNum)
    let switcher = arr[i]
    arr[i] = minNum
    arr[minNumIndex] = switcher

  }
  return arr



}
