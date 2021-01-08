algoritmo "forma_ou_nao_um_triangulo"
// Função :
// Autor :
// Data : 06/01/2021
// Seção de Declarações 
var
   L1, L2, L3: inteiro
inicio
      escreval("Verificador de Triângulos")
      escreva("Lado 1: ")
      leia(L1)
      escreva("Lado 2: ")
      leia(L2)
      escreva("Lado 3: ")
      leia(L3)
      
      se (L1<L2+L3) e (L2<L1+L3) e (L3<L1+L2) entao
         se (L1=L2) e (L2=L3) entao
            escreva("Triângulo Equilátero")
         senao
              se (L1=L2) ou (L1=L3) ou (L2=L3) entao
                 escreva("Triângulo Isósceles")
              senao
                   escreva("Triângulo Escaleno")
              fimse
         fimse
      senao
           escreva("Não é um triângulo")
      fimse
fimalgoritmo
