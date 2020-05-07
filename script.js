function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById ('res')
    if (fano.value.length == 0 || fano.value > ano) {window.alert('Seu ano de nascimento está incorreto. Verifique e tente novamente.')}
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {genero = 'Homem'
        if (idade >=0 && idade < 10) {

            img.setAttribute('src', 'meninocortado.png')

        }  else if (idade < 20) {

            img.setAttribute('src', 'jovemhomemcortado.png')

        }  else if (idade < 50) {

            img.setAttribute('src', 'homemcortado.png')

        } else {

                img.setAttribute('src', 'senhorcortado.png')

            }
        
    
    
    } else if (fsex[1].checked) {genero = 'Mulher'
        if (idade >=0 && idade < 10) {

            img.setAttribute('src', 'meninacortada.png')

        }  else if (idade < 20) {

            img.setAttribute('src', 'jovemmulhercortada.png')

        }  else if (idade < 50) {

            img.setAttribute('src', 'adultamulhercortada.png')

        } else {

                img.setAttribute('src', 'senhoracortada.png')

            }
        
    }
    
    
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild (img)

    }
}