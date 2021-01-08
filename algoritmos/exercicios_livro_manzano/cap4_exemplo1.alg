algoritmo "num_naoNeg_difZero"
// Função :
// Autor :
// Data : 06/01/2021
// Seção de Declarações
var
   NUM, R: real
inicio
      escreva("Digite um número: ")
      leia(NUM)
      se nao(NUM < 0) entao
           se(NUM <> 5) entao
                  R <- (NUM)^(1/2)
                  escreva("Resultado: ", R)
           senao
                R <- (NUM)^(1/3)
                escreva("Resultado: ", R)
           fimse
      fimse
fimalgoritmo
