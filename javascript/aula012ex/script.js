function car() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`


    if (hora >= 0 && hora < 12) {
        img.src = 'dia.png';
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora < 18){
    img.src ='diaa.png';
    document.body.style.background = '#b986f'

    } else {
        img.src = 'noite.png'
        document.body.style.background = '#515154'

    }
     
}

