# Design direction — Cuidado em Movimento

Reference: Refero Styles, coleção "Website font pairings" (revisada em 17/11/2026)
- **Fable** — "literary reading nook with cream": serifa de display + sans de leitura sobre fundo creme. Inspirou o canvas creme e a divisão serifa (mensagem) / sans (trabalho).
- **Altitude** — "midnight financial editorial": serifa clássica sobre azul profundo. Inspirou as seções em azul-marinho com texto creme e o tom de credibilidade.
- **Midday** — serifa de display em peso regular, apertada nos tamanhos grandes; sans com letter-spacing aberto em rótulos pequenos. Inspirou os eyebrows em caixa alta espaçada.

O que mudamos para este projeto: paleta da marca (azul-marinho, dourado, creme), corpo de texto maior (18px) pensando em leitores mais velhos e no celular, molduras em arco para fotografias (elemento próprio da marca: "porta de casa", acolhimento) e a linha-caminho dourada como fio condutor visual.

Purpose: filhos, netos e familiares (público principal) que procuram, quase sempre pelo celular, alguém de confiança para acompanhar pais e avós. Secundário: os próprios idosos. Tarefa: entender o serviço em segundos e chamar no WhatsApp.

## Marca
- Símbolo (conceito definido pela equipe e redesenhado em vetor): coração dourado aberto (acolhimento) envolvendo um carro e duas pessoas — acompanhante e pessoa acompanhada — sobre uma estrada azul com faixa dourada (movimento, trajeto).
- Arquivos-mestre em `/marca` (SVG): `simbolo-azul.svg` (fundos claros), `simbolo-creme.svg` (fundos azuis), `avatar-azul.svg` e `avatar-dourado.svg` (redes sociais, WhatsApp, favicon). `folha-de-marca.png` mostra as combinações.
- Wordmark: "Cuidado / *em* Movimento" em DM Serif Display, "em" em itálico dourado, filete dourado sublinhando, separado do símbolo por um fio dourado vertical.
- Frases: "Mais que transporte, uma companhia em todas as ocasiões." / "Cuidado que acompanha. Sempre." (esta última é a única em manuscrita).
- Tamanho mínimo do símbolo completo: 40px de largura na tela / 12mm impresso. Abaixo disso use só o avatar.

## Typography
- Display: **DM Serif Display** 400 (e itálico para ênfase). Títulos de seção 2.1–3.4rem (clamp), line-height 1.08, letter-spacing −0.01em. Só títulos e números de etapa.
- Body: **Manrope** (variável 400–800). 1.125rem (18px) no corpo, line-height 1.65, largura de leitura ≤ 62ch. Botões e rótulos em 600–700.
- Eyebrow/labels: Manrope 700, 0.78rem, caixa alta, letter-spacing 0.16em.
- Manuscrita (exceção controlada): **Parisienne**, só na frase "Cuidado que acompanha. Sempre.", carregada sem preload. O padrão do estúdio pede no máximo 2 famílias; a terceira entra porque o briefing pede uma manuscrita "com bastante moderação", e ela aparece em 2 lugares no site e 1 no flyer.

## Color roles
| Token | Hex | Papel |
|---|---|---|
| `--azul` | #102B4C | Texto principal, seções de destaque, botão secundário, rodapé |
| `--azul-2` | #284B70 | Variações, bordas sobre azul, gradientes |
| `--ouro` | #E9A52B | Ação principal (fundo de botão com texto azul, 6.7:1), detalhes decorativos, ícones sobre azul |
| `--ouro-tinta` | #8A5A0B | Dourado para **texto** sobre creme/branco (5.5:1). O #E9A52B sobre creme dá 1.98:1 e nunca é usado em texto claro |
| `--creme` | #FFF6E9 | Canvas principal |
| `--branco` | #FFFFFF | Cards e áreas de respiro |
| `--tinta-suave` | #4A5B70 | Texto secundário sobre claro (6.5:1) |
| `--creme-suave` | #C9D3DF | Texto secundário sobre azul (9.4:1) |

Regra: o dourado é acento. Um botão dourado por bloco, no máximo. Nenhuma cor nova (nem o verde do WhatsApp: o ícone já identifica o canal).

## Layout
- Content width: 1180px; texto corrido ≤ 62ch.
- Spacing rhythm: 8 / 16 / 24 / 40 / 64 / 96–128px (seções: clamp 72→128px).
- Raios: 14px (campos, chips), 22px (cards), 999px (botões), arco 999px 999px 28px 28px (fotos).
- Sombras: suaves e azuladas (rgba 16,43,76), nunca pretas.
- Mobile first; botões com 52px de altura (área de toque ≥ 44px).

## Motion
- Revelação suave (opacity + 16px) ao entrar na tela, 600ms ease-out; desligada em `prefers-reduced-motion`.
- Linha-caminho do hero "se desenha" uma vez (stroke-dashoffset).
- Sem parallax, sem carrosséis automáticos.

## Open decisions
- Fotografias reais (equipe + cliente) — ver `docs/BRIEFING-FOTOS.md`.
- Contatos, região e horário de atendimento — ver `docs/INFORMACOES-PENDENTES.md`.
- Domínio definitivo (afeta canonical, sitemap e Open Graph).
