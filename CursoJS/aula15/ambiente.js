let num = [5, 8, 3]
console.log(num)

num[3] = 12
console.log(num)

num.push(7) //para adicionar um elemento no final do array independente do indice final 
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)

let pos = num.indexOf(8)

if (pos == -1){
    console.log("Valor não encontrado")
} else {
    console.log(`O valor 8 está na posição  ${pos}`)
} 


