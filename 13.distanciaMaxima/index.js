function processData(input) {
    const linhas = input.trim().split('\n');
    const nPessoas = linhas[0];
    
    const coordenadas = []
 
    for(let i= 1; i<linhas.length; i++){
        const coord = linhas[i].split(' ')
        coordenadas.push({
            x: Number(coord[0]),
            y: Number(coord[1])
        })
    }
    let maiorDistancia = 0
    for(let i = 0 ; i < coordenadas.length; i++){
    for(let j = i+1; j < coordenadas.length; j++){
        const distancia = Math.sqrt((coordenadas[i].x - coordenadas[j].x)**2 + (coordenadas[i].y - coordenadas[j].y  )**2)
        if(distancia > maiorDistancia){
            maiorDistancia = distancia
         }
        }
    }
    console.log(maiorDistancia)

} 