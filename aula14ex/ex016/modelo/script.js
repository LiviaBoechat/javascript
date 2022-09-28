function contar() {
    let ini = document.getElementById('txti') //controles dos inputs 
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    /*TESTANDO:
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        alert('TUDO OK!')
    }
   */

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { //length é comprimento (qts caracteres tem dentro)
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>' //substitui o texto da div no HTML. O <br> quebra a linha
        let i = Number(ini.value) //pegando o valor(string) que será escrito no input é transformando em Number. dúvida: PQ não fez isso já na primeira let lá em cima qd referenciou os inputs?
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p <= 0) {
            res.innerHTML = 'Passo inválido! Considerando PASSO 1:'
            p = 1 //passo (let p) passa automaticamente a valer 1
        } //dúvida: pq não tem o else?

        //a repetição se dará da seguinte forma(for): o contador(let c) vai começar com o valor do início(let i); enquanto o contador for menor ou igual ao valor final(let p), o contador vai receber ELE MESMO(+=) mais o passo(let p)

        if (i<f) { 
            //contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}` //+= concatena td o res
            }       
        } else { 
            //contagem decrescente(else é o contrário do if)
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}` //+= concatena tudo do res
    }
    
}