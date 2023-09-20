
const posicao = 1000
function limitaPosicao(posicao) {

    if (posicao < 0) {
        return 0;
    }
    else if (posicao > 100) {
        return 100;
    }
    else {
        return posicao;
    }
}

console.log(limitaPosicao(posicao));