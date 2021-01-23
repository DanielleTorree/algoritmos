function verificar(){
    var fa = document.getElementById('txta')
    var fb = document.getElementById('txtb')
    var fc = document.getElementById('txtc')
    var fnulo = document.getElementById('txtnulo')
    var fbranco = document.getElementById('txtbranco')

    if(fa.value.length == 0 || fb.value.length == 0 || fc.value.length == 0 || fnulo.value.length == 0 || fbranco.value.length == 0 || Number(fa.value) < 0 || Number(fb.value) < 0 || Number(fc.value) < 0 || Number(fnulo.value) < 0 || Number(fbranco.value) < 0){
        window.alert('[ERRO] Verifique os dados digitados para prosseguir!')
    } else{
        var a = Number(fa.value)
        var b = Number(fb.value)
        var c = Number(fc.value)
        var nulo = Number(fnulo.value)
        var branco = Number(fbranco.value)

        var totalEleitores = a+b+c+nulo+branco 

        //perc = percentual
        var aperc = a*100/totalEleitores
        var bperc = b*100/totalEleitores
        var cperc = c*100/totalEleitores
        var nuloperc = nulo*100/totalEleitores
        var brancoperc = branco*100/totalEleitores

        var res = document.getElementById('res')

        res.innerHTML = `<p style="text-align:center;"><strong>Quantidade de votos válidos</strong></p>`
        res.innerHTML += `<p>Candidato A: ${a} votos <br> Candidato B: ${b} votos <br> Candidato C: ${c} votos`

        res.innerHTML += `<p style="text-align:center;"><strong>Quantidade de votos nulos</strong></p>`
        res.innerHTML += `${nulo} votos`

        res.innerHTML += `<p style="text-align:center;"><strong>Quantidade de votos em branco</strong></p>`
        res.innerHTML += `${branco} votos`

        res.innerHTML += `<p style="text-align:center;"><strong>Número total de eleitores</strong></p>`
        res.innerHTML += `${totalEleitores} eleitores`

        res.innerHTML += `<p style="text-align:center;"><strong>Percentual de votos válidos</strong></p>`
        res.innerHTML += `<p>Cndidato A: ${aperc.toFixed(2).replace('.', ',')}% <br> Candidato B: ${bperc.toFixed(2).replace('.', ',')}% <br> Candidato C: ${cperc.toFixed(2).replace('.', ',')}%</p>`

        res.innerHTML += `<p style="text-align:center;"><strong>Percentual de votos nulos</strong></p>`
        res.innerHTML += `<p>${nuloperc.toFixed(2).replace('.',',')}%</p>`

        res.innerHTML += `<p style="text-align:center;"><strong>Percentual de votos em branco</strong></p>`
        res.innerHTML += `<p>${brancoperc.toFixed(2).replace('.', ',')}%</p>`

    }
}