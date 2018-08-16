import Lancamento from './Lancamento'

class CicloFinanceiro extends Lancamento {

  public mes
  public ano
  public lancamentos

  constructor (mes, ano, nome, valor) {
    super(nome, valor)
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }

  addLancamentos (...lancamentos) {
    lancamentos.forEach(l => 
      this.lancamentos.push(l)
    )
  }

  sumario () {
    let valorConsolidado = 0
    this.lancamentos.forEach( l => {
      valorConsolidado += l.valor
    })
    return valorConsolidado
  }

}

// const salario     = new Lancamento('Salário', 10000)
// const contaLux    = new Lancamento('Conta de Luz', -200)
// const faturaInter = new Lancamento('Fatura Inter', -500)

// console.log(salario)
// console.log(contaLux)

const agosto2018 = new CicloFinanceiro(8, 2018, 'Salário', 10000)
// agosto2018.addLancamentos(salario, contaLux)
// console.log(agosto2018.sumario())
agosto2018.print()

const setembro2018 = new CicloFinanceiro(9, 2018,'Conta de Luz', -200)
setembro2018.print()
// setembro2018.addLancamentos(salario, faturaInter)
// console.log(setembro2018.sumario())