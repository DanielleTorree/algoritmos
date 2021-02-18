function executar(){
    var fbase = document.getElementById('txtbase')
    var fexpo = document.getElementById('txtexpo')

    var base = Number(fbase.value)
    var expo = Number(fexpo.value)

    var res = document.getElementById('res')

    if(fbase.value.length == 0 || fexpo.value.length== 0 || base < 0 || expo < 0){
        alert('[ERRO] Verifique os dados digitados e tente novamente!')
    } else{
        for(var i = 1; i <= expo; i++){
            var resposta = base ** i  
            
            console.log(`${base} ^ ${i}`)
        }
    }

    res.innerHTML = `${resposta}`
}