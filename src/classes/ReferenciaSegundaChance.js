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
    this.ListaCompleta.forEach((pagina) => {
      pagina.zerarRef();
    })
  }

  alterarRefPorIndex(indexRef) {
    this.ListaCompleta[indexRef].alterarRef();
  }

  referenciarEspacoFila(indexParaReferenciar) {
    const referencia = new Pagina(indexParaReferenciar, 1);
    this.ListaCompleta.push(referencia);
  }

  referenciarSemEspacoFila(nomePagina) {
    let achouMenor = false;
    const novaLista = this.ListaCompleta.slice();

    this.ListaCompleta.some((pagina) => {
      if (pagina.isRef === 0) {
        novaLista.shift();
        achouMenor = true;
        return true;
      } else {
        novaLista.shift();
        const data = new Pagina(pagina.index, 0);
        novaLista.push(data);
      }
    });

    if (!achouMenor) {
      novaLista.shift();
    }

    const novaPagina = new Pagina(nomePagina, 1);
    this.ListaCompleta = novaLista;
    this.ListaCompleta.push(novaPagina);
  }
}

export default ReferenciaSegundaChance;