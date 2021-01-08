algoritmo "salario-bruto-liquido"
// Função :
// Autor :
// Data : 07/12/2020
// Seção de Declarações 
var
   HT: inteiro
   VH, PD, SB, TD, SL: real
inicio
      escreva("Horas trabalhadas no mês: ")
      leia(HT)
      escreva("Valor hora-aula: ")
      leia(VH)
      escreva("Percentual de desconto: ")
      leia(PD)
      SB <- HT*VH
      TD <- (PD/100)*SB
      SL <- SB-TD
      escreva("O salário líquido é", SL, " e o bruto é", SB)
fimalgoritmo
