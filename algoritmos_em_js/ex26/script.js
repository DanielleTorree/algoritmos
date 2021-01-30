function executar(){
    let fn1 = document.getElementById('txtn1')
    let fn2 = document.getElementById('txtn2')
    let fn3 = document.getElementById('txtn3')
    let fn4 = document.getElementById('txtn4')

    let n1 = Number(fn1.value)
    let n2 = Number(fn2.value)
    let n3 = Number(fn3.value)
    let n4 = Number(fn4.value)

    if(fn1.value.length == 0|| fn2.value.length == 0 || fn3.value.length == 0 || fn4.value.length == 0 || n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0){
        window.alert('[ERRO] Verifique os dados digitados e tente novamente!')
    } else{
        let res = document.getElementById('res') 

        let media = (n1 + n2 + n3 + n4) / 4

        var aprOuRep = media > 5 ? 'APROVADO' : 'REPROVADO'

        res.innerHTML = `VOCÊ ESTÁ <strong>${aprOuRep}</strong>`
    }
}