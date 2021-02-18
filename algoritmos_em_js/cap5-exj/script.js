function executar(){
    var res = document.getElementById('res')

        for(var celsius = 10; celsius <= 100; celsius = celsius + 10){
            var fahrenheit = (9/5)*(celsius) + 32

            res.innerHTML += `${celsius} ºC = ${fahrenheit} ºF <br>`
        }
}