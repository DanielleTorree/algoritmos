function executar(){
    var res = document.getElementById('res')

    var grao = 0
    var quadro = 1

    for(var i = 1; i <= 64; i++){
        grao = grao + quadro

        quadro = quadro * 2

        res.innerHTML += `${grao} <br>`
    }
}