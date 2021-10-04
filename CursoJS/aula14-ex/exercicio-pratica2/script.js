function estacoes(){
    var est = document.getElementById('box_estacoes')
    var formEst = document.getElementsByName('radest') 
    var rodape = document.getElementById('rodape')   

    if (formEst[0].checked){
        est.innerText = `Primavera \u{1F33C}` 
        est.classList.add('txtprimavera')
        est.classList.remove('box_branco')
        document.body.classList.add('primavera')
        rodape.innerText = ''
    } else if (formEst[1].checked){
        est.innerText = 'escolhi verao'
    } else if (formEst[2].checked){
        est.innerText = 'escolhi outono'
    } else {
        est.innerText = 'escolhi inverno'
    }
} 



        