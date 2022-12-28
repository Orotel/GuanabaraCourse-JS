// array
let num = [5,8,4]
console.log(num)

// acrescentar
// push
num.push(7)
console.log(num)
console.log(num.length)

//Ordem crescente
console.log(num.sort())

// Percurso por uso da repitição
for(let pos = 0;pos<num.length;pos++){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
// Percurso automatizado
    for(let int in num){
        console.log(` ${int} para ${num[int]}`)
    }

// Buscar valor dentro de vetor
console.log(num.indexOf(4))// mostra a posição do indice 