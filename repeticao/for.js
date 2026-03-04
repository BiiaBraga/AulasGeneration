/**
 * Autor: Beatriz Braga
 * Data: 04/03
 */

//importações
import leia from 'readline-sync';

//variaveis
let numero;

//entrada
numero = leia.questionInt("Digite um numero: ");

//for 
for (let i = 0; i <=10; i++){
    console.log(`${numero} * ${i} = ${numero * i}`);
}