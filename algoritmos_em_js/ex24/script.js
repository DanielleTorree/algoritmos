function calcular(){
    let fa = document.querySelector('input#txta')
    let fb = document.querySelector('input#txtb')

    let res = document.querySelector('div#res')

    if(fa.value.length == 0 || fb.value.length == 0){
        window.alert('[ERRO] Digite um número para prosseguir!')
    } else{
        var a = Number(fa.value)
        var b = Number(fb.value)
        
        var maior = a > b ? a - b : b - a

        res.innerHTML = `D = ${maior}`


    }
}