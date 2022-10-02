let num = document.querySelector('input#fnum') //controle input texto
let lista = document.querySelector('select#flista') //controle quadro
let res = document.querySelector('div#res') 
let valores = [] //vetor para análises dos dados

//Antes de adicionar, tem que ANALISAR se o valor que foi digitado no input é um número e se esse número já foi add antes na lista. Para isso, cria-se, antes, duas funcões com esse intuito:

function isNumero(n) {
   if(Number(n) >= 1 && Number(n) <= 100) {
      return true
   } else {
      return false
   }
}

function inLista(n, l) {
   if (l.indexOf(Number(n)) != -1) { //-1 é qd não está na lista
      return true
   } else {
      return false
   }

}

/* Só vai analisar SE(IF) o valor for um número E(&&) se o número NÃO estiver na lista(!)*/

function adicionar() {
   if (isNumero(num.value) && !inLista(num.value, valores)) {
    
   } else {
    window.alert('Valor inválido ou já adicionado!')
   }
}
