function executar(){
    var A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    var B = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    var C = []

    for(var i = 0; i <= 14; i++){
        C.push(A[i]) 
    }

    for(var i = 0; i <= 14; i++){
        C.push(B[i]) 
    }

    for(var i = 0; i <= 29; i++){
        console.log(C[i])
    }

    alert(typeof C);
    alert(Array.isArray(C));
}