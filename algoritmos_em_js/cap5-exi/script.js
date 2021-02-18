function executar(){
    var anterior = 0
    var atual = 1
    var res = document.getElementById('res')

    for(var i = 0; i <= 15; i++){

        var proximo = anterior + atual
        anterior = atual
        atual = proximo
    
        res.innerHTML += `${proximo} <br>`
        console.log(`${proximo}`)
    }
    
    
}