function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', function(event) {
    const elemento = event.target;

    //zerar
    if (elemento.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado'); // remove color red
      segundos = 0;
    }

    //iniciar
    if (elemento.classList.contains('iniciar')) {
      relogio.classList.remove('pausado'); //remove color red
      clearInterval(timer);
      iniciaRelogio();
    }

    //pausar
    if (elemento.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado'); //add color red
    }
  });
}
relogio();
