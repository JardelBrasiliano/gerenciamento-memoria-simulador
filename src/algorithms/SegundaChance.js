import ReferenciaSegundaChance from '../classes/ReferenciaSegundaChance.js';

export const SegundaChance = ({
  VAR_TESTE_INCIAL,
  MAX_REFERENCIAS_PARA_RESETAR,
  QUANTIDADES_DE_TESTES,
  MIN_FRAME_Q1,
  MAX_FRAME_Q2,
}) => {
  const separandoItens = VAR_TESTE_INCIAL.replace(/W/g, '').replace(/R/g, '').split('-');
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

    const frame = new ReferenciaSegundaChance();
    let cont = (MAX_REFERENCIAS_PARA_RESETAR-1);

    /** COMEÇO DO ALGORITMO - SEGUNDA CHANCE */
    for (let index = 0; index < separandoItens.length; index++) {
      const pagina = separandoItens[index];
      const paginaEstaNoFrame = frame.ListaCompleta.findIndex((e) => { 
        return e.index === pagina; 
      })

      if(paginaEstaNoFrame !== -1) {
        if (frame.ListaCompleta[paginaEstaNoFrame].isRef === 0) {
          frame.alterarRefPorIndex(paginaEstaNoFrame);
        }
        acertos += 1;
      } else {
        faltas += 1;
        if(frame.ListaCompleta.length < frameDoTesteAtual) {
          frame.referenciarEspacoFila(pagina);
        } else {
          frame.referenciarSemEspacoFila(pagina);
        }
      }
      if (index === cont) {
        cont += MAX_REFERENCIAS_PARA_RESETAR;
        frame.zerar();
      }
    }
    /* FIM DO ALGORITMO - SEGUNDA CHANCE */
    // console.log('ACERTO = ', acertos);
    // console.log('FALTAS = ', faltas);
    respostas.push(acertos);
    acertos = 0;
    faltas = 0;
  }
  return respostas;
};
