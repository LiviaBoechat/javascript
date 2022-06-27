let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] //a análise de dados vai ser feita a partir desse vetor/array

function isNumero(n) {  //para verificar se é um nímero o que a pessoa digitou e se está entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
       
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }

}
 
