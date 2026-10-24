---
title: Bruno Dog Walker — componentes e produção
type: design-system-specification
status: direction-approved
created: 2026-10-13
updated: 2026-10-14
version: 2.1.0
---

# Componentes e medidas

Os tamanhos abaixo são especificações propostas para produção. O guia em `index.html` e a página `templates.html` mostram exemplos vivos; o CSS é compartilhado. Exportações demonstrativas ficam em `previews/`. Leia as regras de identidade em [[brand-guidelines]].

## Ações web

| Estado | Fundo primário | Texto | Comportamento |
|---|---|---|---|
| Padrão | Sunshine `#FFD233` | Cocoa `#4A200D` | Ação disponível |
| Hover | `#F4BF16` | Cocoa | Mesmo rótulo, sem alteração de layout |
| Pressionado | `#E5AB08` | Cocoa | Deslocamento visual de 1 px |
| Foco | Fundo do estado + contorno `#004B75` | Cocoa | Outline de 3 px, offset de 4 px |
| Disabled | `#E9E1D2` | `#775B4A` | `disabled`, sem ação |

Altura mínima de 48 px; padding horizontal de 24 px; Nunito Sans 800 em 16 px; raio cápsula. Secundário: fundo transparente, borda de 2 px e texto Deep Walk. Hover secundário: azul claro `#E4F4FB`. Não usar link com aparência de botão para enviar dados; usar `<button>` em ações e `<a>` em navegação.

## Campos

Label visível em 16 px/700; campo de 48 px de altura; texto em 16 px/400; padding 10 × 14 px; raio 8 px. Fundo branco e borda `#927C69`, mais forte que a borda meramente decorativa.

Foco com contorno azul profundo. Erro com borda vermelha `#A12C26`, mensagem textual e `aria-invalid=true`; associar a mensagem com `aria-describedby`. Sucesso verde `#24634A` e mensagem de confirmação. O exemplo local valida o formato e impede envio/armazenamento. Um formulário de produção deve definir campos, privacidade, backend e fluxo próprios.

## Cards, etiquetas e faixas

Cards: fundo branco, raio 16 px e padding 24 px; borda discreta `#D9CBB5`. Não pressupor que todo card seja clicável. Etiqueta: fundo amarelo, texto marrom, Barlow Condensed 700 ou Nunito Sans 800, cápsula. Faixa CTA: fundo Deep Walk, título creme e uma ação amarela. Espaçamento baseado em 4 px: 8, 12, 16, 24, 32, 48, 64 e 96 px.

## Feed editorial — 1080 × 1350

| Elemento | Medida inicial |
|---|---|
| Margem de conteúdo | 54–72 px |
| Título | 88–104 px / Nunito Sans 900 / entrelinha 0,98–1,05 |
| Etiqueta | 32–38 px / Barlow Condensed 700 |
| Foto | Aproximadamente 60–75% da área; reenquadrar pelo rosto |
| Logo | 210–240 px de largura visual, área livre incluída separadamente |
| Assinatura / handle | 32–38 px / Nunito Sans 800 |
| Onda | 60–120 px de altura; uma curva predominante |

Uma frase em duas ou três linhas. Quebra antes da ideia destacada; cor de destaque azul escuro na base creme, amarelo na base Deep Walk. A margem tracejada de 6% é editorial, não a definição de recorte do grid do Instagram. Rever a capa no perfil real.

## Famílias de layout da v2

| ID | Formato | Função | Foto padrão |
|---|---|---|---|
| 01 / feed-editorial | 1080 × 1350 | Frase curta + fotografia central | Cão preto e branco |
| 02 / feed-diagonal | 1080 × 1350 | Foto dominante + curva inclinada | Cão marrom e branco |
| 03 / feed-journal | 1080 × 1350 | Diário com moldura creme | Dupla no parque |
| 04 / reels-cover | 1080 × 1920 | Capa com título e marca compacta | Cão de pelo claro |
| 05 / youtube-editorial | 1280 × 720 | Promessa editorial + retrato | Cão de pelo claro |
| 06 / youtube-photo | 1280 × 720 | Grupo em foto + título em faixa | Dupla no parque |

