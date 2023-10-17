function solucao(lista) {
  const soma = lista.reduce((a,b)=> a+b,0)
  const media = soma/lista.length
  
  console.log(media)
}