// function fatoria(n) {
//     let fat =1 
//     for(let c = n; c > 1;c-- ){
//         fat *= c

//     }
//     return fat
// }
// console.log(fatoria(123))

// fatoria de outra maneira com recursividade
function  fatorial(n){
    if(n ==1){
        return 1 
    }else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(20))