Array.prototype.reduce2 = function(callback, valorIncial) {
  
  let indiceInical = 0
  let acumulador = 0

  if ( valorIncial === 0 || !!valorIncial) {
    indiceInical = 0
    acumulador = valorIncial
  } else {
    indiceInical = 1
    acumulador = this[0]
  }

  for (let i = indiceInical; i < this.length ; i++ ) {
    acumulador = callback(acumulador, this[i], i, this)
  }

  return acumulador

}

const mult = (total, valor) => total * valor
const nums = [1, 2, 3, 4, 5]

const resultado = nums.reduce2(mult) // (OK) Espera 120, obteve 120
const resultado2 = nums.reduce2(mult, 2) // (OK) Espera 240, obteve 240
const resultado3 = nums.reduce2(mult, 0) // (Ok) Espera 0, obteve 0
console.log(resultado, resultado2, resultado3)

