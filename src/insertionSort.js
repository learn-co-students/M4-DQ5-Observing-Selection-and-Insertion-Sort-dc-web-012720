function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]
    let previousElement = i - 1
    while (previousElement >= 0 && arr[previousElement] > currentValue) {
      arr[previousElement + 1] = arr[previousElement]
      previousElement--
    }
    arr[previousElement + 1] = currentValue
  }
  return arr
}