São seis composições diferentes. As variações de cor não contam como famílias novas. O diário fotográfico mantém a moldura creme; a opção foto em destaque mantém a faixa azul para uma assinatura consistente. O controle de tema altera os layouts editoriais que têm duas bases previstas.

## Reels e Shorts — 1080 × 1920

| Elemento | Medida inicial |
|---|---|
| Título de capa | 100–130 px / 900 / máximo três linhas |
| Legenda de fala | 52–64 px / 800 / entrelinha 1,12–1,2 |
| Linhas por legenda | Até duas; quebrar por frase, sem cortar palavras |
| Bloco de legenda | Marrom sólido, creme, uma palavra amarela, padding 24–40 px |
| Marca compacta | Mascote ou logo com tamanho revisado no celular |
| Nome do cão | 48–64 px / 900; contexto secundário 28–36 px |

**Guia interno para texto em vídeo:** reservar aproximadamente 13% no topo, 20% embaixo, 6% à esquerda e 15% à direita. Em 1080 × 1920 isso resulta aproximadamente em x=65–918 e y=250–1536. Esse guia é uma convenção conservadora proposta; não é uma regra oficial da plataforma nem garante liberdade de sobreposição.

A capa e as legendas são composições distintas. A capa começa o título na região de 15% do topo, com largura reduzida para evitar o lado de controles. O frame de fala deixa o título de capa de fora; legenda, identificação e marca compacta ocupam suas próprias áreas, dentro do guia conservador. Para vídeo em produção, ajustar o texto com os controles reais visíveis e preservar o rosto. As exportações `reels-cover-v2.png`, `video-caption-v2.png`, `video-name-v2.png` e `video-end-v2.png` são quadros estáticos de referência; nenhum vídeo foi reeditado.

## YouTube — 1280 × 720

Na capa 05: título inicial de 107,5 px / 900, ajustável até 76,8 px em 1280 px; no máximo duas linhas, sem dividir palavras; 3–6 palavras como ponto de partida; aproximadamente metade da largura para texto e metade para a foto. A curva não deve ocultar os olhos ou o focinho. Mascote compacto em base creme com largura de caixa de 13% na capa 05; na capa 06, à esquerda da faixa com largura de 11% da área interna. A assinatura evita nome ilegível em miniatura. Margem editorial de 6% e canto inferior direito livre de informação importante, para acomodar elementos de interface como a duração. Inspecionar a miniatura a 320 px de largura.

O arquivo atual é uma amostra de layout; não foi definido um novo título de vídeo nem alterado o material já entregue.

## Vídeo horizontal — 1920 × 1080

Título de 72–104 px / 900; legenda de 42–56 px / 800; identificação com nome em 48–64 px. Manter textos essenciais dentro de uma margem editorial de 6%. Legendas abaixo ou ao lado do rosto, sempre com contraste estável. Em fotos verticais dentro do vídeo horizontal, aceitar enquadramento preservado em vez de impor um recorte que elimine cães relevantes.

## Nome do cão / lower third

Base creme, barra amarela de 6 px no componente de interface, nome marrom e etiqueta azul escuro. O SVG de pata do exemplo é um pictograma simples criado para demonstrar o componente. Não é reprodução de um ícone original. Nome somente após confirmar a identidade. Entrada e saída discretas; presença sugerida de 2,5–4 s. Adaptar proporção à resolução de vídeo.

## Encerramento de vídeo

Logo principal, base creme ou Deep Walk e uma chamada curta em inglês. Sugestões editoriais: “Follow our walk diaries.” ou “Meet us in the neighborhood.”. Usar por 2–3 s como ponto de partida. Confirmar se o CTA corresponde ao objetivo do conteúdo; não substituir automaticamente o final já aprovado.

## Arquitetura técnica

1. `assets/design-tokens.json`: valores e aliases em três camadas; formato simples documentado para este projeto.
2. `tools/generate-tokens.mjs`: verifica aliases e gera `assets/design-tokens.css`.
3. `assets/system.css`: fontes locais, componentes, layouts, responsividade e mídia reduzida.
4. `assets/editorial.css`: seis famílias de layout, três quadros de vídeo e painel da v2.
5. `assets/system.js`: controles do guia e reenquadramento aproximado de fotos; sem framework, backend, analytics ou envio externo.
6. `tools/applications-v2.html`: fonte única de autoria dos exemplos; não edite a cópia gerada dentro da seção marcada do guia.
7. `tools/build-board.mjs` e `tools/build-templates.mjs`: geram o painel, o estúdio e a seção de aplicações do guia a partir dessa mesma fonte.

