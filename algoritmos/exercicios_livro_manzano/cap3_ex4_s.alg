algoritmo "as_4_operacoes"
// Função :
// Autor :
// Data : 15/12/2020
// Seção de Declarações 
var
A, B, SOMA, SUBTRACAO, M, D: real
inicio
      escreva("Valor A: ")
      leia(A)
      escreva("Valor B: ")
      leia(B)
      SOMA <- A + B
      SUBTRACAO <- A - B
      M <- A*B
      D <- A/B
      escreval(A, " +", B, " = ", SOMA)
      escreval(A, " -", B, " = ", SUBTRACAO)
      escreval(A, " x", B, " = ", M)
      escreval(A, " /", B, " = ", D)
fimalgoritmo
