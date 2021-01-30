function calcular(){
    let fa = document.querySelector('input#txta')
    let fb = document.querySelector('input#txtb')

    if(fa.value.length == 0 || fb.value.length == 0){
        window.alert('[ERRO] Verifique os dados digitados para continuar!')
    } else{
        let res = document.querySelector('div#res')

        var a = Number(fa.value)
        var b = Number(fb.value)

        var d = (a/b)**2

        res.innerHTML = `D = (A/B)² <br> D = ${d}`

    }

}