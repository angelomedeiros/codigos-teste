const array          = [ 1, 1, 2, 3, 5 ]
const spreadComArray = [ 0, ...array, 8, 13, 21 ] 

console.log(spreadComArray) // [ 0, 1, 1, 2, 3, 5, 8, 13, 21 ]

const objeto          = { nome: 'Angelo Medeiros', email: 'angelo@email.com' }
const spreadComObjeto = { ...objeto, ativo: true, celular: 83986067967 }

console.log(spreadComObjeto) // => Saída
// { nome: 'Angelo Medeiros',
// email: 'angelo@email.com',
// ativo: true,
// celular: 83986067967 }

function chico (x, y, z) {
  console.log(x + y + z)
}

const valores = [1, 2, 4]

chico(...valores)