function executar(){
    var res = document.getElementById('res')
    for(var c = 15; c <= 200; c = c + 3){
        var quadrado = c**2

        res.innerHTML += `${c}*${c} = ${quadrado} <br>`
    }

}