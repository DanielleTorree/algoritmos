algoritmo "prestação"
// Data : 08/12/2020
// A fórmula de juros simples é J = C*i*t
//Onde J = JUROS, C = capital, i = taxa, t = tempo
//O que é vamos fazer neste exercício é calcular a
//prestação de um bem em atraso
var
   P, V, TAXA: real
   TEMPO: inteiro
inicio
      escreval("Prestação em atraso")
      escreva("Valor da prestação sem juros: ")
      leia(V)
      escreva("Qual a taxa aplicada em porcentagem ao mês? ")
      leia(TAXA)
      escreva("Quantos meses está dívida está em atraso? ")
      leia(TEMPO)
      P <- V + (V*(TAXA/100)*TEMPO)
      escreva("A prestação vai sair por: R$", P)

fimalgoritmo
