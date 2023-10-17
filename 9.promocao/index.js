function solucao(precos) {
    let itemMaisBarato = precos[0]
    let somaDosItems = ''
    
    for(let i=0; i< precos.length; i++){
        if(precos[i] < itemMaisBarato){
            itemMaisBarato = precos[i]
        }
    }
    if(precos.length >= 3){
        somaDosItems = precos.reduce((a,b)=>a + b , 0) - itemMaisBarato/2
        console.log(somaDosItems)
    }else{
        somaDosItems = precos.reduce((a,b)=>a + b , 0)
        console.log(somaDosItems)
    }
  }