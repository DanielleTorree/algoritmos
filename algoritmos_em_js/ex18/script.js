function calcular(){
    var fr = document.querySelector('input#txtr')

    if(fr.value.length == 0 || Number(fr.value) <= 0){
        window.alert('[ERRO] Verifique o número digitado e tente novamente!')
    } else{
        var r = Number(fr.value)

        var res = document.querySelector('div#res') 

        const pi = 3.14159
        var volumeEsfera = (4/3)*pi*(r**3)

        res.innerHTML = `VOLUME = 4/3 x pi x raio³ <br>`
        res.innerHTML += `VOLUME = ${volumeEsfera.toLocaleString()} cm³`
    }
}