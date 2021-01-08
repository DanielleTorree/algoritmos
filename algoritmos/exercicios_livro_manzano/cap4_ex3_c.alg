algoritmo "semnome"
// Função :
// Autor :
// Data : 07/01/2021
// Seção de Declarações 
var
   n1, n2, n3, n4, md: real
inicio
      escreval("Verifique se você foi APROVADO OU REPROVADO")
      escreva("Nota 1: ")
      leia(n1)
      escreva("Nota 2: ")
      leia(n2)
      escreva("Nota 3: ")
      leia(n3)
      escreva("Nota 4: ")
      leia(n4)
      
      md <- (n1+n2+n3+n4)/4
      
      se (md >= 5) entao
         escreva("Você foi aprovado com média igual a ", md)
      senao
           escreva("Você foi reprovado com média igual a ", md)
      fimse
fimalgoritmo

