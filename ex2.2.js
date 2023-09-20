function personagemMorreu(dano, saude) {
    saude -= dano
    if (saude <= 0) {
        return 1; //Matou o personagem
    } else {
        return 0; //Não matou o personagem
    }
}

const resultado = personagemMorreu(50, 100);
  console.log(resultado);