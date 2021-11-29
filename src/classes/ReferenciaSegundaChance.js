class Pagina {
  constructor (nome, ref) {
    this.index = nome;
    this.isRef = ref;
  }

  zerarRef () {
    this.isRef = 0;
  }

  alterarRef () {
    if (this.isRef === 1) {
      this.isRef = 0;
    }else if (this.isRef === 0) {
      this.isRef = 1;
    }
  }
}


class ReferenciaSegundaChance {
  constructor() {
    this.ListaCompleta = [];
  }

  zerar() {
    if (this.ListaCompleta.length > 0) {
      for (let indexRef = 0; indexRef < this.ListaCompleta.length ; indexRef++) {
        this.ListaCompleta[indexRef].zerarRef()
      }
    }
  }

  alterarRefPorIndex(indexRef) {
    this.ListaCompleta[indexRef].alterarRef();
  }

  verificaIgualdade() {
    let total = 0;
    if (this.ListaCompleta.length > 0) {
      for (let indexRef = 0; indexRef < this.ListaCompleta.length ; indexRef++) {
        if (this.ListaCompleta[indexRef].isRef === 1) {
          total += 1;
        }
      }
    }
    return total === this.ListaCompleta.length;
  }

  referenciarEspacoFila(indexParaReferenciar) {
    const referencia = new Pagina(indexParaReferenciar, 1);
    this.ListaCompleta.push(referencia);
  }

  referenciarSemEspacoFila(indexParaReferenciar) {
    let controleDeTroca = 0;
    if (this.verificaIgualdade()) {
      this.zerar();
    }
    const NovaListaDereferencias = [];
    const finalDaFila = [];

    this.ListaCompleta.forEach((pagina) => {
      if (controleDeTroca === 0) {
        if (pagina.isRef === 0) {
          controleDeTroca += 1; 
        } else  {
          const data = new Pagina(pagina.index, 0);  
          finalDaFila.push(data);
        }
      } else if (controleDeTroca === 1) {
          NovaListaDereferencias.push(pagina);
      }
    });

    const data = new Pagina(indexParaReferenciar, 1);
    const listFinalConcat = NovaListaDereferencias.concat(finalDaFila);
    listFinalConcat.push(data);
    this.ListaCompleta = listFinalConcat;
  }
}

export default ReferenciaSegundaChance;