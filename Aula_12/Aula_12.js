var idade = 67
if (idade > 18 && idade < 66){
    console.log('Maior de idade! ADULTO!!VOOOTA!!')
}

else if (idade < 18 && idade >= 16){
    console.log('Menor de idade! VÁ AS URNAS PODE VOTAR!!! se quiser...')
    }
else if ( idade < 16){
        console.log('Menor de idade, VOLTE AS AULAS!!Não VOOOTA!!!')
    
}
else if (idade >= 66){
    console.log('APOSENTADO!! VOTO OPCIONAL vote se quiser sr. valdomiro......')
}
var agora = new Date()
var hora = Number(agora.getHours())
if (hora < 5.30){
    console.log('Boa, madrugada!')
}
else if (hora > 5.00 && hora < 12.00){
    console.log('Bom, dia! O sol já nasceu lá na fazendinha!')
}
else if(hora >= 12.30 && hora <= 17.00){
    console.log('Boa, tarde finos SENHORES?!?!')
}

else{
    console.log('Boa, noite... vou des..li...gar!?!...')
}
var valor = 2
switch (valor += 7) {
    case 14:
        console.log('O resultado e 14')
        break;
    case 8:
        conseole.log('O resultado e 8')
        break;
    case 7:
         console.log('O resultado e 7')
        break;
    default:
        console.log(`O resultado e ${valor}`)
        break;
}
