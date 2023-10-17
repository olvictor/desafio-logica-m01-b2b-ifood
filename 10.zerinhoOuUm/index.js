function solucao(jogadores) {
    const vencedorQueJogou1 = jogadores.filter((jogador) => jogador.jogada !== 0)
    const vencedorQueJogou0 = jogadores.filter((jogador)=> jogador.jogada !== 1)
    
    const todosJogaram0 = jogadores.every((jogador) => jogador.jogada === 0)
    const todosJogaram1 = jogadores.every((jogador) => jogador.jogada === 1)
  
  
    if(vencedorQueJogou1.length === 1){
            console.log(vencedorQueJogou1[0].nome)
    }
     else if(vencedorQueJogou0.length === 1){
            console.log(vencedorQueJogou0[0].nome)
    }
     else if(vencedorQueJogou1.length > 1 && vencedorQueJogou0.length > 1 || todosJogaram0 || todosJogaram1){
            console.log('NINGUEM')
    }
  
  }