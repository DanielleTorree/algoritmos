function executar(){
    var res = document.getElementById('res')
    
    var pot = 3

    for(var i = 0; i <= 15; i++){
        var resp = 3**i
        res.innerHTML += `${pot} ^ ${i} = ${resp} <br>`
    }
}