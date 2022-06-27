let num = [5, 8, 2, 9, 3]
num.push(1) // acrescentei o 1 na última casa 
num.sort() // para colocar em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4)
console.log(`O valor 1 está na posição ${pos}`) //ver como ficou o colchete, lá embaixo, após o push e o sort
if(pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}


//Modo braçal de mostrar a variável
/* 
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[5])
*/
//Modo inteligente de mostrar a variável com todos os seus valores 

/*
let valores = [8, 1, 7, 4, 2, 9]
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
}
*/


//Outra forma de mostrar a variável com todos os seus valores (melhor forma)

let valores = [8, 1, 7, 4, 2, 9]
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

