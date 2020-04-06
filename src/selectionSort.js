function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minNum = i
    for (let j = 1 + i; j < arr.length; j++) {
      if (arr[minNum] > arr[j] ) {
        minNum = j
      }
    }
      if (minNum !== i) {
        let tmp = arr[i]
        arr[i] = arr[minNum]
        arr[minNum] = tmp
      }
    
  }
  return arr
}
