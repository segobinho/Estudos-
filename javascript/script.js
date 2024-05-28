/*var n = 1
var s = 1
var res = ""
for(var c = n; s <=10; s++ ) {

    var c = c * s 
    res.log += `${c} \u{1F449} `

}
*/
var n = 5;
var s = 1;
var res = "";

for (s = 1; s <= 10; s++) {
    var c = n * s;
    res += `${n} x ${s} = ${c} \u{1F449} `;
}

console.log(res);

