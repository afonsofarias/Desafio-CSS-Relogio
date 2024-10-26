// Array com os nomes dos dias da semana
const diasSemana = [ "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado" ];

// Função para atualizar o dia da semana
function atualizarSemana () {
    const agora = new Date();
    const diaSemana = diasSemana[ agora.getDay() ]; // Obtém o dia da semana pelo índice
    document.getElementById( 'semana' ).textContent = diaSemana;
}

// Chama a função imediatamente ao carregar a página
atualizarSemana();
