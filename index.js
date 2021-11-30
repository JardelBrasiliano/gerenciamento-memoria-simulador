import {FIFO} from './src/algorithms/FIFO.js';
import {SegundaChance} from './src/algorithms/SegundaChance.js';
import {MRU} from './src/algorithms/MRU.js';
import {NUR} from './src/algorithms/NUR.js';

const data = {
  VAR_TESTE_INCIAL: '26R-0W-68R-39W-80W-36W-81R-32R-50R-34R-12R-46R-22R-44R-86R-73W-0W-19W-71W-84R-76R-75W-59W-75W-74W-72R-30W-44W-81R-38R-94R-97R-56W-11W-22R-94R-20R-27W-46W-13W-31W-26W-53W-57R-36W-94R-50W-83R-6W-44R-17R-71W-54R-13W-38W-19W-30W-4W-15R-66R-0R-51R-60W-56R-8W-20R-74W-26W-16W-37R-1W-23R-26R-52W-67R-61R-83W-29R-0W-4W-63W-73R-31W-76W-37W-85W-71W-14R-18W-43R-83W-39W-90R-30W-18R-67W-20W-72R-45W-49W-47R-26R-56W-41W-53R-88W-56W-6R-23R-39R-29W-48W-72W-14W-95W-78R-66R-12W-32R-6R-21R-28R-98R-73R-75W-27W-23R-4R-56W-35W-79W-4W-15W-78W-47R-73W-58R-37R-45W-61W-39R-42W-55R-53R-56W-0R-18R-78R-7W-43W-19W-62W-44R-22W-51R-0W-1R-21R-54R-67W-2R-6R-49R-56R-50W-6W-36R-50W-8W-23R-88R-25W-43R-80R-19W-79R-67R-86W-33W-4R-50R-50R-57W-75R-20W-14W-54R-80R-41W-18W-18R-80W-71R-4R-49R-95W-5W-43R-9R-29R-99R-99W-62R-17W-68W-18R-90R-16W-79W-56R-98W-9W-11R-33R-93R-63W-5W-17W-48W-97W-92R-46W-44R-92R-2R-73W-0W-36R-59W-51R-78R-88W-48R-39W-67R-85W-75W-49W-59W-73R-94R-17W-97W-71W-32W-13R-2R-71R-81R-70R-96W-59R-75W-59R-86R-79R-57R-84R-48W-19R-14W-15W-77R-35R-1R-46W-31R-0R-47R-89R-45W-89R-36W-2W-36R-92W-79R-38W-83W-65R-53R-36R-89R-0W-38W-37R-26R-39W-24R-32W-63R-10R-99W-45W-70W-1R-26R-44R-6R-58W-94W-81R-90W-25R-56W-67R-51R-0R-41R-82W-59W-40W-54R-5R-40W-80R-54W-83W-67R-98R-16R-36W-41W-99R-67W-78R-41W-40W-17R-86W-68R-81W-52R-90R-61R-68R-29R-96W-97W-48W-35R-43W-79R-14R-40R-89W-89W-83R-19R-28W-41W-4R-70W-40R-3W-0W-98W-72W-3R-34R-93R-47W-20R-15W-80W-8R-50W-31W-55R-94W-60R-13R-3W-43R-16R-29W-92R-27W-0R-16R-56R-25W-1R-33W-49W-16R-93R-54R-94W-15R-91R-88W-99R-28W-88R-31R-62R-53W-76W-50R-60W-96W-46W-97W-10R-30R-70R-55W-18R-83R-63R-14W-11R-53W-28R-83W-42R-57W-83W-25W-84R-15R-66W-33R-2W-56R-24W-26W-8R-66W-80R-88R-94R-57W-89W-29R-46R-78W-64W-83R-49R-46W-91R-36W-57W-17R-27W-79R-60R-84R-69W-5W-21R-9R-16R-25W-99R-82W-5W-21R-54W-13W-31R-30R-31R-61W-47W-61R-28R-84R-46W-34R-40W-28W-25W-66R-91W-45W-27W-72W-42W-42R-70W-9R-83R-58W-50W-45W-6W-81R-33R-63W-58R-86R-20R-91W-73W-14R-3R-70W-97R-71R-92R-50W-75W-69W-29W-12R-36R-93W-85W-34W-51R-99R-33W-75W-75R-46R-6W-98R-69W-54W-34W-22R-4R-3R-66R-5W-45W-49W-66R-60R-19R-87R-98W-98W-59W-32R-91W-9R-38W-39W-79W-66W-74R-51W-28W-70R-24R-84W-44R-16W-57R-29R-62W-96R-4W-4R-10R-37W-97R-24R-67R-58R-84R-6W-90R-73W-24R-5R-27W-15R-69R-87W-15R-93W-24R-19W-51W-84R-84W-7W-51W-53W-63R-55W-91W-6W-92W-56W-20W-71R-5W-20W-66W-16W-8W-24R-15W-93R-26R-3W-76W-15R-27W-66W-23W-64R-38R-46W-22W-32W-34R-76W-39W-91W-7W-9W-25R-98W-26R-52W-89W-21R-68W-45R-46R-13W-33W-66R-48W-1W-47W-64R-2W-17W-34W-32W-57R-52R-81R-2W-87W-53R-76W-77W-42W-36W-32W-92R-90W-43W-93W-7W-34W-24R-12W-32R-14R-51R-25W-78R-87R-65W-94R-51R-94R-54W-37W-62R-98W-59W-39R-83W-16R-14W-39R-20R-23R-18R-8W-30R-38R-38W-0R-64W-97W-40R-87R-37R-4R-57R-73R-35W-56W-79W-98R-53R-67W-87R-9W-62R-51W-8R-25W-7W-6R-3R-77W-39R-67W-93W-29R-74R-45W-4W-85R-89W-47R-59R-68R-42W-73W-84W-95R-33W-4W-60R-15W-83R-60R-99W-45W-60R-45R-49R-77W-21R-76W-37R-68W-97W-87W-41R-14R-1W-15W-88R-4W-74R-75W-91W-57W-57R-6W-10R-31R-96R-4R-53R-28W-81W-37R-98W-70R-11W-36R-56W-58W-94W-73W-56W-15R-77R-17R-70W-6W-11W-73R-61R-45R-35R-99R-73R-77R-11R-9R-37W-46W-72W-55W-24W-42W-9R-88W-19R-29W-93R-4R-29R-56R-20W-67R-24W-47R-92W-20W-8W-75R-30R-71R-20W-16R-15R-61R-68R-80R-64R-17W-94W-33W-33W-82R-69R-90W-57R-28R-21R-95W-12R-53W-92R-83W-19W-53W-32W-17R-75R-82W-13R-15W-9R-86R-85R-51R-79W-30W-62R-41R-97R-87R-32R-6W-79R-31R-4W-27W-37R-95W-86W-65W-95W-13R-96R-77W-37R-52R-95R-4R-88W-13R-64R-45R-25W-21W-4W-11R-20R-96R-68R-59R-17W-2R-29W-7W-30W-78R-73R-36W-89W-54W-25R-61R-98W-41W-14W-1W-43R-10R-53W-11R-16R-50R-68R-9R-78W-2R-47W-81W-55R-79W-23W-61W-57W-71R-89R-2W-37W-22W-44W-22W-75R-94R-72W-31R-0R-14R-45W-43W-32R-98R-71R-66W-69W-55R-55W-76W-95R-80W-11R-69W-25R-20W-88R-96W-74W-26W-38W-82W-71R-84R-11R-18W-86R-30W-84W-46W-4R-40R-15R-15W-23R-10W-39W-23R-83R-13R-82W-40R-27R-33R-18R-11W-96R-87W-51W-40R-51W-26W-29R-61R-30W-16R-92R-80R-33R-0R-46W-4R-40W-46W-74W-56W-62W-69R-73R-61R-19R-36W-28R-',
  MAX_REFERENCIAS_PARA_RESETAR: 30,
  QUANTIDADES_DE_TESTES: 3,
  MIN_FRAME_Q1: 50,
  MAX_FRAME_Q2: 90,
};

