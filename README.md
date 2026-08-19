# Portfólio Profissional

Website de portfólio profissional desenvolvido para a disciplina **Laboratório de Desenvolvimento de Software** — PUC Minas, Engenharia de Software, 2º semestre de 2026.

> **Status:** Sprint 01 (Lab01S01) — planejamento, prototipação e estrutura de navegação.

---

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Protótipos e wireframes](#protótipos-e-wireframes)
- [Tecnologias previstas](#tecnologias-previstas)
- [Dependências](#dependências)
- [Estrutura de diretórios](#estrutura-de-diretórios)
- [Instalação e execução local](#instalação-e-execução-local)
- [Identidade visual](#identidade-visual)
- [Roteiro das sprints](#roteiro-das-sprints)

---

## Sobre o projeto

Aplicação web de página única (SPA) que apresenta trajetória acadêmica e profissional, projetos desenvolvidos, experiências e canais de contato. O site é dividido em quatro seções acessadas por um menu de navegação:

| Rota | Seção | Conteúdo |
| --- | --- | --- |
| `/` | **Sobre Mim** | Apresentação em português e inglês, formação, área de atuação, interesses, objetivos e habilidades técnicas |
| `/projetos` | **Projetos** | Linha do tempo do projeto mais antigo ao mais recente, com nome, descrição, tecnologias, link do repositório e imagem/GIF em execução |
| `/experiencias` | **Experiências** | Experiências profissionais, estágios, freelas, projetos open source e eventos técnicos, com empresa, cargo, período e descrição |
| `/contato` | **Contato** | Ícones clicáveis (e-mail, WhatsApp, LinkedIn, GitHub) e formulário de mensagem |

Todo o conteúdo textual alterna entre **português e inglês** por meio de um botão no cabeçalho, sem recarregar a página.

---

## Protótipos e wireframes

Os wireframes de média fidelidade cobrem as quatro páginas em versão **desktop (1440px)** e **mobile (375px)**, incluindo o mapa de navegação.

📄 Arquivo navegável: [`docs/wireframes/wireframes.html`](docs/wireframes/wireframes.html) — abra no navegador.

<!-- Substituir pelas capturas de tela dos wireframes -->
| Sobre Mim | Projetos |
| --- | --- |
| ![Wireframe Sobre Mim](docs/wireframes/01-sobre.png) | ![Wireframe Projetos](docs/wireframes/02-projetos.png) |

| Experiências | Contato |
| --- | --- |
| ![Wireframe Experiências](docs/wireframes/03-experiencias.png) | ![Wireframe Contato](docs/wireframes/04-contato.png) |

**Mapa de navegação**

```
Layout (Header fixo + Footer)
│
├── /                → Sobre Mim      (hero + bio PT/EN + habilidades)
├── /projetos        → Projetos       (timeline: antigo → recente)
├── /experiencias    → Experiências   (cards empresa/cargo/período)
├── /contato         → Contato        (ícones + formulário)
└── *                → 404            (link de retorno ao início)
```

---

## Tecnologias previstas

| Camada | Tecnologia | Justificativa |
| --- | --- | --- |
| Biblioteca de UI | **React 18** | Componentização e reaproveitamento de layout entre as páginas |
| Build / dev server | **Vite 5** | Inicialização rápida, HMR e build otimizado para deploy estático |
| Estilização | **Tailwind CSS 3** | Utilitários com design responsivo e identidade visual própria, sem depender de tema de terceiros |
| Roteamento | **React Router 6** | Páginas separadas por rota, com layout compartilhado |
| Ícones | **lucide-react** | Conjunto de ícones SVG leve e consistente |
| Internacionalização | **React Context** | Alternância PT/EN sem biblioteca externa |
| Hospedagem (Sprint 03) | **Vercel** | Deploy gratuito e integrado ao GitHub |

---

## Dependências

**Produção**

| Pacote | Versão |
| --- | --- |
| `react` | ^18.3.1 |
| `react-dom` | ^18.3.1 |
| `react-router-dom` | ^6.28.0 |
| `lucide-react` | ^0.454.0 |

**Desenvolvimento**

| Pacote | Versão |
| --- | --- |
| `vite` | ^5.4.11 |
| `@vitejs/plugin-react` | ^4.3.4 |
| `tailwindcss` | ^3.4.17 |
| `postcss` | ^8.4.49 |
| `autoprefixer` | ^10.4.20 |

---

## Estrutura de diretórios

```
portfolio/
├── docs/
│   └── wireframes/
│       └── wireframes.html      # Wireframes de média fidelidade (desktop + mobile)
├── public/                      # Arquivos estáticos (imagens/GIFs dos projetos)
├── src/
│   ├── components/
│   │   ├── Footer.jsx           # Rodapé com links sociais
│   │   ├── Header.jsx           # Cabeçalho fixo, menu responsivo e toggle PT/EN
│   │   ├── Layout.jsx           # Estrutura base: header + área de conteúdo + footer
│   │   └── SectionHeader.jsx    # Título padrão das seções
│   ├── context/
│   │   └── LanguageContext.jsx  # Estado global do idioma (PT/EN)
│   ├── data/
│   │   ├── contatos.js          # Canais de contato
│   │   ├── experiencias.js      # Experiências profissionais
│   │   ├── perfil.js            # Dados pessoais, bio e habilidades
│   │   ├── projetos.js          # Projetos da timeline
│   │   └── textos.js            # Labels da interface em PT e EN
│   ├── pages/
│   │   ├── Contato.jsx
│   │   ├── Experiencias.jsx
│   │   ├── NaoEncontrada.jsx    # Página 404
│   │   ├── Projetos.jsx
│   │   └── Sobre.jsx
│   ├── App.jsx                  # Definição das rotas
│   ├── index.css                # Base do Tailwind e classes de componente
│   └── main.jsx                 # Ponto de entrada da aplicação
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

O conteúdo fica **separado da apresentação**: os arquivos em `src/data/` concentram todos os dados pessoais, de modo que adicionar um projeto ou uma experiência não exige alterar componentes.

---

## Instalação e execução local

**Pré-requisitos:** Node.js 18+ e npm.

```bash
# 1. Clonar o repositório
git clone https://github.com/SEU-USUARIO/portfolio.git
cd portfolio

# 2. Instalar as dependências
npm install

# 3. Iniciar o servidor de desenvolvimento
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

**Outros comandos**

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Serve localmente o conteúdo de `dist/` |

---

## Identidade visual

Tema escuro minimalista, com foco em legibilidade e destaque para o conteúdo.

| Token | Cor | Uso |
| --- | --- | --- |
| `bg` | `#0B0D12` | Fundo da página |
| `surface` | `#12151D` | Fundo dos cards |
| `elevated` | `#171B25` | Elementos sobrepostos e selos |
| `line` | `#232838` | Bordas e divisórias |
| `fg` | `#E6E8EE` | Texto principal |
| `muted` | `#8B93A7` | Texto secundário |
| `accent` | `#7C5CFF` | Ações, links ativos e marcadores |
| `accent2` | `#22D3EE` | Destaques de apoio |

**Tipografia:** Inter (texto) e JetBrains Mono (dados técnicos, períodos e tags).

**Responsividade:** breakpoints em 640px, 768px e 1024px; menu vira drawer abaixo de 768px e as grades de duas colunas empilham.

---

## Roteiro das sprints

- [x] **Lab01S01** — Repositório, wireframes, protótipo do front-end, navegação e layout principal
- [ ] **Lab01S02** — Conteúdo real das quatro páginas, timeline dinâmica, formulário funcional com envio de e-mail, validações e ajustes de responsividade
- [ ] **Lab01S03** — Deploy em nuvem, imagens/GIFs dos projetos, ajustes visuais e README final

---

## Autor

**[Seu Nome]** — Engenharia de Software, PUC Minas
