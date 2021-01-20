function calcular(){
    let fc = document.getElementById('txtc')
    let fl = document.getElementById('txtl')
    let fa = document.getElementById('txta')

    if(fc.value.length == 0 || fl.value.length == 0 || fa.value.length == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var res = document.getElementById('res')

        let c = Number(fc.value)
        let l = Number(fl.value)
        let a = Number(fa.value)

        var volume = c*l*a

        res.innerHTML = `VOLUME = COMPRIMENTO x LARGURA x ALTURA <br>`
        res.innerHTML += `VOLUME = ${volume} m³`

    }
}