function tabuada() {
    let num = document.getElementById('txtn') //referenciando o input
    let tab = document.getElementById('seltab') //referenciando o seletor

    if (num.value.length == 0) {
       window.alert('Por favor, digite um número!') 
    } else {
        let n = Number(num.value) //transf. o valor (string) inserido no input em Number 
        tab.innerHTML = '' //para excluir a tabuada antiga qd entrar nova
        let c = 1 //contador para repetição usando while
        while (c <= 10) {
            let item = document.createElement('option') //em vez de criar o option UM POR UM no selector no HTML e referenciar no JS, criei direto no JS. (ver como cria selector no HTML, smp tem value)
            item.text= `${n} x ${c} = ${n*c}`
            tab.appendChild(item) //para aparecer o item no seletor
            c++ //acrescentar um multiplicador a cada repetição
        }
    }
   

}