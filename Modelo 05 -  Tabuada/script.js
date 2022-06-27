function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) //a variável n vai ser o número que a pessoa digitou (string) transformado em número para o JS entender.
        tab.innerHTML = '' //para limpar a tabuada feita anteriormente
        let c = 1
        while (c <= 10) {
            c++
            let item = document.createElement('option') //para mostrar a tabuada dentro do select. Pode fazer um option dentro do select no HTML tb, daí não precisa fazer aqui, acho
            item.value = `tab${c}` //não entendi. Tem a ver com item selecionado
            item.text = `${n} x ${c} = ${n*c}`
        
            tab.appendChild(item)
            
        }
    }
}
