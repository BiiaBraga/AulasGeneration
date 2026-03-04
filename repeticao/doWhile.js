/**
 * Autor: Beatriz Braga
 * Data: 04/03
 */

//importações
import leia from 'readline-sync';

//variaveis e constantes
let continuar = false;
let numero;

do{
    console.log("//=== JOGUINHO DE ADIVINHACAO ===//\n");
    
    numero = leia.questionInt("Digite um numero: ");
    const numeroSecreto = Math.floor(Math.random() * 10);

    if(numero == numeroSecreto){
        console.log("acertou!");
    } else{
        console.log("Errou!");
        console.log("O numero secreto era %d", numeroSecreto);
    }

    continuar = leia.keyInYN("Quer continuar jogando? Pague R$350. ");

}while(continuar);

