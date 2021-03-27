function executar(){
    var nome = ['Alex', 'Cicera', 'Danielle', 'Dayana', 'Jackson', 'Luiz', 'Marcela', 'Nicole', 'Pablo', 'Washington']

    do{
        var pergNome = window.prompt('Qual nome você deseja encontrar? ')

        var comeco = 1
        var final =  10
        var achaNome = false

        while(comeco <= final && achaNome == false){
            var meio = (comeco + final)/2
            var meioA = Math.floor(meio)
            
            if(pergNome == nome[meioA]){
                achaNome = true
            } else if(pergNome  < nome[meioA]){
                final = meioA - 1
            } else{
                comeco = meioA + 1
            }
        }

        if(achaNome == true){
            window.alert(`O nome ${pergNome} foi localizado na posição ${Math.floor(meioA)}`)
        } else{
            window.alert(`O nome ${pergNome} não foi localizado`)
        }

        var resp = window.prompt('Deseja continuar? [sim/não]')

    } while(resp == 'sim')

    console.log(nome)

}