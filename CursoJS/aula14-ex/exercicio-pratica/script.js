function calcular(){
    var num1 = document.getElementById('numero1')
    var num2 = document.getElementById('numero2')
    var res = document.getElementById('res')

    if (num1.value.length == 0 || num2.value.length == 0){
        window.alert('[ERRO] Preencher os dois campos de numero para fazer operação!')
    } else {
        var n1 = Number(num1.value)
        var n2 = Number(num2.value)
        var formOp = document.getElementsByName('radop')

        if (formOp[0].checked){
            res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${n1+n2}`
        } else if (formOp[1].checked){
            res.innerHTML = `A subtração entre ${n1} e ${n2} é igual a ${n1-n2}`
        } else if (formOp[2].checked){
            res.innerHTML = `A multiplicação entre ${n1} e ${n2} é igual a ${n1*n2}`
        } else {
            res.innerHTML = `A divisão entre ${n1} e ${n2} é igual a ${(n1/n2).toFixed(2)}`
        }

    }
}