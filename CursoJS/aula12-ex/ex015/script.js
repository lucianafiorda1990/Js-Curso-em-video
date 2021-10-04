function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = window.document.getElementById("txtano")
    var res = window.document.querySelector('div#res')

    if (formAno.value.length == 0 || Number(formAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        //res.innerHTML = `Idade calculada: ${idade}` - só pra conferir a idade
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        
        if (formSex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <= 13){
                //criança 
                img.setAttribute('src', 'foto-crianca-m.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png') 
            } else if (idade < 50){
                //adulto 
                img.setAttribute('src','foto-adulto-m.png')
            } else {
                //idoso 
                img.setAttribute('src','foto-idoso-m.png')
            }
        } else if (formSex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 13){
                //criança 
                img.setAttribute('src', 'foto-crianca-f.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade <50){
                //adulto
                img.setAttribute('src','foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}