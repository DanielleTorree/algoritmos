function executar(){
    let fa = document.getElementById('txta')
    let fb = document.getElementById('txtb')
    let fc = document.getElementById('txtc')

    let a = Number(fa.value)
    let b = Number(fb.value)
    let c = Number(fc.value)

    if(fa.value.length == 0 || fb.value.length == 0 || fc.value.length == 0 || a == 0){
        window.alert('[ERRO] Verifique os dados digitados e tente novamente!')
    } else{
        let d = ((b**2) - (4*a*c))

        let x1 = (-b + (d**(1/2)))/(2*a)
        let x2 = (-b - (d**(1/2)))/(2*a)

        let res = document.getElementById('res')

        if(d < 0){
            res.innerHTML = `Não há soluções reais!`
        } else if(d == 0){
            res.innerHTML = `Há apenas uma solução real! <br> X = ${x1}`
        } else{
            res.innerHTML = `Há duas soluções reais! <br> X1 = ${x1} e X2 = ${x2}`
        }

    }
}