// Você recebe um array (que terá comprimento de pelo menos 3, mas pode ser muito grande) contendo números inteiros. A matriz é composta inteiramente de números inteiros ímpares ou inteiramente composta de números inteiros pares, exceto por um único número inteiro N. Escreva um método que receba a matriz como argumento e retorne esse "valor discrepante" N.

// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findOutlier(integers){
    let odds = []
    let even = []

    integers.forEach(integer => {
        if (integer % 2 === 0)
            odds.push(integer)
        else
            even.push(integer)
    })

    return (even.length > odds.length) ?  odds[0] : even[0]
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
