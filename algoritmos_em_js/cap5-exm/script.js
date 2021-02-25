function executar(){
    var res = document.getElementById('res')

    var soma = 0
    var media = 0

    for(var c = 1; c <= 10; c++){
        var n = window.prompt('Digite um número: ')

        soma = soma + n
        
    }

    media = soma / 10
    res.innerHTML = `SOMA = ${soma} <br> MÉDIA = ${media}`
}