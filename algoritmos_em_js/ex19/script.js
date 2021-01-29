function calcular(){
    var fbas = document.getElementById('txtbas')
    let fpot = document.querySelector('input#txtpot')

    let res = document.getElementById('res')

    let base = Number(fbas.value)
    let pot = Number(fpot.value)

    //todo número elevado a 0 é igual a 1
    //todo número elevado a 1 é igual ao próprio número
    //3^-1 = (1/3)^1 = 1/3

    if(fbas.value.length == 0 || fpot.value.length == 0){
        window.alert('[ERRO] Preencha o campo para prosseguir!')
    } else {
        res.innerHTML = `BASE ^ POTÊNCIA = ${base**pot}`
    }
}