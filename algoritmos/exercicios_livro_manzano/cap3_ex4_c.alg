algoritmo "volume_cilindro"
// Função :
// Autor :
// Data : 07/12/2020
// Seção de Declarações 
var
   V, R, h: real
inicio
      escreval("Volume do cilindro")
      escreva("Raio: ")
      leia(R)
      escreva("Altura: ")
      leia(H)
      PI = 3.14159
      V <- PI*R*R*H
      escreva("O volume do cilindro é: ", V)
fimalgoritmo
