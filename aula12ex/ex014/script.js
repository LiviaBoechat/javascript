function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')  
    var data = new Date() //considera hr corrente
    var hora = data.getHours() //considera hr corrente
    
    msg.innerHTML = `Agora são ${hora} horas.` //em vez de aparecer o texto da div#msg, que está no HTML, vai aparecer isso, por conta da função onload() que foi colocado no body do HTML
    
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#9c9d76' 
    } else if (hora >= 12 && hora <=18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#af6f67' 
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#5a6a76' 
    }
}
