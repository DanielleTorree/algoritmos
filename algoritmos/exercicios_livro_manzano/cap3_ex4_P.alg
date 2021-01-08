algoritmo "REAJUSTE_SALARIAL"
// Função :
// Autor :
// Data : 09/12/2020
// Seção de Declarações 
var
   SM, PR, NS: real
inicio
      escreval("Cálculo de reajuste salarial")
      escreva("Digite seu salário mensal: ")
      leia(SM)
      escreva("Digite o percentual de reajuste: ")
      leia(PR)
      NS <- SM + SM*(PR/100)
      escreva("Seu novo salário é de: ", NS)
fimalgoritmo
