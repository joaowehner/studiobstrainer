# Direção de arte

Redesign integral de uma landing de personal training em Campo Grande. A marca, a logo, os dados centralizados, as âncoras e o fluxo comercial permanecem. Estado inicial: 13 blocos com repetição de cards, bordas, ícones, pills, métricas e brilhos; modal sem contenção de foco, Escape ou restauração do foco. Build inicial aprovado: JS 308,89 kB / CSS 62,40 kB (sem gzip).

## Sistema visual

- Base `#07090E`; superfície `#0D111A`; superfície elevada `#131926`; ação `#0072CE`; hover `#005BAB`; foco `#38BDF8`. Ciano `#00A8FF` preservado no sistema. Texto branco suave e cinza frio com contraste AA.
- Barlow Condensed 700 nos títulos: proporções condensadas de comunicação esportiva, sem estética tecnológica. Plus Jakarta Sans 400/600 nos textos, preservando a família existente. Fontes locais, licenças OFL.
- Layout de 1280 px, margens fluidas; hero dividido entre mensagem e fotografia; galeria assimétrica do espaço; diferenciais em agrupamentos editoriais; benefícios em faixa tipográfica; sequência de quatro passos; história centrada na fundação; reputação isolada; mapa integrado à informação prática.
- Variância 7, movimento 3, densidade 3. Apenas feedback e transições de estado. Sem revelações repetitivas, parallax ou bibliotecas de animação.
- Fotografias retangulares, controles com raio de 4 px, dialog com 8 px; sem containers decorativos ao redor das seções.
- Mobile projetado separadamente: mensagem e CTA antes da foto, galeria empilhada, etapas verticais, menu e modal em dialog nativo, barra de contato com área segura.

## Revisão da proposta

A foto do acompanhamento substitui o painel de marca fictício. A logo fica no header e rodapé, sem recriação ou filtros. A história e a reputação têm funções diferentes e não repetem métricas. Ícones ficam restritos a controles. Números de etapas correspondem ao processo real. Benefícios são objetivos do treino, sem novas promessas clínicas. O nome de nenhuma pessoa nas fotos será inferido.

## Skills e precedência

1. `frontend-design` local: direção de arte.
2. `design-taste-frontend` local (taste-skill): execução.
3. `jakubkrehel/make-interfaces-feel-better`, commit `35545ea1512ad59fa463e6b1f95ca9c052981fe6`: polimento após estrutura.
4. `pbakaus/impeccable`, commit `f2c7051853848826aac2f4646581d62a732155ad`: auditoria final.

O briefing prevalece sobre defaults das skills: modo escuro, Lucide, azul, ausência de imagens geradas, CTAs recorrentes de conversão e preservação de dados reais. Nenhum redesign de marca.

## Origem das imagens

O usuário indicou o Instagram oficial como fonte em 21/09/2026. Assets baixados do conteúdo renderizado, sem uso de mensagens privadas, sem geração de imagens e sem hotlink ao CDN temporário.

| Arquivo | Publicação oficial | Uso |
| --- | --- | --- |
| `acompanhamento.jpg` | https://www.instagram.com/studiobstrainer/reel/DYr-KzrxVN-/ | Galeria, orientação durante o treino |
| `entrada.jpg` | https://www.instagram.com/studiobstrainer/reel/DZ-SEbgRgYh/ | Entrada física do Studio |
| `treino.jpg` | https://www.instagram.com/studiobstrainer/reel/DYj57NixxeK/ | Hero, exercício nos equipamentos |

São imagens de capa de publicações reais. Não atribuir identidades, depoimentos ou resultados aos participantes. Original da logo preservado byte a byte. Recortes apenas via `object-fit` no layout.

## Polimento e entrega

Hero usa o frame de musculação, sem legenda de reel sobre a pessoa. A orientação próxima fica na galeria, com recorte CSS acima da legenda original. Entrada com enquadramento que preserva o rosto. Legendas e alt descrevem a cena sem atribuir identidades.

`logo-display.webp` é uma derivação reduzida do arquivo original, sem redesenho, filtros ou distorção. `entrada.webp` é uma conversão comprimida da mesma fotografia. Os JPGs e `public/logo.png` continuam preservados. Fontes WOFF2 derivadas dos TTFs licenciados, sem alterações tipográficas. Nenhuma imagem sintética.

A pasta externa `bs-trainer-assets` e o ZIP, encontrados durante a tarefa sem origem confirmada, foram preservados e não incorporados ao site. O layout usa exclusivamente as fotografias verificadas no Instagram oficial.
