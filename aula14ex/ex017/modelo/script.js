function tabuada() {
    let num = document.getElementById('txtn') //controle do input
    let tab = document.getElementById('seltab') //controle do seletor

    if (num.value.length == 0) {
       window.alert('Por favor, digite um número!') 
    } else {
        let n = Number(num.value) //transf. o valor (string) inserido no input em Number 
        tab.innerHTML = '' //para excluir a tabuada antiga qd entrar nova
        let c = 1 //contador para repetição usando while
        while (c <= 10) {
            let item = document.createElement('option') //em vez de criar o option UM POR UM no selector no HTML e referenciar no JS, criei direto no JS. (ver como cria selector no HTML, smp tem option)
            item.text= `${n} x ${c} = ${n*c}`
            tab.appendChild(item) //para aparecer o let item no seletor. Isso pq ele não está ainda conectado ao seletor no HTML, e sim foi criado no JS direto
            c++ //acrescentar um multiplicador a cada repetição
        }
    }
   

}