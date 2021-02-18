function enviar(){
    let fn1 = document.getElementById('txtn1')
    let fn2 = document.getElementById('txtn2')
    let fn3 = document.getElementById('txtn3')
    let fn4 = document.getElementById('txtn4')
    let fn5 = document.getElementById('txtn5')

    if(fn1.value.length == 0 || fn2.value.length == 0 || fn3.value.length == 0 || fn4.value.length == 0 || fn5.value.length == 0){
        window.alert('[ERRO] Verifique os dados digitados e tente novamente!')
    } else{
        let res = document.getElementById('res')

        let n1 = Number(fn1.value)
        let n2 = Number(fn2.value)
        let n3 = Number(fn3.value)
        let n4 = Number(fn4.value)
        let n5 = Number(fn5.value)

        let maior = n1

        if(n2 > maior){
            maior = n2
        }
        if(n3 > maior){
            maior = n3
        }
        if(n4 > maior){
            maior = n4
        }
        if(n5 > maior){
            maior = n5
        }

        let menor = n1
        
        if(n2 < menor){
            menor = n2
        }
        if(n3 < menor){
            menor = n3
        }
        if(n4 < menor){
            menor = n4
        }
        if(n5 < menor){
            menor = n5 
        }
        
        res.innerHTML = `Maior = ${maior} <br> Menor = ${menor}`
    }
}