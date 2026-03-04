/**
 * Autor: Beatriz Braga
 * Data: 04/03
 */

//importações
import leia from 'readline-sync';

//variaveis e constantes
let continuar = false;
let numero;

continuar = leia.keyInYN("Quer acessar a tabuada? ");

//while
while(continuar){

    numero = leia.questionInt("Digite um numero: ");

    //for 
    for (let i = 0; i <=10; i++){
        console.log(`${numero} * ${i} = ${numero * i}`);
    }

    continuar = leia.keyInYN("Quer continuar usando a tabuada? ");

}
