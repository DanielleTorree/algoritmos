algoritmo "teste-logico_ou"
// Função :
// Autor :
// Data : 28/12/2020
// Seção de Declarações 
var
   sexo: caractere
inicio
      escreva("Digite M ou F para seu sexo: ")
      leia(sexo)
      se (sexo = "M")  ou (sexo = "F") entao
         escreva("Sexo válido")
      senao
           escreva("Sexo inválido")
      fimse
fimalgoritmo
