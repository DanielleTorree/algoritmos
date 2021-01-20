function calcular(){
    var fn = document.getElementById('txtn')
    var res = document.getElementById('res')

    if(fn.value.length == 0){
        window.alert('[ERRO] Preencha o campo para prosseguir!')
    } else{
        var n = Number(fn.value)
        var elevado = n**2

        res.innerHTML = `${elevado}`

    }

    
}