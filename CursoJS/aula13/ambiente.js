var c = 1

//teste logico no inicio
while(c <= 6) {
    console.log('Tudo bem?')
    c++
}

//teste logico no final
do {
    console.log('Tudo bem?')
    c++
} while (c <= 6)

pedacos = 8
function comerfatia(){
        comerfatia()
}

function comerpizza(){
    while (pedacos !=0){
        console.log('Comi uma fatia de pizza')
        pedacos--
    }
}
  
comerpizza()

