function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <=7) {
                // criança ...7
                img.setAttribute('src','criancaH1...7.png')
            }else if (idade >= 8 && idade <=14) {
                //criança ...14
                img.setAttribute('src','crianca8...14.png')
            }
            else if (idade >= 15 && idade <=40) {
                //adulto ...40
                img.setAttribute('src','homemjovem.png')
            }
            else if (idade >= 41 && idade <=59) {
                //adulto ... 59
                img.setAttribute('src','homem44.png')
            }
            else{
                //velho
                img.setAttribute('src','homem60.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <=7) {
                // criança ...7
                img.setAttribute('src','criancaM1...7.png')
            }else if (idade >= 8 && idade <=14) {
                //criança ...14
                img.setAttribute('src','criancamulher8...4.png')
            }
            else if (idade >= 15 && idade <=40) {
                //adulto ...40
                img.setAttribute('src','mulherjovem.png')
            }
            else if (idade >= 41 && idade <=59) {
                //adulto ... 59
                img.setAttribute('src','mulher44.png')
            }
            else{
                //velho
                img.setAttribute('src','mulher60.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}