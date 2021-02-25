function executar(){
    var res = document.getElementById('res')
    
    for(var i = 1; i <= 10; i++){
        var fat = 1

        if(i%2!= 0){
            for(var c = 1; c <= i; c++){
                fat = fat * c
            }
            res.innerHTML += `${fat} <br>`
        }
    }
}

/* 
FATORIAL
1! = 1
3! = 6
5! = 120
7! = 5.040
9! = 362.880
*/