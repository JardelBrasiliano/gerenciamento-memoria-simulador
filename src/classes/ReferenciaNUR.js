class Pagina {
  constructor (nome, typeRef) {
    this.index = nome;
    this.isRefModificada = typeRef === 'W' ? 1 : 0;
    this.isRefAcessada = 1;
  }

  get classe () {
    return this.calcularClasse();
  }

  calcularClasse () {
    let classeAtual = 0;
    if (this.isRefAcessada === 0 && this.isRefModificada === 0){ classeAtual = 0}
    if (this.isRefAcessada === 0 && this.isRefModificada === 1){ classeAtual = 1}
    if (this.isRefAcessada === 1 && this.isRefModificada === 0){ classeAtual = 2}
    if (this.isRefAcessada === 1 && this.isRefModificada === 1){ classeAtual = 3}

    return classeAtual;
  }

  zerarRef () {
    this.isRefAcessada = 0;
  }

  alterarRef (typeRef) {
    this.isRefModificada = typeRef === 'W' ? 1 : this.isRefModificada;
    this.isRefAcessada = 1;
  }
}

class ReferenciaNUR {
  constructor() {
    this.ListaCompleta = [];
    this.classesRef = {
      index: -1,
      classe: 1000000,
    };
  };

  calcularClasse() {
    this.classesRef = {
      index: -1,
      classe: 5,
    };

    this.ListaCompleta.some((pagina, index) => {
      if (pagina.classe < this.classesRef.classe) {
        this.classesRef = {
          index: index,
          classe: pagina.classe,
        }
      }
      if (pagina.classe === 0) {
        return true;
      }
    });

    return this.classesRef;
  }

  zerar() {
    this.ListaCompleta.forEach((pagina) => {
      pagina.zerarRef();
    })
  }

  alterarRefPorIndex(indexRef, typeRef) {
    this.ListaCompleta[indexRef].alterarRef(typeRef);
  }

  referenciarEspacoFila(indexParaReferenciar, type) {
    const referencia = new Pagina(indexParaReferenciar, type);
    this.ListaCompleta.push(referencia);
  }

  referenciarSemEspacoFila(indexParaReferenciar, typeRef) {
    const substituir = this.classesRef.index;
    
    const estruturaPagina = new Pagina(indexParaReferenciar, typeRef);

    this.ListaCompleta.splice(substituir, 1);
    this.ListaCompleta.push(estruturaPagina);
  }
}

export default ReferenciaNUR;