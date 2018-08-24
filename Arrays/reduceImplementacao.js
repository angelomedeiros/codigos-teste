Array.prototype.reduce2 = function(callback) {
  console.log(this)

  let acumulador = this[0]

  for (let i = 1; i < this.length ; i++ ) {
    acumulador = callback(acumulador, this[i], i, this)
  }

  return acumulador

}

const mult = (total, valor) => total * valor
const nums = [1, 2, 3, 4, 5]

const resultado = nums.reduce2(mult)
console.log(resultado)