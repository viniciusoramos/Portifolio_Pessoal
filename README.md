# Portfólio Profissional

Website de portfólio profissional desenvolvido para a disciplina **Laboratório de Desenvolvimento de Software** — PUC Minas, Engenharia de Software, 2º semestre de 2026.

> **Status:** Sprint 03 (Lab01S03) — perfis de acesso implementados e site publicado.
>
> 🌐 **Site publicado:** <https://viniciusramos.netlify.app>

---

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Protótipos e wireframes](#protótipos-e-wireframes)
- [Tecnologias previstas](#tecnologias-previstas)
- [Dependências](#dependências)
- [Estrutura de diretórios](#estrutura-de-diretórios)
- [Instalação e execução local](#instalação-e-execução-local)
- [Perfis de acesso](#perfis-de-acesso)
- [Formulário de contato](#formulário-de-contato)
- [Deploy](#deploy)
- [Documentação de requisitos](#documentação-de-requisitos)
- [Identidade visual](#identidade-visual)
- [Roteiro das sprints](#roteiro-das-sprints)

---

## Sobre o projeto

Aplicação web de página única (SPA) que apresenta trajetória acadêmica e profissional, projetos desenvolvidos, experiências e canais de contato. O site é dividido em quatro seções acessadas por um menu de navegação:

| Rota | Seção | Conteúdo |
| --- | --- | --- |
| `/` | **Sobre Mim** | Apresentação em português e inglês, formação, área de atuação, interesses, objetivos e habilidades técnicas |
| `/projetos` | **Projetos** | Linha do tempo do projeto mais antigo ao mais recente, com nome, descrição, tecnologias e link do repositório |
| `/experiencias` | **Experiências** | Experiências profissionais, estágios, freelas, projetos open source e eventos técnicos, com empresa, cargo, período e descrição |
| `/contato` | **Contato** | Ícones clicáveis (e-mail, WhatsApp, LinkedIn, GitHub) e formulário com envio real de e-mail |
| `/perfil` | **Seleção de perfil** | Exibida na primeira visita e ao trocar de perfil |

Todo o conteúdo textual alterna entre **português e inglês** por meio de um botão no cabeçalho, sem recarregar a página.

---

## Protótipos e wireframes

Os wireframes de média fidelidade cobrem as quatro páginas em versão **desktop (1440px)** e **mobile (375px)**, incluindo o mapa de navegação.

📄 Arquivo navegável: [`docs/wireframes/wireframes.html`](docs/wireframes/wireframes.html) — abra no navegador.

| Sobre Mim | Projetos |
| --- | --- |
| ![Wireframe Sobre Mim](docs/wireframes/01-sobre.png) | ![Wireframe Projetos](docs/wireframes/02-projetos.png) |

| Experiências | Contato |
| --- | --- |
| ![Wireframe Experiências](docs/wireframes/03-experiencias.png) | ![Wireframe Contato](docs/wireframes/04-contato.png) |

**Mapa de navegação**

![Mapa de navegação](docs/wireframes/05-mapa.png)

A seção 6 do arquivo de wireframes traz ainda a **tela de seleção de perfil**, especificada em [Documentação de requisitos](#documentação-de-requisitos).

![Wireframe da seleção de perfil](docs/wireframes/06-perfis.png)

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
| Hospedagem | **Netlify** | Deploy contínuo a partir do GitHub; configuração de SPA pronta também para Vercel e Cloudflare Pages |

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
├── public/
│   ├── _redirects               # Regra de SPA do Netlify (todas as rotas → index.html)
│   └── favicon.svg              # Ícone da aba
├── src/
│   ├── components/
│   │   ├── Filtros.jsx          # Barra de chips de filtro (Projetos e Experiências)
│   │   ├── Footer.jsx           # Rodapé com links sociais
│   │   ├── Header.jsx           # Cabeçalho fixo, menu responsivo e toggle PT/EN
│   │   ├── Layout.jsx           # Estrutura base: header + área de conteúdo + footer
│   │   └── SectionHeader.jsx    # Título padrão das seções
│   ├── context/
│   │   ├── LanguageContext.jsx  # Estado global do idioma (PT/EN)
│   │   └── PerfilContext.jsx    # Perfil ativo, localStorage e ?perfil=
│   ├── data/
│   │   ├── contatos.js          # Canais de contato
│   │   ├── experiencias.js      # Experiências profissionais
│   │   ├── perfil.js            # Dados pessoais, bio e habilidades
│   │   ├── perfis.js            # Perfis de acesso e o que cada um destaca
│   │   ├── projetos.js          # Projetos da timeline
│   │   └── textos.js            # Labels da interface em PT e EN
│   ├── servicos/
│   │   ├── envio.js             # Ponto único de envio da mensagem de contato
│   │   └── validacao.js         # Regras de validação do formulário
│   ├── utils/
│   │   └── datas.js             # Formatação e ordenação dos períodos
│   ├── pages/
│   │   ├── Contato.jsx
│   │   ├── Experiencias.jsx
│   │   ├── NaoEncontrada.jsx    # Página 404
│   │   ├── SelecaoPerfil.jsx    # Tela de escolha do perfil (/perfil)
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
git clone https://github.com/viniciusoramos/Portifolio_Pessoal.git
cd Portifolio_Pessoal

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

## Perfis de acesso

Na primeira visita o site pergunta **quem está acessando** — Recrutador/Empresa, Professor/Avaliador, Desenvolvedor/Comunidade ou Visitante geral — e passa a destacar o que interessa àquele público. Sem login, sem cadastro e sem esconder nada: todo o conteúdo continua visível em qualquer perfil; muda apenas a ênfase.

| O que muda | Onde |
| --- | --- |
| Frase do hero e chamada para ação principal | Sobre Mim |
| Ordem dos parágrafos da biografia | Sobre Mim |
| Ordem dos grupos de habilidade | Sobre Mim |
| Marcação "Destaque" e faixa de atalhos "Destaques para você" | Projetos |
| Marcação "Destaque" nas experiências relevantes | Experiências |
| Ordem dos canais e assunto sugerido no formulário | Contato |

A relevância vem do cruzamento entre as `tags` de cada projeto ou experiência (`academico`, `profissional`, `freelance`, `open-source`, `evento`) e as tags que o perfil destaca.

**Como funciona.** O `PerfilContext` guarda o perfil ativo, grava no `localStorage` e trata o parâmetro `?perfil=<id>` — útil para mandar um link já no perfil certo, como `?perfil=recrutador`. Ids inválidos são ignorados. Se o `localStorage` estiver bloqueado, a escolha vale só para a sessão e o site funciona normalmente.

**Como configurar.** Todo o comportamento está em [`src/data/perfis.js`](src/data/perfis.js). Adicionar um perfil é acrescentar um objeto ao array — a tela de seleção passa a listá-lo sozinha. Nenhum componente precisa mudar.

O levantamento completo de requisitos e casos de uso está em [Documentação de requisitos](#documentação-de-requisitos).

---

## Formulário de contato

**Validação.** Feita no cliente, sem biblioteca externa, com as regras isoladas em `src/servicos/validacao.js` para poderem ser testadas fora do componente:

| Campo | Regra |
| --- | --- |
| Nome | Obrigatório, mínimo 2 e máximo 80 caracteres |
| E-mail | Obrigatório, formato válido, máximo 120 caracteres |
| Mensagem | Obrigatória, mínimo 10 e máximo 1000 caracteres, com contador de restantes |

O campo só passa a acusar erro depois do primeiro `blur`, para não reclamar já na primeira letra digitada. No envio, todos são revalidados, o foco vai para o primeiro campo inválido e cada erro é anunciado por leitor de tela (`aria-invalid`, `aria-describedby` e `role="alert"`).

**Envio.** Feito pelo **Web3Forms**: a mensagem sai do navegador do visitante direto para a API deles, que encaminha por e-mail. Não há back-end nem servidor próprio, o que mantém a hospedagem estática.

`src/servicos/envio.js` é o único ponto que conhece o transporte — trocar de serviço é reescrever essa função mantendo a assinatura e o retorno `{ ok }`, sem tocar em nenhuma página.

A *access key* é pública por definição: o Web3Forms a expõe no HTML de qualquer formulário e ela apenas identifica o destinatário. Por isso fica versionada. Para sobrescrevê-la sem alterar o código, defina `VITE_WEB3FORMS_KEY` nas variáveis de ambiente do Netlify.

**Antispam.** O formulário tem um campo-armadilha invisível e fora da ordem de foco; se vier preenchido, a mensagem é descartada silenciosamente, porque só um robô o preencheria.

> **Em desenvolvimento local o envio não funciona.** A conta do Web3Forms está restrita ao domínio publicado, então uma requisição vinda de `localhost` volta com 403 e é bloqueada por CORS. A interface trata isso normalmente, exibindo a mensagem de erro. Para testar o envio de verdade, use o site publicado.

---

## Documentação de requisitos

**[Perfis de Acesso — Levantamento de Requisitos e Casos de Uso](docs/perfis-de-acesso.md)**

Documento de análise da funcionalidade de perfis de acesso: ao entrar no site, o visitante informa se é recrutador, professor, desenvolvedor ou visitante geral, e o portfólio passa a destacar o que interessa a cada um — sem esconder nada e sem login.

Cobre visão geral e escopo, os 4 perfis e a matriz de destaques por seção, 14 requisitos funcionais e 8 não funcionais, 5 regras de negócio, 6 casos de uso com fluxos alternativos e exceções, matriz de rastreabilidade, critérios de aceite, modelo de dados proposto e o wireframe da tela de seleção.

Implementação prevista para o Lab01S03.

---

## Deploy

O site está publicado na **Netlify**, em <https://viniciusramos.netlify.app>, com deploy contínuo a partir da branch `main`. O build gera a pasta `dist/`, que pode ser servida por qualquer hospedagem de arquivos estáticos.

| Configuração | Valor |
| --- | --- |
| Comando de build | `npm run build` |
| Diretório publicado | `dist` |
| Versão do Node | 20 |

**Redirecionamento de SPA.** O roteamento é feito no cliente pelo React Router, então o servidor precisa devolver o `index.html` para qualquer caminho. Sem isso, abrir `/projetos` direto ou recarregar a página fora da raiz retorna 404. O repositório já traz a regra para as três plataformas mais comuns:

| Plataforma | Arquivo | Conteúdo |
| --- | --- | --- |
| Netlify · Cloudflare Pages | [`public/_redirects`](public/_redirects) | `/*  /index.html  200` |
| Vercel | [`vercel.json`](vercel.json) | `rewrites` de `/(.*)` para `/index.html` |

O Vite copia `public/_redirects` para `dist/` no build, então nada além de conectar o repositório é necessário.

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
- [x] **Lab01S02** — Sobre Mim em PT/EN, timeline com ordenação automática e filtro por tecnologia, experiências filtráveis por tipo, períodos formatados por idioma, formulário com validação completa e envio real de e-mail, responsividade revisada.
- [ ] **Lab01S03** — Perfis de acesso (feito), deploy em nuvem (feito, em <https://viniciusramos.netlify.app>), ajustes visuais e README final

---

## Autor

**Vinícius Oliveira Ramos** — Engenharia de Software, 6º período, PUC Minas — Belo Horizonte, MG

- Repositório: [github.com/viniciusoramos/Portifolio_Pessoal](https://github.com/viniciusoramos/Portifolio_Pessoal)
- E-mail: [vinicius.ramos@pucminas.edu.br](mailto:vinicius.ramos@pucminas.edu.br)
