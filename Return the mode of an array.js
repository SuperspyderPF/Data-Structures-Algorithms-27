const mode = (arr) => {
    const counts = arr.reduce(
     (acc, curr) => ({ ...acc, [curr]: (acc[curr] || 0) + 1 }),
     {}
       )
       
    const maxCount = Math.max(...Object.values(counts))
   
    return Object.keys(counts)
     .filter((key) => counts[key] === maxCount)
     .map(Number)
   }
   
   const arr1 = [1, 2, 3, 2, 4, 2, 5]
   console.log(mode(arr1)) // [2]
   
   const arr2 = [1, 2, 3, 2, 4, 4, 5]
   console.log(mode(arr2)) // [2, 4]