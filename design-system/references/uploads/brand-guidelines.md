---
title: Bruno Dog Walker — diretrizes de marca
type: design-system
status: direction-approved
created: 2026-10-13
updated: 2026-10-14
language: pt-BR
version: 2.1.0
---

# Bruno Dog Walker — design system v2.1

Uma identidade alegre, acolhedora e urbana, construída com os logos e referências enviados pelo usuário. Este pacote propõe uma linguagem comum para o conteúdo do projeto YT DOGS e suas aplicações em Instagram, YouTube e web. A direção editorial urbana e alegre foi aprovada pelo usuário em 2026-10-13. A v2.1 implementa essa direção com refinamentos de composição e consulta aprovados em 2026-10-14; a aprovação da direção não é uma aprovação visual automática de cada peça.

O guia visual está em `index.html`; a visão geral está em `brand-board.html` e `previews/brand-board-v2.png`. As definições reutilizáveis estão em `assets/design-tokens.json` e `assets/design-tokens.css`. As medidas por formato estão em [[component-specs]].

## Origem das decisões

| Referência | O que informa o sistema |
|---|---|
| Quatro logos PNG enviados | Mascote dourado, contornos marrons, nome e círculo azul; versões preservadas |
| Sete posts de Instagram | Alternância entre creme e azul, títulos fortes, amarelo de destaque, ondas e fotografia real |
| Captura do perfil | Contexto local NYC / Upper East Side, imagens reais, destaques circulares e assinatura recorrente |
| Captura do site oficial | Componentes de serviço, espaços claros, azul de apoio e chamadas amarelas |
| Projeto YT DOGS | Necessidade de capas, títulos, legendas e identificação em vídeo |

As cores foram estimadas a partir das imagens e normalizadas em valores sólidos. A tipografia é uma proposta visual compatível, não uma identificação comprovada da fonte dos posts. A captura do site é referência histórica; serviços, disponibilidade, contatos e promessas não foram verificados no site atual. As capturas não autorizam publicar ou alterar contas.

## Conceito visual aprovado

**A alegria dos passeios no bairro.** Cães reais e histórias locais definem o universo da marca. As curvas remetem aos percursos, o amarelo pontua energia e descoberta, a fotografia mostra companhia e o mascote assina a experiência. As frases em inglês do painel são exemplos editoriais, não slogans ou séries adotados automaticamente.

A v2 preserva os quatro logos. Recupera o azul vivo em superfícies de marca, cria seis famílias de layout e separa capa, legenda, identificação e encerramento de vídeo. A v1 completa está preservada em `../design-system-v1/`.

## Princípios

1. **O cão vem primeiro.** Olhos, focinho e expressão ficam livres de texto e enfeites.
2. **Uma ideia por peça.** Título curto, fotografia protagonista e assinatura discreta.
3. **Acolhimento com clareza.** Formas arredondadas e tons quentes; leitura direta e bom contraste.
4. **Vida real em NYC.** Material verdadeiro de passeios e cuidado, com luz e comportamento naturais.
5. **Repetição com variedade.** Alternar bases azul e creme, preservando hierarquia, fontes e assinatura.

## Cores

| Nome | Valor proposto | Uso |
|---|---|---|
| Walk Blue | `#008BD2` | Identificação da marca, superfícies expressivas e elementos gráficos |
| Sunshine | `#FFD233` | Chamada, etiqueta, palavra de destaque, ação principal |
| Warm Cream | `#FFF9EA` | Base clara, respiro e texto sobre superfícies escuras |
| Cocoa | `#4A200D` | Texto principal e conexão com os contornos dos logos |
| Deep Walk | `#006095` | Links, texto azul pequeno e fundo de peças com texto amarelo |

As superfícies de marca usam azul vivo. Títulos creme podem aparecer sobre ele em tamanho grande. Destaques amarelos têm base amarela e letras marrons, em vez de texto amarelo solto sobre azul vivo. Textos funcionais usam Deep Walk quando precisam de azul. Tons de apoio: azul claro `#E4F4FB`, marrom secundário `#775B4A`, marrom profundo `#261408`, branco `#FFFFFF`. Verde `#24634A` e vermelho `#A12C26` são feedback funcional, sem uso decorativo recorrente.

Na base clara, o creme predomina, o azul estrutura e o amarelo pontua. Na base expressiva, o azul predomina e o creme/amarelo dão contraste. Isso é uma relação visual, não uma fórmula rígida de porcentagem. A fotografia não entra nesse cálculo.

