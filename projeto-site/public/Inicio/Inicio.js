// (botao_voltar) é o id da imagem de voltar para o topo

window.addEventListener('scroll', function(){   // sempre vai fazer a função ao mudar o nivel da scroll (vertical)
    if (scrollY >= 650){
        botao_voltar.classList.remove(`invisivel`);
        botao_voltar.classList.add(`visivel`);   // adciona a frase escrita na classe
    }
    else{
        botao_voltar.classList.remove("visivel"); // remove a frase escrita na classes
        botao_voltar.classList.add("invisivel");
    }
})