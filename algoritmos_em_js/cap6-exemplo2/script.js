function executar(){
    var array = []

    for(var i = 1; i <= 5; i++){
        array.push(window.prompt('Digite um número: '))
        console.log(array)
    }

    console.log(array[3]);
    console.log('vamos para o segundo...');

    while (array.length != 0){
        console.log(array);
        array.pop();
    }

    var arr = [{nome:'Danielle Linda', idade:21}]

    arr.push({nome:'Alex Lindo', idade:46});
    arr.push([100,99,12]);
    arr.push({vaiculo:'Carro', ano:2021, placa:'AK59'});
    arr.push([{lingua:'Inglês', nivel:1, tipo:'Iniciante'}, 
          {lingua:'Português', nivel:2, tipo:'Intermediário'}])

    //console.log(arr);
    console.log(arr[0]);
    console.log(arr[0].nome);
    console.log(arr[0].idade);
    console.log(arr[2][1]);
    console.log(arr[4][1].lingua);
    //console.log(arr.length);
    
    for(var i = 0;i <= (arr.length-1); i++){
        console.log(arr[i]);
    }

    //(arr.length-1) é a posição



}