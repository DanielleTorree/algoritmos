function executar(){
    var A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20]
    var B = [50, 59, 34, 36, 22, 21, 85, 99, 65, 54, 32, 21, 28, 69, 87, 45, 56, 78, 25, 29]
    var C = []

    for(var i = 0; i <= 19; i++){
        C.push(B[i] - A[i])

        console.log(`${B[i]} - ${A[i]} = ${C[i]}`)
    }
}