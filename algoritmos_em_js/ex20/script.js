function calcular(){
    let fpe = document.getElementById('txtpe')

    if(fpe.value.length == 0 || Number(fpe.value) <= 0){
        window.alert('[ERRO] Verifique o número digitado e tente novamente!')
    } else{
        let res = document.getElementById('res')
        
        let pe = Number(fpe.value)
        let eqm = 0.3048

        var metros = eqm*pe

        res.innerHTML = ` Medida equivalente me metros = ${metros.toLocaleString()}`
    }
}