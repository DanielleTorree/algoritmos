function executar(){
    var res = document.getElementById('res')

    var soma = 0

    for(var i = 1; i <= 15; i++){
        var perg = window.prompt('Digite um número: ')
        var fat = 1

        for(var c = 1; c <= perg; c++){
            fat = fat * c
        }

        soma = soma + fat
        res.innerHTML = `Soma = ${soma}`

    }
}