var num = document.getElementById('valor')
var c = 1
var a = document.getElementById('nome')
function clic(){
    var num = document.getElementById('valor')
    var n = Number(num.value)
    for (c == 1; c <= 10; c += 1){
        var item = document.createElement('option')
        item.text =  `${n}x${c}=${n*c}`
        document.getElementById('setao').appendChild(item)
    }
}