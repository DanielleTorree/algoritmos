function executar(){
    var soma = 0

    var res = document.getElementById('res')
    
    for(var cont = 1; cont <= 100; cont++){    
        soma = soma + cont
    }

    res.innerHTML = `${soma}`


}