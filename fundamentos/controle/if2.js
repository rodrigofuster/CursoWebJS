function teste1(num) {
    if(num > 7) // cuidado com as { } no bloco para mais de uma sentença
        console.log(num) 

        console.log('final') // não está associado ao IF
    
} 
 //teste1(6) 

 function teste2(num2) {
    if(num2 > 7 ) 
    ; // cuidado! é considerada uma sentença
    {
        console.log(num2)
    }
 }

 teste2(6)
 teste2(8)