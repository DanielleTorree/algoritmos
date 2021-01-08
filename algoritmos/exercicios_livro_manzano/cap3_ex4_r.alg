algoritmo "eleicao"
// Data : 09/12/2020
// Seção de Declarações 
var
   A, B, C, VV, VB, VN: inteiro
   QUANT_ELEITORES, PERC_VOTOS_VALIDOS, PERC_VOTOS_A, PERC_VOTOS_B, PERC_VOTOS_C, PERC_VOTOS_BRANCO, PERC_VOTOS_NULO: real
inicio
      escreva("Quantidade de votos para o Candidato A: ")
      leia(A)
      escreva("Quantidade de votos para o Candidato B: ")
      leia(B)
      escreva("Quantidade de votos para o Candidato C: ")
      leia(C)
      VV <- A + B + C
      escreva("Quantidade de votos brancos: ")
      leia(VB)
      escreva("Quantidade de votos nulos: ")
      leia(VN)
      QUANT_ELEITORES <- VV + VB + VN
      PERC_VOTOS_VALIDOS <- (VV/QUANT_ELEITORES)*100
      PERC_VOTOS_A <- (A/QUANT_ELEITORES)*100
      PERC_VOTOS_B <- (B/QUANT_ELEITORES)*100
      PERC_VOTOS_C <- (C/QUANT_ELEITORES)*100
      PERC_VOTOS_BRANCO <- (VB/QUANT_ELEITORES)*100
      PERC_VOTOS_NULO <- (VN/QUANT_ELEITORES)*100
      escreval("Quantidade de eleitores: ", QUANT_ELEITORES)
      escreval("Porcentagem de votos válidos: ", PERC_VOTOS_VALIDOS, "%")
      escreval("Porcentagem de votos para o Candidato A: ", PERC_VOTOS_A, "%")
      escreval("Porcentagem de votos para o Candidato B: ", PERC_VOTOS_B, "%")
      escreval("Porcentagem de votos para o Candidato C: ", PERC_VOTOS_C, "%")
      escreval("Porcentagem de votos brancos: ", PERC_VOTOS_BRANCO, "%")
      escreval("Porcentagem de votos nulos: ", PERC_VOTOS_NULO, "%")
fimalgoritmo
