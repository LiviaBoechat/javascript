function verificar() {
    var data = new Date() //data atual
    var ano = data.getFullYear() //ano atual
    var fano = document.getElementById('txtano') //aonde vão digitar o ano de nasc.
    var res = document.querySelector('div#res') //outra forma de selecionar com querySelector
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else { 
        var fsex = document.getElementsByName('radsex') //Elements  no plural, tem que especificar qual vc está referenciando. Especificou lá embaixo nos if de mulher [1] e homem [0]
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'menino.png')
            } else if (idade < 50) {
                // adulo
                img.setAttribute('src', 'adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebemulher.png')
             } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'menina.png')
            } else if (idade < 50) {
                // adulo
                img.setAttribute('src', 'adultamulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosamulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //para aparecer as fotos config. lá em cima no var e nos if/else
    }
}