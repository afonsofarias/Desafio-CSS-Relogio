// Função para atualizar a data
function atualizarData () {
    const agora = new Date();
    const dia = String( agora.getDate() ).padStart( 2, '0' );      // Dia do mês com dois dígitos
    const mes = String( agora.getMonth() + 1 ).padStart( 2, '0' ); // Mês com dois dígitos (0 = Janeiro)
    const ano = agora.getFullYear();                           // Ano com quatro dígitos
    const data = `${dia}/${mes}/${ano}`;
    document.getElementById( 'data' ).textContent = data;
}

// Chama a função imediatamente ao carregar a página
atualizarData();
