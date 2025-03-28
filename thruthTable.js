// https://www.codewars.com/kata/5e67ce1b32b02d0028148094/train/javascript

// Tabela verdade da função booleana

// Você recebe uma função booleana (ou seja, uma função que recebe parâmetros booleanos e retorna um booleano). Você precisa retornar uma string representando a tabela verdade da função.

// Regras de formatação:
// As variáveis ​​devem ser nomeadas A, B, C, D ... e assim por diante, na mesma ordem em que são passadas para a função booleana, ou seja, o primeiro parâmetro (mais à esquerda) é A. (Não haverá funções com mais de 26 parâmetros (A ... Z)).
// Os valores booleanos serão representados por 1 (verdadeiro) ou 0 (falso)
// Se a função for anônima / um fechamento / um lambda (dependendo da linguagem), use a letra f como nome.
// em JavaScript, isso acontece se o nome da função for uma string vazia


// A primeira linha consistirá em, em ordem:
// os nomes das variáveis, separados por um espaço ( )
// dois caracteres de tabulação (\t)
// o nome da função com, entre parênteses, seus parâmetros separados por vírgulas (,)
// dois caracteres de nova linha (\n)

// As linhas seguintes consistirão em, em ordem:
// os valores das variáveis, separados por um espaço ( )
// dois caracteres de tabulação (\t)
// o resultado da função para este arranjo de variáveis
// um caractere de nova linha (\n)
// O número binário formado pela concatenação dos argumentos da função deve estar em ordem crescente

// Examples
// A B        AND(A,B)

// 0 0        0
// 0 1        0
// 1 0        0
// 1 1        1

const AND = (A, B) => A && B;
const NAND = (A, B) => !(A && B);
const XOR = (A, B) => Boolean(A ^ B);
const OR = (A, B) => A || B;
const NOR = (A, B) => !(A || B);
const NOT = (A) => !A;
const FALSE = (A, B, C, D) => false;
const TRUE = (A, B, C) => true;

const parameters = [true, false]

function truthTable(booleanFunction) {
  const argsLength = booleanFunction.length;
  const chars  = ['A', 'B', 'C', 'D'];
  const filteredChars = chars.slice(0, argsLength)

  let result = '';

  result += `${filteredChars.join(' ')}\t\t${booleanFunction.name}(${filteredChars.join(',')})${"\n"}`

  

  console.log(result);
  return "";
}

truthTable(AND)