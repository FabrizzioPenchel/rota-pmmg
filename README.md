# 👮‍♂️ ROTA PMMG - Plataforma de Estudos

Plataforma gratuita interativa desenvolvida para auxiliar candidatos na preparação para o concurso da Polícia Militar de Minas Gerais. O projeto simula um ambiente real de aprendizado com foco em usabilidade e desempenho.

## 🚀 Funcionalidades

- **Sistema de Login:** Controle de acesso simples utilizando `localStorage`.
- **Dashboard de Progresso:** Visualização de desempenho e progresso nas matérias.
- **Módulos de Estudo:** - **Português, Matemática e Raciocínio Lógico:** Videoaulas integradas via YouTube.
  - **Direito:** Visualizador de PDFs (Constituição e LINDB) integrado.
  - **Inglês:** Seção preparada para novos conteúdos.
- **Simulado Interativo:** Questões com correção em tempo real e cálculo de nota.
- **Interface Dark Mode:** Design moderno e confortável para longas horas de estudo.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído "raiz", utilizando as tecnologias base da web para demonstrar domínio de lógica e estrutura:

* **HTML5:** Estrutura semântica das páginas.
* **CSS3:** Layout responsivo com Flexbox, Grid e variáveis para Dark Mode.
* **JavaScript (Vanilla):** Lógica de login, manipulação do DOM, integração de mídia e persistência de dados no navegador.
* **GitHub Pages:** Hospedagem e deploy contínuo.

## 📂 Estrutura do Projeto

```text
/
├── index.html          # Dashboard principal (com trava de segurança)
├── login.html          # Página de acesso
├── simulados.html      # Sistema de questões
├── aula-*.html         # Páginas de conteúdo por matéria
├── Style.css           # Estilização global
├── script.js           # Lógica de interface e saudação
├── simulado.js         # Motor do sistema de questões
└── Docs/               # Repositório de materiais em PDF
