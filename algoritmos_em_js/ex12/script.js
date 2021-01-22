function calcular(){
    var fa = document.getElementById('txta')
    var fb = document.getElementById('txtb')
    var fc = document.getElementById('txtc')
    var fd = document.getElementById('txtd')

    var res = document.getElementById('res')

    if(fa.value.length == 0 || fb.value.length == 0 || fc.value.length == 0 || fd.value.length == 0){
        window.alert('[ERRO] Preencha todos os campos para prosseguir!')
    } else{
        var a = Number.parseInt(fa.value)
        var b = Number.parseInt(fb.value)
        var c = Number.parseInt(fc.value)
        var d = Number.parseInt(fd.value)

        res.innerHTML = `PRODUTO <br> ${a} x ${c} = ${a*c}<br><br>`
        res.innerHTML += `SOMA <br> ${b} + ${d} = ${b+d}`
    }
}