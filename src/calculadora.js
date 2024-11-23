// export const OPERACAO_INVALIDA = 'OPERACAO_INVALIDA'

// export const calculadora = (operacao, valores) => {
//   // código mais simples com a função reduce mas que ainda não foi visto em aula
//   if (!Array.isArray(valores) || valores.length === 0) {
//     return OPERACAO_INVALIDA;
//   }

//   switch (operacao) {
//     case 'soma':
//       return valores.reduce((a, b) => a + b, 0);
//     case 'subtracao':
//       return valores.reduce((a, b) => a - b);
//     case 'multiplicacao':
//       return valores.reduce((a, b) => a * b, 1);
//     case 'divisao':
//       return valores.reduce((a, b) => a / b);
//     default:
//       return OPERACAO_INVALIDA;
//   }

  


//   // codigo com oque foi visto em aula
//   // if (!Array.isArray(valores) || valores.length === 0) {
//   //   return OPERACAO_INVALIDA;
//   // }

//   // let resultado = valores[0];

//   // switch (operacao) {
//   //   case 'soma':
//   //     for (let i = 1; i < valores.length; i++) {
//   //       resultado += valores[i];
//   //     }
//   //     return resultado;
//   //   case 'subtracao':
//   //     for (let i = 1; i < valores.length; i++) {
//   //       resultado -= valores[i];
//   //     }
//   //     return resultado;
//   //   case 'multiplicacao':
//   //     for (let i = 1; i < valores.length; i++) {
//   //       resultado *= valores[i];
//   //     }
//   //     return resultado;
//   //   case 'divisao':
//   //     for (let i = 1; i < valores.length; i++) {
//   //       resultado /= valores[i];
//   //     }
//   //     return resultado;
//   //   default:
//   //     return OPERACAO_INVALIDA;
//   // }
// }

// console.log(calculadora('multiplicacao', [100, 10]))

import readline from 'readline';

export const OPERACAO_INVALIDA = 'OPERACAO_INVALIDA';

export const calculadora = (operacao, valores) => {
  if (!Array.isArray(valores) || valores.length === 0) {
    return OPERACAO_INVALIDA;
  }

  switch (operacao) {
    case 'soma':
      return valores.reduce((a, b) => a + b, 0);
    case 'subtracao':
      return valores.reduce((a, b) => a - b);
    case 'multiplicacao':
      return valores.reduce((a, b) => a * b, 1);
    case 'divisao':
      return valores.reduce((a, b) => a / b);
    default:
      return OPERACAO_INVALIDA;
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const exibirMenu = () => {
  console.log(`\x1b[34m\x1b[1m\nEscolha uma operação:\x1b[0m`);
  console.log(`\x1b[32m1 - Soma\x1b[0m`);
  console.log(`\x1b[32m2 - Subtração\x1b[0m`);
  console.log(`\x1b[32m3 - Multiplicação\x1b[0m`);
  console.log(`\x1b[32m4 - Divisão\x1b[0m`);
  console.log(`\x1b[31mX - Sair\x1b[0m`);
};

const processarOperacao = () => {
  exibirMenu();
  rl.question('Digite o número correspondente à operação desejada ou "x" para sair: ', (opcao) => {
    if (opcao.toLowerCase() === 'x') {
      console.log('Encerrando a calculadora. Até a próxima!');
      rl.close();
      return;
    }

    const operacoes = {
      1: 'soma',
      2: 'subtracao',
      3: 'multiplicacao',
      4: 'divisao',
    };

    const operacao = operacoes[opcao];

    if (!operacao) {
      console.log('Opção inválida. Tente novamente.');
      processarOperacao(); 
      return;
    }

    rl.question('Digite os números separados por espaço: ', (entradaNumeros) => {
      const numeros = entradaNumeros.split(' ').map(Number); 
      const resultado = calculadora(operacao, numeros);

      if (resultado === OPERACAO_INVALIDA) {
        console.log('Valores fornecidos não são válidos.');
      } else {
        console.log(`\n\x1b[41m\x1b[1m O resultado da ${operacao} é: ${resultado} \x1b[0m`);
      }

      processarOperacao();
    });
  });
};


processarOperacao();