Para web, a referência de contraste é [WCAG 2.2 — Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html): 4,5:1 para texto normal e 3:1 para texto grande (24 px regular ou aproximadamente 18,7 px em negrito). O guia mede combinações sólidas; isso não certifica toda a experiência ou todas as fotos.

- Marrom sobre creme e amarelo: texto normal.
- Deep Walk sobre creme: texto normal.
- Creme e amarelo sobre Deep Walk: texto normal.
- Creme sobre azul vivo: somente texto grande.
- Amarelo sobre azul vivo: não usar em texto; fica abaixo de 3:1.
- No swatch azul vivo, a legenda usa marrom profundo para leitura em tamanho pequeno.
- Texto sobre fotografia precisa de base sólida ou de avaliação do trecho real mais claro/escuro. O resultado varia com o enquadramento.

## Logos e mascote

| Arquivo local | Papel |
|---|---|
| `assets/logos/bdw-primary.png` | Principal: cachorro + nome + círculo azul |
| `assets/logos/bdw-alternate.png` | Alternativo: cachorro + nome sem círculo |
| `assets/logos/bdw-wordmark.png` | Assinatura com nome; composição horizontal |
| `assets/logos/bdw-mascot.png` | Mascote isolado; identidade compacta |

São cópias dos quatro arquivos fornecidos, com hashes de integridade em `references/manifest.json`. Não foram vetorizados, redesenhados, recoloridos ou recortados. O nome possui margens transparentes grandes e alguns pixels periféricos; não calcular seu tamanho visível somente pelas dimensões do PNG.

Regras propostas:

- Preservar proporção, cores, expressão e contornos. Sem distorção, filtros, sombras novas ou rotação do logo.
- Área livre de 15% da largura **visível** da marca em cada lado; aumente em composições densas.
- Logo completo com largura visual mínima de 120 px em interfaces. Em um arquivo de feed de 1080 px, começar com 210–240 px e revisar a leitura na tela do celular.
- Mascote isolado com largura visual mínima de 48 px para usos compactos. Em avatar, centralizar num círculo azul e não incluir o nome em tamanho ilegível.
- Em fotos movimentadas, dar ao logo uma base creme ou azul com respiro.
- PNG é o formato disponível. Não usar esse raster como se fosse vetor ou ampliar sem revisar o resultado.
- “Bruno” é parte do nome da marca. O mascote não recebeu nome próprio neste sistema.

O perfil mostra uma versão anterior do personagem. A proposta usa os quatro PNGs enviados como família visual atual; não substituiu o avatar real.

## Tipografia

**Nunito Sans** é a família principal: 900 em títulos, 800 em ações/legendas, 600 em apoio e 400 em texto. A forma aberta e o peso forte fazem a ponte com os posts. **Barlow Condensed 700** é um acento para etiquetas curtas, séries e capítulos; não usar em parágrafos.

| Papel em interface | Tamanho base | Peso | Entrelinha |
|---|---:|---:|---:|
| Display | 80 px | 900 | 1,0–1,05 |
| H1 | 56 px | 900 | 1,05–1,1 |
| H2 | 40 px | 900 | 1,1 |
| H3 | 24 px | 900 | 1,2 |
| Introdução | 20 px | 600 | 1,5 |
| Corpo | 16 px | 400 | 1,6 |
| Apoio | 14 px | 600 | 1,4 |

Em telas pequenas, reduzir display para 44–48 px e H2 para 30–32 px. Títulos de até três linhas, alinhados à esquerda; entreletras de −0,025 a −0,035 em títulos grandes. Não comprimir ou esticar o texto. Etiquetas podem ser maiúsculas; parágrafos usam caixa normal. Texto corrido limitado a aproximadamente 65 caracteres por linha.

