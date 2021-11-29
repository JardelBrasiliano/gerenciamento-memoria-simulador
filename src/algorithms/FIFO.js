export const FIFO = ({
  VAR_TESTE_INCIAL,
  MAX_REFERENCIAS_PARA_RESETAR,
  QUANTIDADES_DE_TESTES,
  MIN_FRAME_Q1,
  MAX_FRAME_Q2,
}) => {
  const separandoItens = VAR_TESTE_INCIAL.replace(/W/g, '').replace(/R/g, '').split('-');
  separandoItens.pop();
  
  const respostas= [];
  const legendaFrames= [];
  let acertos = 0;
  let faltas = 0;

  const intervalosDeFrames = Math.round((MAX_FRAME_Q2 - MIN_FRAME_Q1) / (QUANTIDADES_DE_TESTES-1));

  for (let indexTeste = 0; indexTeste < QUANTIDADES_DE_TESTES; indexTeste++) {
    const frame = [];
    const frameDoTesteAtual = MIN_FRAME_Q1 + (intervalosDeFrames*indexTeste)

    /** COMEÇO DO ALGORITMO - FIFO */
    for (let index = 0; index < separandoItens.length; index++) {
      const pagina = separandoItens[index];
      const paginaEstaNoFrame = frame.find( value => value === pagina );

      if(paginaEstaNoFrame) {
        acertos += 1;
      } else {
        faltas += 1;
        if(frame.length < frameDoTesteAtual) {
          frame.push(pagina);
        } else {
          frame.shift();
          frame.push(pagina);
        }
      }
    }
    /** FIM DO ALGORITMO - FIFO */
    // console.log('ACERTO = ', acertos);
    // console.log('FALTAS = ', faltas);
    legendaFrames.push(frameDoTesteAtual);
    respostas.push(acertos);
    acertos = 0;
    faltas = 0;
  }
  return [respostas, legendaFrames];
};
