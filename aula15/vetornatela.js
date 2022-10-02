let valores =  [8, 1, 7, 4, 2, 9]

//Maneiras de mostrar o vetor na tela:

/*
Vai aparecer com com os valores dentro de colchetes:
console.log(valores)
*/

/*
Vai aparecer sem colchetes, mas é a Maneira braçal/burra
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*
TRADUZINDO A REPETIÇÃO: A variável pos inicia em 0. Enquanto o pos for < que o comprimento total do vetor(valores.lenght), ou seja, enquanto ele não chegar no final do meu vetor, eu vou fazer pos++ p/ adicionar 1 a cada vez que ele fizer o looping:

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

 
//TRADUZINDO A FORMA MAIS FÁCIL DE EXIBIR UM VETOR: Para (for) cada posição (let pos) dentro (in) da variável composta valores (let valores), eu vou mostrar (console.log) o valor respectivo (valores[pos]):

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
