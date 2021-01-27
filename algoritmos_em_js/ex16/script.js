function calcular(){
    var fa = document.querySelector('input#txta')
    var fb = document.querySelector('input#txtb')

    if(fa.value.length == 0 || fb.value.length == 0){
        window.alert('[ERRO] Preencha o campo vazio para continuar!')
    } else{
        var a = Number(fa.value)
        var b = Number(fb.value)

        var res = document.querySelector('div#res')

        var soma = a+b
        var subtracao = a-b
        var multiplicacao = a*b
        var divisao = a/b

        res.innerHTML = `A + B = ${soma.toLocaleString()} <br> A - B = ${subtracao.toLocaleString()} <br> A x B = ${multiplicacao.toLocaleString()} <br> A / B = ${divisao.toLocaleString()} `
    }
}

