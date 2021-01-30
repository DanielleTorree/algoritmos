function executar(){
    var fa = document.getElementById('txta')
    var fb = document.getElementById('txtb')
    var fc = document.getElementById('txtc')
    var fd = document.getElementById('txtd')

    var a = Number(fa.value)
    var b = Number(fb.value)
    var c = Number(fc.value)
    var d = Number(fd.value)

    if(fa.value.length == 0 || fb.value.length == 0 || fc.value.length == 0 || fd.value.length == 0 || a < 0 || b < 0 || c < 0 || d < 0){
        window.alert('[ERRO] Verifique os dados digitados e tente novamente!')
    } else{
        var res = document.getElementById('res')

        if(a % 2 == 0 && a % 3 == 0){
            res.innerHTML += `O valor ${a} é divisível por 2 e 3 <br>`
        }
        if(b % 2 == 0 && b % 3 == 0){
            res.innerHTML += `O valor ${b} é divisível por 2 e 3 <br>`
        }
        if(c % 2 == 0 && c % 3 == 0){
            res.innerHTML += `O valor ${c} é divisível por 2 e 3 <br>`
        }
        if(d % 2 == 0 && d % 3 == 0){
            res.innerHTML += `O valor ${d} é divisível por 2 e 3`
        }

    }
}