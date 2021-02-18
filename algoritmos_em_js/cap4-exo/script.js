function executar(){
    let fn = document.getElementById('txtn')

    if(fn.value.length == 0){
        window.alert('[ERRO] Digite um número para prosseguir!')
    } else{
        let res = document.getElementById('res')
        
        let n = Number(fn.value)
        let multiplicacao = n*2
        
        if(multiplicacao > 30){
            res.innerHTML = `Resultado = ${multiplicacao} <br> O resultado só foi exibido, pois é maior que 30.`
        } else{
            res.innerHTML = `O resultado não foi exibido, pois não é maior que 30.`
        }
    }
}