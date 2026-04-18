// script.js
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GESTÃO DE USUÁRIO (LOGIN E SAUDAÇÃO) ---
    // Tentamos pegar o nome de todas as chaves possíveis
    const nomeUsuario = localStorage.getItem('usuarioLogado') || localStorage.getItem('usuarioPMMG') || localStorage.getItem('nome');
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero p');
    const navUl = document.querySelector('nav ul');

    if (nomeUsuario && heroTitle) {
        // Blindagem: Garante que o texto mude independente do que está no HTML
        heroTitle.innerHTML = `Bem-vindo de volta, <span>${nomeUsuario}!</span>`;
        
        if (heroSubtitle) {
            heroSubtitle.textContent = "Continue sua preparação de onde parou. A farda está cada vez mais próxima.";
        }

        if (!document.getElementById('btnLogout')) {
            const logoutLi = document.createElement('li');
            logoutLi.innerHTML = `<a href="#" id="btnLogout" style="color: #ef4444; font-weight: bold;">Sair</a>`;
            navUl.appendChild(logoutLi);

            document.getElementById('btnLogout').addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.clear();
                window.location.href = 'index.html'; 
            });
        }
    }


    // --- 2. GESTÃO DE ESTATÍSTICAS (DASHBOARD) ---
    const scoreSalvo = localStorage.getItem('ultimo_score_portugues');
    const elScore = document.getElementById('last-score');

    if (scoreSalvo && elScore) {
        elScore.textContent = scoreSalvo + '%';
    }
});

// --- 3. FUNÇÃO DE MUDAR CONTEÚDO (FORA DO DOMCONTENTLOADED) ---
// Deixamos fora para que o 'onclick' do HTML consiga enxergar a função
function mudarConteudo(caminhoPdf, titulo, idVideo) {
    const framePdf = document.getElementById('pdf-frame');
    const frameVideo = document.getElementById('video-frame');
    const tituloLei = document.getElementById('titulo-lei');
    const linkDownload = document.getElementById('link-download');

    if (framePdf) framePdf.src = caminhoPdf;
    if (tituloLei) tituloLei.innerText = titulo;
    if (linkDownload) linkDownload.href = caminhoPdf;
    
    if (frameVideo) {
        frameVideo.src = "https://www.youtube.com/embed/" + idVideo;
    }

    // Estilização da lista
    const itens = document.querySelectorAll('.lista-leis li');
    itens.forEach(item => item.classList.remove('ativo'));
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('ativo');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}