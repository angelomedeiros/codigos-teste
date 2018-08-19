function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 3000,
  desc: 0.10,
  getPreco
}

global.preco = 3000
global.desc  = 0.5
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 5000, desc: 0.1 }
console.log(getPreco.call(carro)) // O primeiro parametro é o contexto de execução
console.log(getPreco.call(global))

console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.1, 'U$')) // Os outros paramentros são os parametros da função sendo chamada
console.log(getPreco.apply(carro, [0.1, 'BRL'])) // O primeiro parametro é o contexto de execução e o segundo é um array com os parametros da função sendo executada