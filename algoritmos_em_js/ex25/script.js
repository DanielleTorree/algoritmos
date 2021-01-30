function executar(){
    let fnum = document.querySelector('input#txtnum')

    if(fnum.value.length == 0){
        window.alert('[ERRO] Digite um número para continuar!')
    } else{
        let res = document.querySelector('div#res')

        let num = Number(fnum.value)

        let positivo = num < 0 ? -num : num 

        res.innerHTML = positivo

    }

}