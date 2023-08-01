function clicare(){
    var ini = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var pass = Number(document.getElementById('passo').value)
    var res= document.getElementById('res')
    
    if (ini == 0 && fim == 0 || fim == 0 || pass == 0){
        window.alert('FALTAM NÚMERO, zero não valido!!')
        res.innerHTML = ''
    }
    else{
        if (fim > ini){
            res.innerHTML = 'Contando...'
            for(var c = 1; c <= fim ; c += pass){
                res.innerHTML += ` ${c}\n \u{1F449}`
        }
        
        }   
        else{
            res.innerHTML += 'Contando...'
            for(var cont = ini; cont >= fim;cont -= pass){
                
                res.innerHTML += `${cont}\u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    }
    