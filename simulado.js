const perguntas = [
    {
        pergunta: "Assinale a alternativa em que o uso do porquê está INCORRETO:",
        opcoes: [
            "Você sabe por que ele não veio?",
            "Ele não veio por quê.",
            "Não sei o porquê da sua reação.",
            "Ele não veio porque estava doente."
        ],
        correta: 1 // "Ele não veio por quê." (Deveria ter ponto de interrogação ou ser junto se for resposta)
    },
    {
        pergunta: "Qual o porquê deve ser usado como substantivo?",
        opcoes: ["Por que", "Porque", "Por quê", "Porquê"],
        correta: 3
    }
];

let perguntaAtual = 0;
let acertos = 0;

const container = document.getElementById('quiz-container');

function carregarPergunta() {
    const q = perguntas[perguntaAtual];
    container.innerHTML = `
        <div class="pergunta">${q.pergunta}</div>
        <div class="opcoes">
            ${q.opcoes.map((opt, i) => `
                <button class="opcao-btn" onclick="verificarResposta(${i})">${opt}</button>
            `).join('')}
        </div>
    `;
}

window.verificarResposta = (index) => {
    if (index === perguntas[perguntaAtual].correta) {
        acertos++;
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
};

function mostrarResultado() {
    const porcentagem = (acertos / perguntas.length) * 100;
    container.innerHTML = `
        <div class="resultado">
            <h2>Simulado Concluído!</h2>
            <p>Sua pontuação foi:</p>
            <div class="score">${porcentagem}%</div>
            <p>Você acertou ${acertos} de ${perguntas.length} questões.</p>
            <button class="btn btn-primary" onclick="location.reload()" style="margin-top:20px; border:none; padding:10px 20px; border-radius:5px; cursor:pointer;">Refazer Simulado</button>
            <a href="index.html" class="btn btn-secondary" style="display:inline-block; margin-top:20px; text-decoration:none; color:white; border:1px solid #334155; padding:10px 20px; border-radius:5px;">Voltar para Home</a>
        </div>
    `;
    
    // Salva o resultado no banco de dados do navegador
    localStorage.setItem('ultimo_score_portugues', porcentagem);
}

carregarPergunta();