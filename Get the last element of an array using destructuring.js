const last = (arr) => [...arr].pop()

const people = [
 { name: "Alice", age: 21 },
 { name: "Bob", age: 22 },
 { name: "Charlie", age: 21 },
 { name: "David", age: 23 },
 { name: "Eve", age: 22 }
]

console.log(last(people)) // { name: "Eve", age: 22 }