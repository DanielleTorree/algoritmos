algoritmo "semnome"
// Função :
// Autor :
// Data : 07/01/2021
// Seção de Declarações 
var
   n1, n2, n3, n4, md1, ne, md2: real
inicio
      escreva("Nota 1: ")
      leia(n1)
      escreva("Nota 2: ")
      leia(n2)
      escreva("Nota 3: ")
      leia(n3)
      escreva("Nota 4: ")
      leia(n4)
      
      md1 <- (n1 + n2 + n3 + n4)/4
      
      se(md1 >= 7) entao
             escreva("Aprovado com média: ", md1)
      senao
           escreva("Nota do exame: ")
           leia(ne)

           md2 <- (md1 + ne)/2

           se (md2 >= 5) entao
              escreva("Aprovado em exame com média: ", md2)
           senao
                escreva("Reprovado em exame com média: ", md2)
           fimse
      fimse
      

      
fimalgoritmo
