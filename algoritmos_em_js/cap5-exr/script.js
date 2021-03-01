function executar(){
    var res = document.getElementById('res')
    var n = window.prompt('Digite um valor: ')

    var maior = n
    var menor = n

    do{
        if(n > maior){
            maior  = n 
        }
        
        if(n < menor){
            menor = n
        }

        res.innerHTML = `Maior = ${maior} e Menor = ${menor}`

        n = window.prompt('Digite um valor: ')
        
    }while(n > 0)
}