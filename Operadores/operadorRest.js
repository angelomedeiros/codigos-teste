const funcaoComRestArray = ( ...valores ) => {
  console.log(valores)
}

const objeto1 = { nome: 'Angelo Medeiros', email: 'angelo@email.com' }
const objeto2 = { ativado: true, celular: 929289129 }

funcaoComRestArray(1, 2, 3, 4)
funcaoComRestArray(objeto1, objeto2)