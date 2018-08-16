const tag = (partes, ...valores) => {
  console.log(partes)
  console.log(valores)
  return 'Outra string'
}

const nome = 'Angelo'
const sobrenome = 'Medeiros'

// console.log( tag `${nome} ${sobrenome}` )
tag `${nome} ${sobrenome}` // => retorno
// [ '', ' ', '' ]
// [ 'Angelo', 'Medeiros' ]

const tag2 = (...valores) => {
  console.log(valores)
}

tag2 `${nome} ${sobrenome}` // => retorno
// [ [ '', ' ', '' ], 'Angelo', 'Medeiros' ]