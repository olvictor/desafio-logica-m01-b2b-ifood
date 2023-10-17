function processData(input) {
   let inputArraySemSpacos = input.trim().split('\n')
   
   let senha = inputArraySemSpacos[0]
   let senhaDigitada = inputArraySemSpacos[1]
   
   let senhaVerificada =''

   for(let i = 0; i < senha.length; i++){
      for(let x = i ; x < senhaDigitada.length; x++){
         if(senha[i] === senhaDigitada[x] ){
            senhaVerificada += senha[i]
            i++
         }
      }
   }
   
   if(senhaVerificada === senha){
      console.log('SIM')
   }
   else{
      console.log('NAO')
   } 
}