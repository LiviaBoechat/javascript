var idade = 80
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota!') //ñ usa docment.write pq não está dentro do navegador, mas do JS
} else if (idade < 18 || idade > 65) {
    console.log('Voto Opcional') 
} else {
    console.log('Vota!')
}



