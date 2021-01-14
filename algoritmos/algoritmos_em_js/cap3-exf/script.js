function trocar(){
    var fa = window.document.getElementById('txta')
    var fb = window.document.getElementById('txtb')

    if(fa.value.length == 0 || fb.value.length == 0){
        window.alert('[ERRO] Digite um número para prosseguir!')
    } else{
        var a = Number(fa.value)
        var b = Number(fb.value)
        var c = 0

        var res = window.document.getElementById('res')

        var c = a
        var a = b
        var b = c

        res.innerHTML = `A = ${a} e B = ${b}`
    }
}