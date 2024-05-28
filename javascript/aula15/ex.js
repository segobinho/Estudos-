let num = [5,8,2,9,3]
num.push(7)
num.length
num.sort()
console.log(`noso vetor e o ${num}`)
console.log (`o primeiro valor do vetor é ${num[1]}`)
console.log(num)

for(let pos = 0;pos<num.length;pos++){
    console.log(` a poisxca ${num[pos]}`)
}

for(let pos in num){
    console.group(num[pos])
}
// so funciona para arrays e objetos 