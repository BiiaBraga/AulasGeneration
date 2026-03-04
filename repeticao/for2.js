/**
 * Autor: Beatriz Braga
 * Data: 04/03
 */

//importações
import leia from 'readline-sync';

//variaveis e constantes
let nome, idade;
const lista = [];

//for para entrada 
for (let i=0; i<5; i++){
    nome = leia.question("Qual eh o seu nome? ");
    idade = leia.question("Qual eh o seu idade? ");
    lista.push({nome, idade});
}

console.log(lista);