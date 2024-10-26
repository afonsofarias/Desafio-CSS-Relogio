// Função para atualizar o relógio digital
function atualizarRelogio () {
    const agora = new Date();
    const horas = String( agora.getHours() ).padStart( 2, '0' );
    const minutos = String( agora.getMinutes() ).padStart( 2, '0' );
    const segundos = String( agora.getSeconds() ).padStart( 2, '0' );
    const relogio = `${horas}:${minutos}:${segundos}`;

    // Seleciona o elemento com o ID 'relogio' e define o texto com o horário atual
    document.getElementById( 'relogio' ).textContent = relogio;
}

// Atualiza o relógio a cada segundo
setInterval( atualizarRelogio, 1000 );
atualizarRelogio(); // Atualiza de imediato ao carregar a página
