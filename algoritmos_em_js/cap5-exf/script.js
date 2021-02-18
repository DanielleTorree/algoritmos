function executar(){
    var res = document.getElementById('res')
    var num = 0

    for(var i = 1; i <= 200; i++){
        if(i%4==0){
            num = i
            res.innerHTML += `${num}<br>`
        }
    }
}