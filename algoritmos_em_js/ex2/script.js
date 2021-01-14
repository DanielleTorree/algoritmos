function calcular(){
    let fr = window.document.getElementById('txtr')
    let fa = window.document.getElementById('txta')

    if(fr.value.length == 0 || fa.value.length == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else if(Number(fr.value) < 0 || Number(fa.value) < 0){
        window.alert('Não é permitido números negativos!')
    } else{
        const pi = 3.14159
        var r = Number(fr.value)
        var a = Number(fa.value)
        var v = pi * (r**2) * a

        res.innerHTML = `${v.toFixed(2).replace('.', ',')} m³` 
    }
}