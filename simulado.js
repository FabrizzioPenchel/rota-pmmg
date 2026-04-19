const perguntas = [
    {
        pergunta: "Assinale a alternativa em que o espaço em branco deve ser preenchido corretamente com “porquê”.",
        opcoes: [
            "A) Você não trouxe o caderno _______?",
            "B) Esse é o motivo _______ ele não veio.",
            "C) Vim aqui rápido _______ você chamou.",
            "D) A pedra rola _______ é arredondada.",
            "E) Quis saber o _______ da sua visita."
        ],
        correta: 4,
        explicacao: "“Porquê” é substantivo e vem com artigo: 'o porquê'."
    },
    {
        pergunta: "Qual o porquê deve ser usado como substantivo?",
        opcoes: ["Por que", "Porque", "Por quê", "Porquê"],
        correta: 3,
        explicacao: "Porquê (junto e com acento) é substantivo."
    }
];

let perguntaAtual = 0;
let acertos = 0;
let respondeu = false;

// ==========================
// CARREGAR PERGUNTA
// ==========================
window.carregarPergunta = function () {
    const container = document.getElementById('quiz-container');

    respondeu = false;
    const q = perguntas[perguntaAtual];

    container.innerHTML = `
        <div class="pergunta">
            <h3>${q.pergunta}</h3>
        </div>

        <div class="opcoes">
            ${q.opcoes.map((opt, i) => `
                <button class="opcao-btn" onclick="verificarResposta(${i})">
                    ${opt}
                </button>
            `).join('')}
        </div>

        <div id="feedback" style="margin-top:15px;"></div>

        <button id="btnProxima" class="btn btn-secondary" style="display:none; margin-top:20px;" onclick="proximaPergunta()">
            Próxima Pergunta
        </button>
    `;
};

// ==========================
// VERIFICAR RESPOSTA
// ==========================
window.verificarResposta = function (index) {
    if (respondeu) return;

    respondeu = true;
    const q = perguntas[perguntaAtual];
    const botoes = document.querySelectorAll('.opcao-btn');
    const feedback = document.getElementById('feedback');

    botoes.forEach((btn, i) => {
        if (i === q.correta) {
            btn.classList.add('correta');
        } else if (i === index) {
            btn.classList.add('errada');
        }
        btn.disabled = true;
    });

    if (index === q.correta) {
        acertos++;
        feedback.innerHTML = '<span style="color:#22c55e;">✔ Resposta correta!</span>';
    } else {
        feedback.innerHTML = `<span style="color:#ef4444;">❌ Errado!</span><br><small>${q.explicacao}</small>`;
    }

    document.getElementById('btnProxima').style.display = 'block';
};

// ==========================
// PRÓXIMA PERGUNTA
// ==========================
window.proximaPergunta = function () {
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
};

// ==========================
// RESULTADO FINAL
// ==========================
function mostrarResultado() {
    const container = document.getElementById('quiz-container');
    const porcentagem = Math.round((acertos / perguntas.length) * 100);

    container.innerHTML = `
        <div style="text-align:center;">
            <h2>Simulado Concluído!</h2>

            <p style="font-size:1.5rem;">
                <strong>${porcentagem}% de acerto</strong>
            </p>

            <p>Você acertou ${acertos} de ${perguntas.length}</p>

            <div style="margin-top:20px; display:flex; flex-direction:column; gap:10px;">
                <button onclick="location.reload()" class="btn btn-primary">
                    🔁 Refazer
                </button>

                <a href="index.html" class="btn btn-secondary">
                    🏠 Home
                </a>

                <a href="aula-portugues.html" class="btn btn-secondary">
                    📚 Estudar mais
                </a>
            </div>
        </div>
    `;

    localStorage.setItem('ultimo_score_portugues', porcentagem);
}