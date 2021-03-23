function executar() {
    var listaNome = []

    for (var i = 0; i < 5; i++) {
        listaNome.push(window.prompt('Digite um nome: '))
    }

    for (var i = 0; i < listaNome.length; i++) {

        var min = i;

        for (var j = i + 1; j < listaNome.length; j++) {
            if (listaNome[min] > listaNome[j]) {
                min = j
            }
        }

        var temp = listaNome[i]
        listaNome[i] = listaNome[min]
        listaNome[min] = temp
    }

    console.log(listaNome)
}