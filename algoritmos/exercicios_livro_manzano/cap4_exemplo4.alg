algoritmo "semnome"
// Função :
// Autor :
// Data : 06/01/2021
// Seção de Declarações 
var
   V: inteiro
inicio
      escreval("Verificador de números divisíveis por 2 e/ou 3")
      escreva("Digite um valor: ")
      leia(V)
      
      se(V mod 2 = 0) e (V MOD 3 = 0) entao
           escreva("O valor é divisível por 2 e 3")
      senao
           se (V mod 2 = 0) e (V mod 3 <> 0) entao
              escreva("O valor é divisível somente por 2")
           senao
                se (V mod 2 <> 0) e (V mod 3 = 0) entao
                   escreva("O valor é divisível somente por 3")
                senao
                     escreva("O valor não é divisível nem por 2 e nem por 3")
                fimse
           fimse
      fimse
fimalgoritmo
