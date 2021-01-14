function calcular(){
    var fValor =  window.document.getElementById('txtValor')
    var fTaxa = window.document.getElementById('txtTaxa')
    var fTempo = window.document.getElementById('txtTempo')

    var valor = Number(fValor.value)
    var taxa = Number(fTaxa.value)
    var tempo = Number(fTempo.value)

    if(fValor.value.length == 0 || fTaxa.value.length == 0 || fTempo.value.length == 0 || valor <= 0 || taxa <= 0 || tempo <= 0){
        window.alert('[ERRO] Verifique os dados digitados e tente novamente!')
    }  else{
        var res = window.document.getElementById('res')
        var prestacao = valor + (valor*(taxa/100)*tempo)

        var prestacaoReal = prestacao.toLocaleString('pt-BR', {style:'currency',currency:'BRL'})

        res.innerHTML = `Sua dívida de ${valor.toLocaleString('pt-BR', {style:'currency',currency:'BRL'})} ficou por ${prestacaoReal}`
    }
}