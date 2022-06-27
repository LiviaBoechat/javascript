function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 13
msg.innerHTML = `Agora são ${hora}.`
if (hora >= 0 && hora < 12) {
    // BOM DIA
    img.src = 'manha.png'
    document.body.style.background = '#e1eaf7'
} else if (hora >= 12 && hora < 18) {
    // BOA TARDE
    img.src = 'tarde.png'
    document.body.style.background = '#ffdb97'
} else {
    // BOA NOITE
    img.src = 'noite.png'
    document.body.style.background = '#103847'
}

}
