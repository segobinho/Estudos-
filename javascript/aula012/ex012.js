var agora =  new Date()
var hora = agora.getHours()
console.log (`agora sao exatamente ${hora}`)
if (hora <12 ) {
    console.log('dia')
}else if (hora <= 18) {
    console.log('tarde')
}else {
    console.log(`boa noita`)

}