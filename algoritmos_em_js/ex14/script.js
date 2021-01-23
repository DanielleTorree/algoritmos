function calcular(){
    var fraio = document.getElementById('txtraio')

    var res = document.getElementById('res')

    if(fraio.value.length == 0 || Number(fraio.value) <= 0){
        window.alert('[ERRO] Verifique o valor digitado e tente novamente!')
    } else{
        var raio = Number(fraio.value)
        var pi = 3.14159265

        var area = (pi * (raio**2))

        res.innerHTML = `ÁREA = pi * r² <br>`
        res.innerHTML += `ÁREA = ${area.toFixed(2).replace('.', ',')} cm²`
    }
}