// Math.sqrt(9); // 3 --> obter direto a raiz quadrada

function calcular(){
    let fbas = document.getElementById('txtbas')
    let find = document.getElementById('txtind')
    let bas = Number(fbas.value)
    let ind = Number(find.value)

    if(fbas.value.length == 0 || find.value.length == 0 || bas < 0 || ind <= 0){
        window.alert('[ERRO] Verifique o número digitado e tente novamente!')
    } else{
        let res = document.getElementById('res')

        var raiz = bas ** (1/ind)

        res.innerHTML = `${raiz}`
    }

}