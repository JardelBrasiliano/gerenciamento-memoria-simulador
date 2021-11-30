import ReferenciaNUR from "../classes/ReferenciaNUR.js";

export const NUR = ({
  VAR_TESTE_INCIAL,
  MAX_REFERENCIAS_PARA_RESETAR,
  QUANTIDADES_DE_TESTES,
  MIN_FRAME_Q1,
  MAX_FRAME_Q2,
}) => {
  const separandoItens = VAR_TESTE_INCIAL.split('-');
  separandoItens.pop();

  const respostas = [];
  let acertos = 0;
  let faltas = 0;

  const intervalosDeFrames = Math.round((MAX_FRAME_Q2 - MIN_FRAME_Q1) / (QUANTIDADES_DE_TESTES))+1;
  const numerosDeFrames = typeof(QUANTIDADES_DE_TESTES) === 'string' ? +intervalosDeFrames : QUANTIDADES_DE_TESTES.length;

  let interV = MIN_FRAME_Q1;
  for (let indexTeste = 0; indexTeste < numerosDeFrames; indexTeste++) {
    const frameDoTesteAtual = typeof(QUANTIDADES_DE_TESTES) === 'string' ? interV : QUANTIDADES_DE_TESTES[indexTeste];
    interV += +QUANTIDADES_DE_TESTES;

    const frame = new ReferenciaNUR();
    let cont = (MAX_REFERENCIAS_PARA_RESETAR-1);

    /** COMEÇO DO ALGORITMO - NUR */
    for (let index = 0; index < separandoItens.length; index++) {

      const paginaComSigla = separandoItens[index];
      const paginaType = paginaComSigla[paginaComSigla.length-1];
      const pagina = +paginaComSigla.replace(/.$/, '');

      const paginaEstaNoFrame = frame.ListaCompleta.findIndex((e) => { //Criar função buscar na memoria 
        return e.index === pagina; 
      })

      if(paginaEstaNoFrame !== -1) {//Quando ja existe na memoria
        frame.alterarRefPorIndex(paginaEstaNoFrame, paginaType);
        acertos += 1;
      } else {//Quando não existe na memoria
        faltas += 1;
        if(frame.ListaCompleta.length < frameDoTesteAtual) {//Quando tem espaço na memoria
          frame.referenciarEspacoFila(pagina, paginaType);
        } else {//Quando a memoria da cheia
          frame.calcularClasse();
          frame.referenciarSemEspacoFila(pagina, paginaType);
        }
      }
      if (index === cont) {
        cont += MAX_REFERENCIAS_PARA_RESETAR;
        frame.zerar();
      }
    }
    /* FIM DO ALGORITMO - NUR */
    respostas.push(acertos);
    // console.log('ACERTO = ', acertos);
    // console.log('FALTAS = ', faltas);
    acertos = 0;
    faltas = 0;
  }
  return respostas
};
