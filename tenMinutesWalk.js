// Faça uma caminhada de dez minutos

// Você mora na cidade de Cartesia, onde todas as estradas são dispostas em uma grade perfeita. Você chegou dez minutos mais cedo para um compromisso, então decidiu aproveitar a oportunidade para dar uma curta caminhada. 

// A cidade fornece aos seus cidadãos um aplicativo de geração de caminhadas em seus telefones -- toda vez que você pressiona o botão, ele envia uma matriz de sequências de uma letra representando direções para caminhar (por exemplo, ['n', 's', 'w', 'e']). 

// Você sempre anda apenas um único quarteirão para cada letra (direção) e sabe que leva um minuto para atravessar um quarteirão da cidade

// então crie uma função que retornará true se a caminhada que o aplicativo fornecer levará exatamente dez minutos (você não quer chegar cedo ou atrasado!) e, é claro, retornará você ao seu ponto de partida. Retorne false caso contrário.

// Observação: você sempre receberá uma matriz válida contendo uma variedade aleatória de letras de direção (apenas 'n', 's', 'e' ou 'w'). Ele nunca lhe dará um array vazio (isso não é uma caminhada, é ficar parado!).

// assert.isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
// assert.isFalse(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
// assert.isFalse(isValidWalk(['w']), 'should return false');
// assert.isFalse(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

const directions = ['n','n','n','s','n','s','n','s','n','s']

const tenMinutesWalk = (walk) => {
    const walkLength = walk.length
    // let n = 0, s = 0, w = 0, e = 0
    const directions = {n: 0, s: 0, w: 0, e: 0}

    walk.forEach(element => {
        directions[element]++
    });

    const {n, s, w, e} = directions

    if (walkLength === 10 && n === s && w === e) {
        return true
    }

    return false
}

 console.log(tenMinutesWalk(directions))