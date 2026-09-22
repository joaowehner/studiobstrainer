# Assessment B — detector e evidência técnica

Método: agente isolado `/root/detector_review`, sem leitura do Assessment A. Revisão em 21/09/2026. Escopo: `src`, direção documentada e especificação mestre. Nenhum código de produto alterado por este agente.

## Detector

Executado uma única vez com `impeccable.cmd detect --json src`. Resultado bruto preservado em `docs/redesign/detector.json`; não foi reexecutado após o polimento.

- Total: **2 warnings**, **1 regra distinta**, **1 arquivo**.
- Regra: `overused-font`, categoria `slop`.
- Locais: `src/style.css:9` e `src/style.css:15`, declarações de `Plus Jakarta Sans` para pesos 400 e 600, importadas por `main.tsx`.
- Correspondência atual: os dois locais e a família continuam presentes no código final.
- Triagem: **2 sinais válidos de ocorrência, 0 defeitos acionáveis**. A regra identifica corretamente uma família frequente, mas os dois registros representam uma única escolha tipográfica, não duas falhas de design. A direção preserva essa família para o corpo e usa Barlow Condensed na hierarquia principal. O briefing proíbe trocar tipografia sem necessidade e permite preservar a combinação atual. Substituir a fonte apenas para zerar o detector contrariaria a precedência do briefing.
- Falso positivo contextual: interpretar automaticamente esses dois warnings como prova de interface genérica. A família, isoladamente, não estabelece esse diagnóstico.

## Contraste no código final

Cálculo pela luminância relativa sRGB, com os tokens atuais. Valores arredondados a duas casas. Esses cálculos não dependem do detector.

| Primeiro plano / fundo | Relação | Avaliação |
| --- | ---: | --- |
| Branco `#FFFFFF` / ação `#0072CE` | 4,89:1 | AA para texto normal |
| Texto `#F4F6FA` / CTA final `#005BAB` | 6,29:1 | AA para texto normal |
| Muted `#AEB8C7` / base `#07090E` | 9,94:1 | AAA para texto normal |
| Muted / superfície `#0D111A` | 9,42:1 | AAA para texto normal |
| Muted / superfície elevada `#131926` | 8,77:1 | AAA para texto normal |
| Foco/acento `#38BDF8` / base | 9,30:1 | Supera 3:1 não textual |
| Acento / benefícios `#101F32` | 7,75:1 | AAA para texto normal |
| Borda de campo `#718095` / base | 4,95:1 | Supera 3:1 não textual |
| Borda de campo / superfície | 4,70:1 | Supera 3:1 não textual |

O foco usa outline de 3 px e offset de 5 px (`src/style.css:125`). Há áreas interativas de 44–54 px e campos de 48 px. A nota do formulário ainda é pequena (0,7 rem, `src/style.css:786`); é informação secundária com contraste alto, não um bloqueio. A legenda sobre fotografia depende do conteúdo do recorte e do gradiente inferior; não se atribui conformidade matemática aos pixels da nova fotografia sem captura final.

## Inspeção de navegador efetivamente realizada

Uma aba própria foi criada no IAB e outra no Chrome, sem alterar viewport global. A URL inicialmente fornecida na porta 5180 recusou conexão. O preview foi recuperado na porta 5182 e a aba B do Chrome (`2138573319`) foi usada em **1707 × 842**.

Evidência observada antes do último polimento:

- Hero, legenda, texto, CTA e modal legíveis; sem corte horizontal no viewport.
- DOM: **23 links de âncora**, todos com alvo existente; **0 IDs duplicados**; `scrollWidth <= innerWidth`.
- Clique em Localização levou ao alvo a aproximadamente 104 px do topo, respeitando o header sticky.
- Modal abriu com título e quatro campos rotulados. O fundo ficou inacessível na árvore AX e o body ficou com overflow hidden.
- Escape fechou o modal e devolveu o foco ao botão de agendamento que o abriu; o overflow do body foi restaurado.
- Entrada local de nome de teste e telefone `123` produziu “Confira o WhatsApp e inclua o DDD.” e foco em `lead-phone`. Nenhuma mensagem foi enviada.
- O mapa inicialmente vazio carregou os tiles reais na observação seguinte; há link alternativo para abrir o mapa.
- Consulta aos logs da aba retornou **0 warnings e 0 errors** naquele percurso.

## Confirmação do código após o último polimento

- `src/utils/dialog.ts:4` delimita explicitamente Tab e Shift+Tab entre primeiro e último controle visível; aplicado ao modal em `LeadModal.tsx:63` e ao menu em `Header.tsx:82`.
- Campos obrigatórios identificados no label. `aria-invalid` e `aria-describedby` estão ligados ao campo em erro (`LeadModal.tsx:115` e `:135`). Mensagem anunciada por `role="alert"`; valores são preservados ao fechar/reabrir.
- Imagem do hero agora usa `studioPhotos.training` (`Hero.tsx:36`), conforme aviso de correção do responsável; texto da legenda acompanha o novo conteúdo.
- Estrelas têm largura de preenchimento calculada pela nota real dividida por cinco (`SocialProofSection.tsx:17`), sem sugerir avaliação cinco de cinco.
- Rodapé explicita “Agendar pelo WhatsApp” (`Footer.tsx:50`), distinguindo a saída externa do fluxo via modal.
- Redução de movimento permanece em `src/style.css:1194`; controles nativos, labels e semântica não foram substituídos.

## Limites e fallback

A confirmação visual do último build na porta **5183** foi tentada em nova aba IAB. O backend retornou `Browser is not available: iab`; a listagem de navegadores em seguida retornou `[]`. Portanto, esta revisão não declara uma nova inspeção visual do build 5183: as correções finais foram verificadas no código, e a evidência de browser acima pertence ao preview 5182 anterior a elas. A inspeção final dos seis breakpoints pertence à validação principal, não a este relatório B, que respeitou a instrução de não alterar viewport.

**Overlay não executado.** A API evaluate disponível era explicitamente somente leitura. Não se tentou injetar script, alterar title ou criar DOM, não se iniciou live-server de overlay e não existe overlay visível ao usuário. Fallback: JSON determinístico + leitura contextual do código + inspeção nativa do navegador quando disponível. Nenhum servidor foi iniciado por este agente.

Não foram revalidados envio real de WhatsApp, leitor de tela específico nem todos os estados de teclado no último build. Nenhum defeito adicional de código foi confirmado nesta triagem; a ausência de erros do detector não substitui a validação funcional principal.

Questions skipped: a especificação já autoriza corrigir e concluir integralmente, e Assessment B foi limitado à evidência sem perguntas.
