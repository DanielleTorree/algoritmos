algoritmo "semnome"
// Função :
// Autor :
// Data : 06/01/2021
// Seção de Declarações 
var
   MP, P1, P2, P3: real
inicio
      escreval("Verificador de maior peso")
      escreva("Peso 1: ")
      leia(P1)
      escreva("Peso 2: ")
      leia(P2)
      escreva("Peso 3: ")
      leia(P3)
      
      MP <- P1
      se (P2 > MP) entao
          MP <- P2
      fimse
      se (P3 > MP) entao
           MP <- P3
      fimse
      
      escreva("Maior peso: ", MP)
fimalgoritmo
