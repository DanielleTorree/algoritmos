function calcular(){
    var fv1 = document.getElementById('txtv1')
    var fv2 = document.getElementById('txtv2')

    if(fv1.value.length == 0 || fv2.value.length == 0){
        window.alert('[ERRO] Preencha os dados para prosseguir!')
    } else{
        var v1 = Number(fv1.value)
        var v2 = Number(fv2.value)

        var res = document.getElementById('res')

        var diferenca = (v1 - v2)**2

        res.innerHTML = `Quadrado da diferenca = ${diferenca}`
    }
}