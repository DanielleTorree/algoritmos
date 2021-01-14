function converteC(){
    var nf = window.document.getElementById('txtnf')
    
    if (nf.value.length == 0){
        window.alert('Digite um número!')
    } else{
        var f = Number(nf.value)
        var res1 = window.document.getElementById('res1')
        var celsius = (5/9)*(f-32)
        
        //res1.innerHTML = `${celsius}`

        res1.innerHTML += `(${f} - 32) x (5 / 9) = ${celsius}°C`
    }
}
function converteF(){
    var nc = window.document.getElementById('txtnc')

    if(nc.value.length == 0){
        window.alert('Digite um número!')
    } else{
        var c = Number(nc.value)
        var res2 = window.document.getElementById('res2')
        var fahrenheit = (c*9/5)+32

        res2.innerHTML += `(${c} x 9 / 5) + 32 = ${fahrenheit}°F`
    }
}