function calcular(){
    var ft = window.document.getElementById('txtt')
    var fv = window.document.getElementById('txtv')

    if(ft.value.length == 0 || fv.value.length == 0 || Number(ft.value) <= 0 || Number(fv.value) <= 0){
        window.alert('[ERRO] Verifique os dados digitados e tente novamente')
    } else{
        var t = Number(ft.value)
        var v = Number(fv.value)
        var res = window.document.getElementById('res')
        var d = v*t
        var litrosU = d/12

        res.innerHTML = `d = ${d} km <br>`
        res.innerHTML += `Litros usados = ${litrosU.toFixed(2).replace('.', ',')} L <br>`
        res.innerHTML += `Vm = ${v} km/h <br>`
        res.innerHTML += `t = ${t} h`


    }
}