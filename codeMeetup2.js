// Coding Meetup #2 - Higher-Order Functions Series - Greet developers

// Você receberá um array de objetos (matrizes associativas em PHP, tabelas em COBOL) representando dados sobre desenvolvedores que se inscreveram para participar do próximo encontro de programação que você está organizando.

// Sua tarefa é retornar um array onde cada objeto terá uma nova propriedade 'greeting' com o seguinte valor de string:

// Olá <nome>, o que você mais gosta em <linguagem>?

// Por exemplo, dado o seguinte array de entrada:

// var list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ];

// sua função deve retornar o seguinte array:

// [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?'
//   },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//     greeting: 'Hi Lukas, what do you like the most about Python?'
//   },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//     greeting: 'Hi Madison, what do you like the most about Ruby?'
//   } 
// ];

// Notas:
// A ordem das propriedades nos objetos não importa (exceto em COBOL).
// O array de entrada será sempre válido e formatado como no exemplo acima.

const list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
]

const greeting = ({ developers }) => {
    return developers.map((developer) => {
        return {
            ...developer,
            greeting: `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`
        }
    })
}

console.log(greeting({developers: list1}))