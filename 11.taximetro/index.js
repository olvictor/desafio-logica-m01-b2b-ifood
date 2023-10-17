function solucao(min, km) {
    let tempo$ = 50
    let km$ = 70
    let tempoExtra = min - 20
    let kmExtra = km - 10
    let promocaoTempoExtra = 30
    let promocaokmExtra = 50
    let valorParaPagar ;

    if(min > 20 && km > 10){
        valorParaPagar = ((min-tempoExtra)*tempo$ + tempoExtra*promocaoTempoExtra) + ((km-kmExtra)*km$ + kmExtra*promocaokmExtra) 
    }
    else if(min > 20 && km <= 10){
        valorParaPagar = ((min-tempoExtra)*tempo$ + tempoExtra*promocaoTempoExtra) + km*km$
    }
    else if(min <=20 && km > 10){
        valorParaPagar = min*tempo$ + ((km-kmExtra)*km$ + kmExtra*promocaokmExtra) 
    }else{
        valorParaPagar = min*tempo$ + km*km$
    }

    console.log(valorParaPagar)
}