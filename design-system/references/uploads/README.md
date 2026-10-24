---
title: Bruno Dog Walker — design system v2.1
type: design-system-delivery
status: direction-approved
created: 2026-10-13
updated: 2026-10-14
version: 2.1.0
---

# Design system Bruno Dog Walker — v2.1

Direção **editorial urbana e alegre**, aprovada pelo usuário. Conceito interno: **a alegria dos passeios no bairro**. A v2 recupera o azul vivo, amplia composições e separa os momentos de vídeo. A v1 completa está preservada em `../design-system-v1/`; a v2 anterior está em `../design-system-v2/`. A v2.1 aplica os refinamentos da opção B aprovada em 2026-10-14.

Abra `index.html` para o guia, `brand-board.html` para a apresentação 3×3 e `templates.html` para os exemplos. Fontes e imagens são locais; não é necessário instalar dependências para visualizar.

## Conteúdo

- `brand-guidelines.md`: identidade, conceito, cores, tipografia, fotografia e voz.
- `component-specs.md`: estados web, medidas, seis famílias de layout e vídeo.
- `assets/design-tokens.json` / `.css`: tokens em três camadas.
- `assets/system.css` / `editorial.css` / `system.js`: estilos e controles.
- `assets/logos/`: quatro PNGs originais, copiados sem alterações.
- `assets/fonts/`: Nunito Sans e Barlow Condensed com licenças OFL.
- `assets/photos/`: fotos locais e frames extraídos de vídeos SDR já existentes.
- `references/manifest.json`: origem, tempos, comandos e hashes dos assets.
- `previews/brand-board-v2.png`: painel 3×3 em 2400 × 1800.
- `previews/brand-board-v2.pdf`: painel de uma página.
- `previews/design-system.pdf`: guia visual atualizado.
- `previews/*-v2.png`: exemplos nos tamanhos de produção; três bases creme adicionais.
- `previews/verification.json`: verificações locais.
- `v2-change-notes.md`: evolução da direção visual.
- `v2.1-change-notes.md`: refinamentos de uso e evidência desta entrega.

## Usar os controles

O tema altera os layouts 01, 02 e 05. O título, ao lado da prévia, altera somente a capa 05; até 32 caracteres, duas linhas e mínimo equivalente a 76,8 px em 1280 px. Um título que não cabe gera orientação e conserva o último válido; restaurar recupera o original. Fotos de teste alteram as oito peças fotográficas e podem ser restauradas. Os demais layouts mantêm base fixa. Alterações são temporárias: recarregar restaura os exemplos e os PNGs disponíveis são exportações dos padrões, não do texto digitado. O reenquadramento de teste usa pontos focais aproximados e ainda exige revisão visual. Restaurar as fotos originais recupera o corte desenhado de cada layout.

No celular, o índice abre atalhos às oito seções. O painel abre num panorama inteiro; “Ampliar painel” mostra detalhes numa região com rolagem horizontal e foco por teclado. Os links de tamanho de produção abrem os PNGs dos exemplos.

A cópia de cores depende da permissão do navegador; o código aparece em texto caso não esteja disponível. O formulário é uma demonstração local sem envio ou armazenamento.

## Atualizar

Edite o JSON e gere os tokens:

```sh
node tools/generate-tokens.mjs
```

Edite os layouts **somente em `tools/applications-v2.html`**. Esse fragmento é a fonte única; o primeiro comando atualiza a seção marcada do guia e gera o estúdio. O segundo gera o painel com o mesmo fragmento:

```sh
node tools/build-templates.mjs
node tools/build-board.mjs
```

Para conferir e exportar novamente, com Playwright já disponível:

```sh
node tools/verify-and-export.cjs
```

PDFs e PNGs são cópias exportadas e precisam ser regenerados após mudanças. As fontes autorais continuam editáveis em HTML, CSS, JSON e Markdown.

## Escopo

A direção da v2 está aprovada; a execução das peças está disponível para revisão visual. As frases são exemplos editoriais, não campanhas, slogans ou séries automaticamente aprovados. Os quadros de vídeo são estáticos. Nenhuma conta, site oficial, exportação de vídeo, narração ou trilha foi alterada, e não houve publicação.

Os nomes `*-v2.png` e `brand-board-v2.*` identificam a família editorial e foram mantidos para preservar links. Seu conteúdo é a exportação atual v2.1, identificada no relatório `previews/verification.json`.
