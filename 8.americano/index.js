function solucao(numeros) {
   let somaDosNumerosJogados = numeros.reduce((a,b)=>a+b,0)
   let posicaoGoleiro;
   
   if(somaDosNumerosJogados  % numeros.length !== 0){
   posicaoGoleiro = somaDosNumerosJogados % numeros.length
   }
   else if(somaDosNumerosJogados > numeros.length && somaDosNumerosJogados % numeros.length === 0){
   posicaoGoleiro = numeros.length
   }
   else{
   posicaoGoleiro = somaDosNumerosJogados
   }
   
   console.log(posicaoGoleiro)
}
