let num =[5, 8, 2, 9, 3]
num[3] = 6 //substituiu o 9 (que está no índice 3) por 6
num.push(7) //inseriu o valor 7 no final
num.length //comprimento ou qts elementos tem
/*
num.sort() //coloca em ordem crescente os valores
*/

console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(num[0]) //mostra o valor na posição 0
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8) //fala em  que posição está o valor 8
console.log(`O valor 8 está na posição ${pos}`)