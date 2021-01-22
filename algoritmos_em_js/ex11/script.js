function calcular(){
    var fa = document.getElementById('txta')
    var fb = document.getElementById('txtb')
    var fc = document.getElementById('txtc')

    var res = document.getElementById('res')

    if(fa.value.length == 0 || fb.value.length == 0 || fc.value.length == 0){
        window.alert('[ERRO] Preencha todos os campos para prosseguir!')
    } else{
        var a = Number.parseInt(fa.value)
        var b = Number.parseInt(fb.value)
        var c = Number.parseInt(fc.value)
        res.innerHTML = `A soma dos quadrados dos três valores lidos é ${((a**2) + (b**2) + (c**2))}. <br>`
        res.innerHTML += `O quadrado da soma dos três valores lidos é ${(a + b + c)**2}.`
    }
}