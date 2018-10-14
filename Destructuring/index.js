const obj =  {a:1, b:2, c:3, d:4, chico() { console.log('EXu!') }}

const {'*': all, ...rest} = obj

// console.log(a)
// console.log(b)
console.log(all)
console.log(rest)