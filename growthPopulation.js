// Growth of a Population

// Em uma cidade pequena, a população é p0 = 1000 no começo de um ano. A população aumenta regularmente em 2% ao ano e, além disso, 50 novos habitantes por ano vêm morar na cidade. Quantos anos a cidade precisa para ver sua população maior ou igual a p = 1200 habitantes?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.

// Parâmetros mais geralmente fornecidos:

// p0, percent, aug (habitantes chegando ou saindo a cada ano), p (população para igualar ou superar)

// a função nb_year deve retornar n número de anos inteiros necessários para obter uma população maior ou igual a p.

// aug é um inteiro, percent um número flutuante positivo ou nulo, p0 e p são inteiros positivos (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

// Nota:
// Não se esqueça de converter o parâmetro percent como uma porcentagem no corpo da sua função: se o parâmetro percent for 2, você tem que convertê-lo para 0,02.

// Não há frações de pessoas. No final de cada ano, a contagem da população é um inteiro: 252,8 pessoas arredondadas para 252 pessoas

function nb_year(p0, percent, aug, p) {
  let numberOfYears = 0;
  let sumOfHabitants = p0;

  while (sumOfHabitants < p) {
    const percentNumber = sumOfHabitants * (percent / 100);
    sumOfHabitants = sumOfHabitants + Math.floor(percentNumber) + aug;
    numberOfYears++;
  }

  return numberOfYears;
}

console.log(nb_year(1500, 5, 100, 5000))
console.log(nb_year(1500000, 2.5, 10000, 2000000))