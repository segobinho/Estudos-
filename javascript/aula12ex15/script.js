function verificar () {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('erro veriique os dados ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'dia.png')
            }else if(idade < 30) {
                img.setAttribute('src', 'diaa.png')

            }else  {
                img.setAttribute('src', 'noite.png')
            }
        } else if (fsex[1].checked) {
            genero ='mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'dia.png')
            }else if(idade < 30) {
                img.setAttribute('src', 'diaa.png')

            }else  {
                img.setAttribute('src', 'noite.png')
            }
        }







        res.style.textAlign = 'center'
        res.innerHTML = `detecmaos ${genero} com  ${idade} anos.`
        res.appendChild(img)
    }

}
    