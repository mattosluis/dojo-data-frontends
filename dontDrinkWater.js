// Don't Drink the Water

// Dada uma representação em matriz bidimensional de um copo com líquidos misturados, classifique a matriz de modo que os líquidos apareçam no copo com base em sua densidade. (A densidade mais baixa flutua para o topo.) A largura do copo não mudará de cima para baixo.

// ======================
// |   Density Chart    |
// ======================
// | Honey   | H | 1.36 |
// | Water   | W | 1.00 |
// | Alcohol | A | 0.87 |
// | Oil     | O | 0.80 |
// ----------------------

// {                             {
//   { 'H', 'H', 'W', 'O' },        { 'W','O','O','O' },
//   { 'W', 'W', 'W', 'W' },  =>    { 'W','W','W','W' },
//   { 'H', 'H', 'O', 'O' }         { 'H','H','H','H' }
// }                             }

// {                             {
//   { 'H', 'H', 'W' },             { 'O','O','O','O' },
//   { 'W', 'W', 'O' },  =>         { 'H','W','W','W' },
//   { 'H', 'H', 'O', 'O' }         { 'H','H','H','H' }
// }                             }


// A representação do copo pode ser maior ou menor.
// 
// Se um líquido não preencher uma fileira, ele flutua para o topo e para a esquerda.

const example = [['H', 'H', 'W', 'O'], ['W', 'W', 'O', 'W'], ['H', 'H', 'O', 'O']] 
// const example = [[]] 

function dontDrink(glass) {
    const densities = {
      "H": 1.36,
      "W": 1.00,
      "A": 0.87,
      "O": 0.80
    }

    if (glass.length === 0)
        return glass

    const width = glass[0].length
    const singleArr = []
    
    glass.forEach(arr => arr.forEach(item => singleArr.push({
      'liquid': item,
      'density': densities[item]
    })))

    const sortedArray = singleArr.sort((a, b) => a.density - b.density).map(item => item.liquid)
    const newGlass = []
    let stepGlass = []

    sortedArray.forEach((it, index) => {
      stepGlass.push(it)
      

      if ((index + 1) % width == 0) {
        newGlass.push(stepGlass)
        stepGlass = []
      }
    })

    return newGlass
}