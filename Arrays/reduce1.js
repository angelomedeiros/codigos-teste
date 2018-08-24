const usuarios = [
  { nome: 'Angelo Medeiros', salario: 6000 },
  { nome: 'Thalita Oliveira', salario: 9000 },
  { nome: 'Lucas Figueiredo', salario: 8000 },
  { nome: 'Rodrigo Mouzinho', salario: 7000 }
]

const salario  = objeto => objeto.salario
const salarios = usuarios.map(salario)

console.log(salarios)

const somaSalarios = (total, valorAtual) => total + valorAtual
const pagamentosSalarios = salarios.reduce(somaSalarios) // Segundo parâmetro é opcional e por padrão seu valor é zerp
const pagamentosSalariosMaisImpostos = salarios.reduce(somaSalarios, 4000)

console.log(pagamentosSalarios)
console.log(pagamentosSalariosMaisImpostos)
