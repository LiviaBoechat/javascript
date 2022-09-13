function verificar() {
    var data = new Date() //considera o ano corrente
    var ano = data.getFullYear() //considera o ano corrente
    var fano = document.getElementById('txtano') //cx. do HTML que a pessoa coloca o ano dela
    var res = document.querySelector('div#res') //onde vai aparecer a msg do resultado
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //input do HTML onde a pessoa marca o sexo dela
        var idade = ano - Number(fano.value)
        // para testar....
        //res.innerHTML = `Idade calculada: ${idade}`
        
        var gênero = '' //ñ entendi pq tá vazio
        var img = document.createElement('img') //inserir imagem dinamicamente
        img.setAttribute('id','foto') //em vez de criar o elemento no html e criar uma var pra ele no JS, criou já no JS c/ id 'foto'
        if (fsex[0].checked) { //se a pessoa der check no primeiro input
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) { //se der check no segundo input
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' //ou faz no CSS
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //para inserir a imagem visualmente
    }

}

