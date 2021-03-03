function executar(){
    var arrayA = []
    var arrayB = []

    for(var i = 0; i <= 3; i++){
        arrayA.push(window.prompt('Digite sua idade: '))

        if(Number(arrayA[i])%2==0){
            var multi = Number(arrayA[i])*5

            arrayB.push(multi)
        
            console.log('Array B par: ' + arrayB[i])
        } else{
            var soma =  Number(arrayA[i])+5
            
            arrayB.push(soma)

            console.log('Array B ímpar: ' + arrayB[i])
        }
    }
    console.log(arrayB.length)
}