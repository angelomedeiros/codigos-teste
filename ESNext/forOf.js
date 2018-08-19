// ForOf e ForIn

// ==================================
// ForOf sobre String
console.log('\n==== ForOf e ForIn ====')
console.log('\nForOf sobre string\n')

for (let letra of 'Angelo') {
  console.log(letra)
}

// ==================================
// ForOf e ForIn sobre Array

console.log('\nForIn sobre array: [\'js\', \'ts\', \'java\', \'python\']\n')
const linguagens = ['js', 'ts', 'java', 'python']

for (let linguagem in linguagens) {
  console.log(linguagem) // 0, 1, 2, 3
}

console.log('\nForOf sobre array: [\'js\', \'ts\', \'java\', \'python\']\n')

for (let linguagem of linguagens) {
  console.log(linguagem) // 'js', 'ts', 'java', 'python'
}

// ==================================
// ForOf e ForIn sobre Map

console.log('\nUsando o Map()\n')
console.log('ForOf sobre Map...')

const linguagensMap = new Map([
  ['JavaScript', { fortementeTipada: false, dinamicaOrEstatica: 'dinamica' }],
  ['Python', { fortementeTipada: true, dinamicaOrEstatica: 'dinamica' }],
  ['Java', { fortementeTipada: true, dinamicaOrEstatica: 'estatica' }],
])
console.log(linguagensMap)

console.log('\nExibindo os elementos do Map\n')
for (let linguagem of linguagensMap) {
  console.log(linguagem) // Exibe os elementos com key:value
}

console.log('\nExibindo as chaves dos elementos\n')
for (let linguagem of linguagensMap.keys()) {
  console.log(linguagem) // Exibe as keys dos elementos
}

console.log('\nExibindo os valores dos elementos\n')
for (let linguagem of linguagensMap.values()) {
  console.log(linguagem) // Exibe os valores dos elementos
}

console.log('\nExibindo as entries (key:value) dos elementos\n')
for (let [chave, valor] of linguagensMap.entries()) {
  // console.log(chave, valor) // Ou
  console.log(`Chave: ${chave}, fortementeTipada: ${valor.fortementeTipada}`)
}

// ==================================
// ForOf e ForIn sobre Set

console.log('\nUsando o Set()\n')
console.log('ForOf sobre Set...')

const linguagensSet = new Set([
  ['JavaScript', { fortementeTipada: false, dinamicaOrEstatica: 'dinamica' }],
  ['Python', { fortementeTipada: true, dinamicaOrEstatica: 'dinamica' }],
  ['Java', { fortementeTipada: true, dinamicaOrEstatica: 'estatica' }],
])

console.log(linguagensSet)

console.log('\nExibindo os elementos do Set\n')
for (let linguagem of linguagensSet) {
  linguagem.forEach((element) => console.log(element))
}
