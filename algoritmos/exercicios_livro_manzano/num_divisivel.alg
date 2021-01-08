algoritmo "semnome"
// Função :
// Autor :
// Data : 30/12/2020
// Seção de Declarações 
var
   NUM: inteiro
inicio
      escreva("Digite um número: ")
      leia(NUM)
      se(NUM mod 4 = 0) e (NUM mod 5 = 0) entao
             escreva("O número digitado é divisível por 4 e 5")
      senao
           se (NUM mod 4 <> 0) e (NUM mod 5 = 0) entao
              escreva("O número digitado não é divisível por 4, porém é divisível por 5")
           senao
                se (NUM mod 4 = 0) e (NUM mod 5 <> 0) entao
                   escreva("O número digitado não é divisível por 5, porém é divisível por 4")
                senao
                     escreva("O número digitado não é divisível por 4 e nem por 5")
                fimse
           fimse
      fimse
fimalgoritmo

