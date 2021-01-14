function resultado(){
    var fa = window.document.getElementById('txta')
    var fb = window.document.getElementById('txtb')
    var fc = window.document.getElementById('txtc')
    var fd = window.document.getElementById('txtd')

    if(fa.value.length == 0 || fb.value.length == 0 || fc.value.length == 0 || fd.value.length == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var resolucao = window.document.getElementById('resolucao')
        var calc = window.document.getElementsByName('radCalc')
        
        var a = Number(fa.value)
        var b = Number(fb.value)
        var c = Number(fc.value)
        var d = Number(fd.value)

        if(calc[0].checked){
            resolucao.innerHTML = `A + B = ${a+b} <br> A + C = ${a+c} <br> A + D = ${a+d} <br> B + C = ${b+c} <br> B + D = ${b+d} <br> C + D = ${c+d} <br>`
        } else if(calc[1].checked){
            resolucao.innerHTML = `A x B = ${a*b} <br> A x C = ${a*c} <br> A x D = ${a*d} <br> B x C = ${b*c} <br> B x D = ${b*d} <br> C x D = ${c*d}`
        }
    }
}