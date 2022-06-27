function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

console.log(parimpar(4))

// exemplo com dois parâmetros

function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2, 5))

  // Jogando uma função dentro de uma variável 

  let v = function(x) {
      return x*2
  }

  console.log(v(5))

  // Exemplo com fatorial ... 5! = 5 x 4 x 3 x 2 x 1

  function fatorial(n) {
      let fat = 1
      for(let c = n; c > 1; c--) { //contador c=n; enqt. ele for > 1; ele perde 1
        fat *= c
      }
      return fat
  }

  console.log(fatorial(5))

  // RECURSIVIDADE: Exemplo de um fatorial com uma chamada dentro da prórpia funcão
  
  /* Se liga!
  5! = 5 x 4 x 3 x 2 x 1
  5! = 5 x 4!

  n! = n x (n-1)!
  1! = 1
  */

  function fatorial(n) {
    let fat = 1
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

