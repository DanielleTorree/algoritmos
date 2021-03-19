function executar(){
    var res = document.getElementById('res')
    var array = []

    for(var i = 0; i<= 3; i++){
        array.push(window.prompt('Digite um nome aqui: '))

        console.log(array[i])
    }
}