function contar(){
    var inicio = window.document.getElementById("txti")
    var fim = window.document.getElementById("txtf")
    var passo = window.document.getElementById("txtp")
    var res = window.document.getElementById("res")
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] Faltam dados!")
        res.innerHTML = "Impossível contar, verificar dados..."
    } else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number (fim.value)
        var p = Number (passo.value)
        
        if (p <= 0){
            window.alert('Passo inválido, considerando como passo = 1')
            p = 1
        }
 
        if (i < f){
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{27A1}`
            }
        } else{
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{27A1}`
            }  
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
