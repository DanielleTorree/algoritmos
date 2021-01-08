algoritmo "vel"
// Função :
// Autor :
// Data : 15/12/2020
// Seção de Declarações 
var
   D, T, V: real
inicio
      escreval("Calculando a velocidade do projétil")
      escreva("Distância em km: ")
      leia(D)
      escreva("Tempo em min: ")
      leia(T)
      V <- (D*1000)/(T*60)
      escreva("V = ", V, "m/s")
fimalgoritmo
