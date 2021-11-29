class Pagina {
  constructor (nome, typeRef) {
    this.index = nome;
    this.isRefModificada = typeRef === 'W' ? 1 : 0;
    this.isRefAcessada = 1;
  }

  zerarRef () {
    this.isRefAcessada = 0;
  }

  alterarRef (typeRef) {
    this.isRefModificada = typeRef === 'W' ? 1 : this.isRefModificada,
    this.isRefAcessada = typeRef === 'W' ? 1 : 1
  }
}

class ReferenciaNUR {
  constructor() {
    this.ListaCompleta = [];
    this.classesRef = {
      index: -1,
      classe: 1000000,
    }
  }
  
  calcularClasse() {
    this.classesRef = {
      index: -1,
      classe: 5,
    };

    this.ListaCompleta.forEach((pagina) => {
      let classeAtual = 0;
      if (pagina.isRefAcessada === 0 && pagina.isRefModificada === 0){ classeAtual = 0}
      if (pagina.isRefAcessada === 0 && pagina.isRefModificada === 1){ classeAtual = 1}
      if (pagina.isRefAcessada === 1 && pagina.isRefModificada === 0){ classeAtual = 2}
      if (pagina.isRefAcessada === 1 && pagina.isRefModificada === 1){ classeAtual = 3}
  
      if (classeAtual < this.classesRef.classe) {
        this.classesRef = {
          index: pagina.index,
          classe: classeAtual,
        }
      }
    });

    return this.classesRef;
  }

  zerar() {
    if (this.ListaCompleta.length > 0) {
      for (let indexRef = 0; indexRef < this.ListaCompleta.length ; indexRef++) {
        this.ListaCompleta[indexRef].zerarRef()
      }
    }
  }

  alterarRefPorIndex(indexRef, typeRef) {
    this.ListaCompleta[indexRef].alterarRef(typeRef);
  }

  referenciarEspacoFila(indexParaReferenciar, type) {
    const referencia = new Pagina(indexParaReferenciar, type)
    this.ListaCompleta.push(referencia);
  }

  referenciarSemEspacoFila(indexParaReferenciar, typeRef) {
    const NovaListaDereferencias = [];
    const substituir = this.classesRef.index;

    const estruturaPagina = new Pagina(indexParaReferenciar, typeRef);
    this.ListaCompleta.forEach((pagina) => {
      if(pagina.index !== substituir){
        NovaListaDereferencias.push(pagina);
      }
    });
    NovaListaDereferencias.push(estruturaPagina);
    this.ListaCompleta = NovaListaDereferencias

  }
}

export default ReferenciaNUR;