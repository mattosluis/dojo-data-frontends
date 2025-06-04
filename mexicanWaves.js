// Introdução

// A onda (conhecida como onda mexicana no mundo anglófono fora da América do Norte) é um exemplo de ritmo metacrônico alcançado em um estádio lotado quando grupos sucessivos de espectadores se levantam brevemente, gritam e levantam os braços. Imediatamente após se esticar até a altura máxima, o espectador retorna à posição sentada habitual. O resultado é uma onda de espectadores em pé que se propaga pela multidão, mesmo que cada espectador nunca se afaste de seus assentos. Em muitas arenas grandes, a multidão está sentada em um circuito contíguo ao redor do campo esportivo e, portanto, a onda consegue se propagar continuamente pela arena; em arranjos de assentos descontínuos, a onda pode, em vez disso, refletir para frente e para trás através da multidão. Quando o espaço entre os assentos é estreito, a onda às vezes pode atravessá-lo. Normalmente, apenas uma crista de onda estará presente em um dado momento em uma arena, embora ondas simultâneas e em contrarrotação já tenham sido produzidas.

// (Wikipédia)

// Tarefa
// Neste Kata simples, sua tarefa é criar uma função que transforme uma corda em uma Onda Mexicana. Você receberá uma string e deverá retornar um array de strings onde uma letra maiúscula representa uma pessoa em pé.

// Regras
// 1. A string de entrada sempre consistirá em letras minúsculas e espaços, mas pode estar vazia; nesse caso, você deverá retornar um array vazio. 
// 2. Se o caractere na string for um espaço em branco, passe por cima dele como se fosse um assento vazio.

// Exemplos
// "hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// " s p a c e s " => [ " S p a c e s ", " s P a c e s ", " s p A c e s ", " s p a C e s ", " s p a c E s ", " s p a c e S "]

const wave = (data) => {
    if (!data) return []
    let arr = [];
    const strToArr = data.split('')
    for(let i = 0; i<strToArr.length; i++) {
      const newArr = [...strToArr]
      const char = newArr[i].toUpperCase()
      newArr[i] = char;

      if (newArr[i].trim() !== '')
        arr.push(newArr.join(''))
    }
    return arr
}

console.log(wave())
console.log(wave("hello"))
console.log(wave(" s p a c e s "))

// Um exemplo que achamos legal também, embora mais complexo de ser entendido

// const wave = str => 
// 	[...str].map((s, i) => 
//       str.slice(0, i) + s.toUpperCase() + str.slice(i + 1) 
//   ).filter(x => x != str);
