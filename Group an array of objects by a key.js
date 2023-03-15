const groupBy = (arr, key) =>
 arr.reduce(
  (acc, obj) => ({ ...acc, [obj[key]]: [...(acc[obj[key]] || []), obj] }),
  {}
 )

const people = [
 { name: "Alice", age: 21 },
 { name: "Bob", age: 22 },
 { name: "Charlie", age: 21 },
 { name: "David", age: 23 },
 { name: "Eve", age: 22 }
]

console.log(groupBy(people, "age"))

/* Output:
{
 21: [
  { name: "Alice", age: 21 },
  { name: "Charlie", age: 21 }
 ],
 22: [
  { name: "Bob", age: 22 },
  { name: "Eve", age: 22 }
 ],
 23: [{ name: "David", age: 23 }]
}
*/