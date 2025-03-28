// Seu objetivo neste kata é implementar uma função diferença, que subtrai uma lista de outra e retorna o resultado.

// Deve remover todos os valores da lista a, que estão presentes na lista b mantendo sua ordem.

// arrayDiff([1,2],[1]) == [2]
// Se um valor estiver presente em b, todas as suas ocorrências deverão ser removidas do outro:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// const a = [1,2,2,2,3]
// const b = [2]


function arrayDiff(a, b) {
  return a.filter(item => !b.includes(item))
}

arrayDiff([1,2],[1])
