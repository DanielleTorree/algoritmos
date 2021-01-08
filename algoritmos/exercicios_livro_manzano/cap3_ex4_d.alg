algoritmo "quant_litros_por_viagem"

var
   DP, T, VM, LU: real
inicio
      escreval("Para descobrir a quantidade livros utilizados na viagem,")
      escreval("forneça as seguintes informações: ")
      escreva("Velocidade média em km/h: ")
      leia(VM)
      escreva("Tempo gasto em h: ")
      leia(T)
      DP <- VM*T
      escreval("De acordo com as informações, a distância percorrida foi de ", DP,"km")
      LU <- DP/12
      escreval("Sabendo que a quantidade de litros usados é de 1L a cada 12km")
      escreval("Então a quantidade de litros que você usou foi de ", LU)
fimalgoritmo