As fontes e licenças OFL estão incluídas em `assets/fonts/`, carregadas localmente. Fontes oficiais: [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans) e [Barlow Condensed](https://fonts.google.com/specimen/Barlow+Condensed). Essas famílias foram escolhidas para esta proposta; não redesenham a tipografia do logo.

## Elementos gráficos

**Onda:** uma curva dominante para dividir título e foto ou criar rodapé. Se usar faixa amarela, manter espessura visual constante. Evitar ondas em todas as seções de uma interface.

**Etiqueta:** cápsula amarela com texto marrom. Exemplos editoriais: “WALK DIARIES / NYC”, “DOG WALKING / NYC”. São sugestões de nomenclatura, não novas séries oficialmente aprovadas.

**Brilho e traços:** um brilho ou até três traços por peça. Não cobrir rosto ou sugerir movimento inexistente. Ícones funcionais usam formas simples e consistentes; os pictogramas existentes no perfil orientam a função dos destaques, sem pretensão de serem arquivos vetoriais recuperados.

**Cantos:** 8 px em campos, 16 px em cards, 24 px em grandes blocos, cápsula em etiquetas/ações. Usar bordas discretas e sombras leves somente em componentes que precisem de separação.

## Fotografia e vídeo

- Priorizar registros próprios e verdadeiros. O ambiente urbano/parque faz parte da história.
- Recortar para tornar olhos e expressão legíveis; não cortar o focinho ou cobrir o rosto com elementos gráficos.
- Preservar aparência natural. Se precisar corrigir exposição ou cor, fazê-lo como uma etapa separada com a fonte original e revisão.
- Não remover guias ou alterar equipamento para sugerir uma situação diferente da filmagem.
- Capa deve corresponder ao assunto e ao cão mostrado. Não criar antes/depois ou segurança garantida a partir de uma imagem.
- Os exemplos do sistema usam fotos já existentes no projeto e três frames extraídos de vídeos SDR já preparados. As fontes existentes foram preservadas; os frames e seus tempos estão no manifesto. O navegador faz reenquadramento de apresentação; os arquivos de origem ficam intactos.

## Aplicações e voz

**Instagram:** alternar frase editorial, curva diagonal e diário fotográfico em bases creme/azul com fotos e vídeo reais. Frase curta em voz do cão, humor cotidiano e assinatura recorrente. Evitar transformar todo registro de passeio em anúncio.

**YouTube:** rosto expressivo, uma promessa editorial simples e poucas palavras. “More than a walk.” é uma sugestão de chamada que aparece no conteúdo local; não é um slogan adotado automaticamente.

**Vídeo:** capa com título próprio; durante a fala, apenas legendas em base marrom, creme na leitura e amarelo em uma palavra; identificação pontual e encerramento dedicado. Não colocar o título da capa como uma caixa permanente durante o vídeo. Nome do cão apenas quando sua identidade estiver confirmada. Usar o exemplo “Dog name” como placeholder.

**Web:** comunicar serviços em inglês claro; uma ação por bloco. Usar labels visíveis e feedback textual de erro/sucesso. As telas deste pacote não enviam formulários ou agendam serviços.

Tom público: próximo, alegre e confiante. Humor na perspectiva do cão em redes; precisão em serviços. Sem superlativos, disponibilidade 24/7, descontos, depoimentos ou promessas de comportamento sem comprovação. Diretrizes internas em português, exemplos públicos em inglês para acompanhar o contexto NYC das referências.

## Movimento

Transições de interface em 160–240 ms, sem efeito contínuo decorativo. Respeitar `prefers-reduced-motion`. Em vídeo, sugerir entrada discreta de faixa/legenda, com tempo real de leitura; nome por 2,5–4 s e fecho por 2–3 s são pontos de partida, não durações obrigatórias.

Voz, trilha, mixagem e decisões já aprovadas nos vídeos existentes permanecem fora da implementação deste pacote. O material produzido anteriormente mantém sua exportação; este sistema não foi aplicado retroativamente.

## Uso e manutenção

O JSON é a fonte dos tokens. A camada primitiva guarda valores; a semântica lhes atribui funções; a de componentes define ações, campos e peças. `tools/generate-tokens.mjs` resolve referências, detecta ciclos e gera CSS.

As medidas e estados estão em [[component-specs]]. Para criar uma peça nova, partir do formato correspondente, substituir a foto e o texto e revisar rosto, contraste e leitura em tamanho real de celular. Os limites de área segura são convenções editoriais conservadoras; verificar os controles e recortes na plataforma de destino.

Nenhuma conta, publicação, site oficial, imagem original ou exportação de vídeo foi alterada. Aprovar a direção visual é uma decisão posterior do usuário, distinta da verificação técnica local.

A v2.1 corrige as composições padrão, preserva palavras inteiras e tamanho mínimo no título YouTube, aproxima controle e prévia e facilita consulta móvel. Não altera paleta, fontes, conceito ou arquivos originais. Para detalhes, leia `v2.1-change-notes.md`.
