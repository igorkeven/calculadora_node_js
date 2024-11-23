export { calculadora, OPERACAO_INVALIDA } from './calculadora'

const operacao = 'soma';
const valores = [1, 2, 3, 4];
const resultado = calculadora(operacao, valores);

console.log(`Resultado da ${operacao}:`, resultado);