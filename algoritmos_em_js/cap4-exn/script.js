function somar(){
    let fna = document.getElementById('txtna')
    let fnb = document.getElementById('txtnb')
    let fnc = document.getElementById('txtnc')

    if(fna.value.length == 0 || fnb.value.length == 0 || fnc.value.length == 0){
        window.alert('[ERRO] Digite nos campos em branco para prosseguir!')
    } else{
        let res = document.getElementById('res')

        let na = Number(fna.value)
        let nb = Number(fnb.value)
        let nc = Number(fnc.value)

        soma = na+nb+nc

        if(soma >= 100){
            res.innerHTML = `Soma = ${soma} <br> O resultado foi exibido, pois a soma é maior ou igual a 100.`
        } else{
            res.innerHTML = `O resultado da soma não foi exibido, pois a soma não foi maior ou igual a 100.` 
        }
    }
}