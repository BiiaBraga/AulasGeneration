/**
 * Autor: Beatriz Braga
 * Data: 04/03
 */

//importações
import leia from 'readline-sync';

//variaveis e constantes
let senhaCorreta = "1234";
let senhaDigitada = "";
 
while (senhaDigitada !== senhaCorreta) {
  senhaDigitada = leia.question("Digite a senha: ");
}
 
console.log("Acesso liberado");