algoritmo "semnome"
// Função :
// Autor :
// Data : 07/01/2021
// Seção de Declarações 
var
 a, b, maiorV, x: inteiro
inicio
      escreva("Valor A: ")
      leia(a)
      escreva("Valor B: ")
      leia(b)
      
      se (a > b) entao
         x <- a - b
      senao
           x <- b - a
      fimse
      
      escreva(x)
fimalgoritmo
