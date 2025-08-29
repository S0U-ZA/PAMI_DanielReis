// Javascript é uma linguagem fracamente tipada!!
var texto = "Olá";// Aspas duplas côntem sempre uma string.
let texto2 =  'Mundo';// Ponto e virgula é opcional.
const texto3 = "!";// Aspas simples também serve para string.

    console.log(texto, texto2 + texto3);
// Virgula (,) "junta" com espaço, enquanto o sinal de mais (+) deixa tudo junto.

texto = 'Hello';
let msg = `${texto} ${texto2} ${texto3}`;
// Use Crase(``) junto de ${} para "juntar" também
        console.log(msg);

//texto3 = "teste"
// O exemplo acima mostra que é impossivel reatribuir um novo valor a uma constante

    let numero = 367896.49089889;
        console.log(typeof numero);
    let numero2 = '42.42342';
            console.log(typeof numero2);

let obj = {nome: "Daniel", idade: 17};
        console.log("Nome:", obj.nome, "| Idade:", obj.idade);
            console.log(typeof obj);
//Objeto é sempre um elemento chave/valor

let arr = ['Daniel', 'D.', 'S.', 'Reis'];
console.log(arr[0], arr[3]);
console.log(typeof arr);