const respostaCorreta = {
  Frames: [50, 70, 90],
  FIFO: [480, 662, 833],
  SegundaChance: [488, 666, 837],
  NUR: [484, 671, 839],
  MRU: [478, 657, 824],
}

function iniciarAlgortimos(grafico) {
  const valorTesteURI = document.getElementById('arquivo');
  const bitR = document.getElementById('bit-r').value;

  const quantidadesTeste = document.getElementById('quant-teste').value;
  const Q1 = document.getElementById('q1').value;
  const Q2 = document.getElementById('q2').value;
  
  const quantidadesTesteComLista = document.getElementById('quant-teste-lista').value;
  const listaDeItens = quantidadesTesteComLista.split('-');

  console.table(respostaCorreta);
  let data = {};
  
  let fileExtension = /text.*/;
  let fileTobeRead = valorTesteURI.files[0];
  if (fileTobeRead.type.match(fileExtension)) {
    let fileReader = new FileReader();
    fileReader.onload = function (e) {
      data = {
        VAR_TESTE_INCIAL: fileReader.result,
        MAX_REFERENCIAS_PARA_RESETAR: +bitR,
        QUANTIDADES_DE_TESTES: quantidadesTeste === '-1' ? listaDeItens : quantidadesTeste,
        MIN_FRAME_Q1: +Q1,
        MAX_FRAME_Q2: +Q2,
      }
      //Limpa dados do grafico
      grafico.data.labels.pop();
      grafico.data.datasets.forEach((dataset) => {
          dataset.data.pop();
      });
      grafico.update();
      //Inicia os algortimos
      const [dataFIFO, legendaBaixo] = FIFO(data);
      const dataMRU = MRU(data);
      const dataSG = SegundaChance(data);
      const dataNUR = NUR(data);
      //Estrutura pra o grafico
      const dataEstrutura = [
        { 
          label: 'FIFO',
          data: dataFIFO,
          borderColor: "red",
          fill: false
        }, { 
          label: 'MRU',
          data: dataMRU,
          borderColor: "green",
          fill: false
        }, { 
          label: 'Segunda Chance',
          data: dataSG,
          borderColor: "blue",
          fill: false
        }, { 
          label: 'NUR',
          data: dataNUR,
          borderColor: "orange",
          fill: false
        },
      ]
      //Inicia um novo grafico
      grafico.data.labels = legendaBaixo;
      grafico.data.datasets = dataEstrutura;
      grafico.update();
      
      document.getElementById("table__content").innerHTML = '' ;

      for(var i = 0; i < dataFIFO.length; i++) {
        document.getElementById("table__content").innerHTML += `
          <tr class="table__row">
            <th class="row__cell">${legendaBaixo[i]}</th>
            <th class="row__cell">${dataFIFO[i]}</th>
            <th class="row__cell">${dataSG[i]}</th>
            <th class="row__cell">${dataNUR[i]}</th>
            <th class="row__cell">${dataMRU[i]}</th>
          </tr>
        `;
      }
    }
    fileReader.readAsText(fileTobeRead);
  }
}

(() => {
  
  const grafico = new Chart("myChart", {
    type: "line",
    data: {
      labels: [],
      datasets: [],
    },
    options: {
      legend: {
        display: true,
        position: 'bottom',
      }
    }
  });

  document.getElementById('calcular').addEventListener('click', () => iniciarAlgortimos(grafico));
  const teste = {
    VAR_TESTE_INCIAL: '2W-1R-5R-5W-2R-0W-2R-7R-1W-7W-2R-7W-4R-2R-6W-1W-2W-3W-7R-5R',
    MAX_REFERENCIAS_PARA_RESETAR: 10,
    QUANTIDADES_DE_TESTES: [4],
    MIN_FRAME_Q1: 4,
    MAX_FRAME_Q2: 9,
  };

  console.log('TESTE', NUR(teste));
})();