algoritmo "real_para_dolar"
// Data : 09/12/2020
// Seção de Declarações 
var
   R, DR, C: real
inicio
      escreval("CONVERSÃO DE REAL PARA DÓLAR")
      escreva("Qual a sua quantia em Real? ")
      leia(R)
      escreva("1 Dólar vale quantos reais? ")
      leia(DR)
      C <- R/DR
      escreva("A sua quantia de R$", R, " equivale a US$", C, " Dólares")
fimalgoritmo
