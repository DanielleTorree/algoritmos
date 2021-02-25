function executar(){
    var res = document.getElementById('res')

    var soma = 0
    var total = 0

    for(var i = 50; i <= 70; i ++){
        if(i%2==0){
            soma = soma + i
            total = total + 1
        }
    }
    
    var media = soma / total

    res.innerHTML = `Soma = ${soma} <br> Média = ${media}`
}