Não é necessário instalar Tailwind, React ou shadcn para usar este material. Os tokens podem ser integrados em um projeto futuro, após definir a stack. A versão atual não substitui código do site oficial.

## Verificação por peça

Confirmar identidade do cão, foto adequada, rosto livre, legibilidade em tamanho reduzido, assinatura visível, contraste no fundo real e correspondência entre conteúdo e título. Rever cortes no destino antes de publicar. O relatório técnico do pacote está em `previews/verification.json` e não equivale à aprovação visual do usuário.

## Validação com fotografias

O estúdio permite substituir as fotos por retrato escuro, retrato marrom, cão claro, cão dourado, dupla e passeio em grupo na via do parque. O ponto focal aproximado é usado para calcular o recorte no navegador; não há edição dos arquivos de foto. Restaurar “Original de cada layout” recupera os enquadramentos desenhados para cada composição.

O teste não garante que qualquer foto funcione em qualquer composição. Se a caixa de texto alcançar um rosto ou um grupo perder cães relevantes, escolher outro layout ou ajustar a posição. O manifesto registra as fontes e os frames de 20 s / 6,3 s de IMG_2952 e 1,5 s de IMG_1111, extraídos de versões SDR preexistentes. Nenhuma foto de passeio de rua foi inventada: o grupo fotografado está em uma via do parque.

## Painel 3×3

`brand-board.html` reúne marca, conceito, fotografia, tipografia, aplicação social, paleta, exemplo web, detalhes e YouTube. O painel usa os arquivos originais, fontes reais e componentes do pacote. PNG de 2400 × 1800 e PDF de uma página para apresentação; a exportação raster é uma renderização do HTML/CSS, sem reconstrução generativa do logo ou das fotografias.

## Medidas por família — v2.1

As porcentagens/cqw seguem o CSS de cada peça e escalam com a largura. São medidas editoriais iniciais, não limites de plataforma.

| Família | Título / texto | Foto e assinatura |
|---|---|---|
| 01 / feed-editorial | 9cqw, conforme CSS; margem de 6% | Foto central; assinatura no rodapé |
| 02 / feed-diagonal | 9cqw; bloco de texto a 5% da base | Foto dominante, curva e logo na lateral inferior |
| 03 / feed-journal | 7,7cqw; regra de 0,8cqw em fluxo, antes do título | Janela: topo 13%, lados 6%, base 25%; rodapé a 4% da base |
| 04 / reels-cover | 10,5cqw; título a 15% do topo | Mascote a 23% da base; revisar rosto ao trocar foto |
| 05 / youtube-editorial | 8,4 → 6cqw; duas linhas; palavras inteiras | Foto em 48% à direita; mascote à esquerda |
| 06 / youtube-photo | 6cqw; faixa inferior de 23% | Foto em 77%; mascote à esquerda; 16% de padding à direita da faixa |
| video-caption | 5,8cqw; duas linhas | Bloco a 28% da base; marca a 15% do topo |
| video-name | 4,8cqw; largura 42% | Bloco à esquerda 7% e topo 28%, na área livre da foto padrão |
| video-end | 9,5cqw; CTA curto | Marca completa central; handle ao final |

O mínimo da capa 05 equivale a 19,2 px numa prévia de 320 px. Texto que ultrapassa duas linhas ou a largura nesse mínimo é rejeitado com mensagem associada ao campo e `aria-invalid`; a prévia mantém o último título válido. A validação da prévia e a exportação chamam a mesma função de ajuste. Os controles ficam fora da arte e não entram nos PNGs.

Índice móvel: disclosure nativo, oito âncoras válidas, fecha ao navegar. Painel: panorama inteiro inicialmente; ampliação de 960 px dentro de região rolável com foco. Tema: botões de 48 px e `aria-pressed`. Estúdio: H1 e skip link. Ampliação de texto foi simulada no cabeçalho; não substitui teste de leitor de tela ou zoom em dispositivo real.
