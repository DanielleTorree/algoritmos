function calcular(){
    var fd = document.querySelector('input#txtd')
    var ft = document.querySelector('input#txtt')

    if(fd.value.length == 0 || ft.value.length == 0 || Number(fd.value) <= 0 || Number(ft.value) <= 0){
        window.alert('[ERRO] Verifique pos dados digitados e tente novamente')
    } else{
        var d = Number(fd.value)
        var t = Number(ft.value)
        var velocidade = d/t

        var res = document.querySelector('div#res')

        res.innerHTML = `VELOCIDADE = DISTÂNCIA / TEMPO <br>`
        res.innerHTML += `VELOCIDADE = ${velocidade.toLocaleString()} m/s`

    }
} 