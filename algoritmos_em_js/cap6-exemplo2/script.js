function executar(){
    var res = document.getElementById('res')

    var array = [15, 20, 35, 40]
    var total = 0

    res.innerHTML = `${array.length} <br>`

    for(var i = 0; i <= 3 /*array.length*/; i++){
        
        if(array[i] % 2 != 0){
            total = total + array[i]
        }
    }

    res.innerHTML += total
}