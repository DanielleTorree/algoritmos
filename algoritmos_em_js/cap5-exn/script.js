function executar(){
    var res = document.getElementById('res')
    var soma = 0
    var total = 0

    do{
        var n = window.prompt('Digite um valor: ')

        if(n > 0){
            soma = soma + Number(n)
            total = total + 1
        }
    }while(n >= 0)

    if(total > 0){
        var media = soma / total
    }

    res.innerHTML = `Soma = ${soma} <br> Média = ${media} <br> Números positivos lidos = ${total} `
}