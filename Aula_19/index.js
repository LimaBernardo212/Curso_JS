function parOuImpar(n){
    if (n % 2 == 0){
        return "PAR"
    }
    else if(n % 2 == 1){
        return "IMPAR"
    }
    else{
        console.log('Dado invalido')
        return "INVALIDO!"
    }
}
let res = parOuImpar(-1)
if (res == "INVALIDO!"){
    console.log("INVALIDO! TENTE NOVAMENTE :<")
}
else{
    console.log(`O número é ${res}`)
}
function soma(n1=0, n2=0){
    n1 = Number(n1)
    n2 = Number(n2)
    return `${n1+n2}`
}
console.log(`O dobro do resultado de SOMA e ${soma(15, 2)}`)
function factorial(fact){
    var f = 1
    for (var c = fact; c > 1; c--){
        f = f * c
       
    }  
    console.log(`${f}`)
}
factorial(3)

