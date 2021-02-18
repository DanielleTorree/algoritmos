function executar(){
    var fnum = document.getElementById('txtnum')
    var num = Number(fnum.value)

    var res = document.getElementById('res')

    res.innerHTML = ``

    if(fnum.value.length == 0){
        alert('[ERRO] Digite um número para prosseguir!')
    } else{
        for(var cont = 1; cont <= 10; cont++){
            res.innerHTML += `${num} x ${cont} = ${num*cont} <br>`
        }
    }
}