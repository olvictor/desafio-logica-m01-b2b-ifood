function solucao(lista) {
  const pessoasQuePodemParticipar = lista.filter((pessoa)=> pessoa >= 18)
 
  pessoasQuePodemParticipar.sort((a,b)=> a - b)
  
  let idadeDaPessoaMaisNovaAceita = ''

  if(pessoasQuePodemParticipar[0]){
      idadeDaPessoaMaisNovaAceita = pessoasQuePodemParticipar[0]
  }  
  if(!idadeDaPessoaMaisNovaAceita){
      console.log('CRESCA E APARECA')
  }else{
      console.log(idadeDaPessoaMaisNovaAceita)
  }

}
