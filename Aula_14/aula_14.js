var fatias = 0
while (fatias <= 150){
    console.log(`Fatias comidas ${fatias}`)
    fatias ++
}
var seg = 0
var data = new Date
var horario = data.getSeconds()
do{
    if (horario >= 0){
    console.log(`Segundos ${seg}`)
    seg ++
}
}while (seg <= 60)
console.log('1 minuto')
