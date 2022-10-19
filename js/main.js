function tocaSom(idElementoTecla) {
    const elemento = document.querySelector(idElementoTecla);
    if (elemento === null || elemento.localName != 'audio') {
        console.log('Seletor invalido ou nulo')
    }   
    else {
        elemento.play();
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i=0; i< listaDeTeclas.length; i+=1) {
    const tecla =listaDeTeclas[i]
    const idTecla = `#som_${tecla.classList[1]}`;
    tecla.onclick = function () {
        tocaSom(idTecla);
    }
    
    tecla.onkeydown = function (evento) {
        if (evento.code ==='Space' || evento.code ==='Enter') {
            tecla.classList.add('ativa');
        } 
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}
