class Lancamento {
  public nome
  public valor

  constructor (nome, valor) {
    this.nome = nome
    this.valor = valor
  }

  print (): void {
    console.log(this.nome, this.valor)
  }
}

export default Lancamento