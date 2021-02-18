function executar(){
    var res = document.getElementById('res')
    var numI = 0
    for(var cont = 1; cont <= 20; cont++){
        if(cont%2!=0){
            numI = cont

            res.innerHTML += `${numI} <br>`
        }
    }
}