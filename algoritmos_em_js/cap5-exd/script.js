function executar(){
    var soma = 0

    var res = document.getElementById('res')

    for(var i = 1; i <= 500; i++){
        if(i%2==0){
            soma = soma + i
        }
    }

    res.innerHTML = `${soma}`
}