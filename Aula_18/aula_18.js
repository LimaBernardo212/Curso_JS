var a = [0]
console.log(a[0])
a.push(4,3,2,5)
for (var pos = 0;pos != a.length;pos++){
    console.log(`Número ${a[pos]}`)
    a.sort()
}
for ( var pos in a ){
    console.log(`Número ${a[pos]}`)
    a.push(a.splice(0,1)[0])
}
console.log(`${a}`)
console.log(`A quantidade itens e ${a.length}`)
console.log(`A nova ordem e ${a}`)
console.log(a.indexOf(3))