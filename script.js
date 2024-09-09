document.addEventListener('DOMContentLoaded', () => {
    const passos = document.querySelectorAll('.passo');
    let ativo = 0;

    function mostrarPasso(index) {
        passos.forEach((passo, i) => {
            passo.classList.toggle('ativo', i === index);
        });
    }

    document.querySelectorAll('.btn-proximo').forEach(button => {
        button.addEventListener('click', () => {
            const proximo = parseInt(button.getAttribute('data-proximo'), 10);
            ativo = proximo;
            mostrarPasso(ativo);
        });
    });

    mostrarPasso(ativo);
});