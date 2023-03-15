const median = (arr) => {
    const sorted = arr.sort()
    const middle = Math.floor(sorted.length / 2)
    return sorted.length % 2 === 0
     ? (sorted[middle - 1] + sorted[middle]) / 2
     : sorted[middle]
   }
   
   const oddArr = [3, 1, 4, 2, 5]
   console.log(median(oddArr)) // 3
   
   const evenArr = [1, 2, 5, 6]
   console.log(median(evenArr)) // 3.5