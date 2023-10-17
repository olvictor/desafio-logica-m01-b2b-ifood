function solucao(texto) {
    let textoSemEspacosNasExtremidades = texto.trim();
   
    const arrayDePalavras = textoSemEspacosNasExtremidades.split(' ')
   
    const arrayDePalavrasEliminandoEspacos = arrayDePalavras.filter((palavra)=> palavra !== '')
   
    console.log(arrayDePalavrasEliminandoEspacos.length)

}