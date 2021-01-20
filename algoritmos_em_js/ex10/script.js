function confirmar(){
    //DER = DÓLAR EQUIVALE REAL
    let fDER = document.getElementById('txtDER')
    if(fDER.value.length == 0 || Number(fDER.value) <= 0){
        window.alert('[ERRO] Digite novamente um valor!')
    } else{
        var DER = Number(fDER.value) 
        var res1 = document.getElementById('res1')
        res1.innerHTML = `US$ 1,00 (Dólar) é igual a ${DER.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})} (Real)`
    }
}
function convertR(){
    var fdolar = document.getElementById('txtdolar')

    if(fdolar.value.length == 0 || Number(fdolar.value) <= 0){
        window.alert('[ERRO] Digite novamente um valor!')
    } else{
        var DER = document.getElementById('txtDER')

        alert(Number(fdolar.value)*Number(DER.value))
    }
}