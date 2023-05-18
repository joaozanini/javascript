let num = [4, 5, 7]
console.log(num)

//colocar em pos específica
num[3] = 8
console.log(num)

//colocar com push (na última posição)
num.push(3)

//tamanho do array
console.log(num.length)

//array em ordem
console.log(num.sort())

// cada elemento do array
for (let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

//ou

for (let pos in num){
    console.log(num[pos])
}