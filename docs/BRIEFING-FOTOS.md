# Briefing de fotografia

O site e o flyer têm molduras em **arco** (elemento da identidade) com um esboço da composição no lugar das fotos. Nenhuma foto foi inventada: a ideia é que a família que visita o site veja **as pessoas reais** que vão acompanhar quem ela ama.

## Recomendação: ensaio real (melhor resultado e mais confiança)
Uma manhã de fotos com um fotógrafo local, ou mesmo um celular bom, com luz natural.

**Foto principal (hero do site + flyer)**: formato **retrato (4:5)**, mínimo 1600 × 2000 px
- Quatro pessoas: as **duas mulheres loiras**, o **rapaz (~20 anos, cabelo preto)** e **uma senhora idosa** (pode ser uma avó ou parente, com autorização).
- Cenário cotidiano: praça arborizada, calçada ao lado do carro com a porta aberta, ou um café. Luz da manhã ou do fim de tarde.
- Interação de verdade: conversando, rindo, alguém oferecendo o braço à senhora. Evitar todos olhando para a câmera em fila.
- A senhora no centro e à frente, olhando para alguém da equipe. As duas mulheres bem visíveis e distinguíveis.
- Roupas lisas em tons neutros, azul-marinho ou creme (combinam com a marca). Evitar branco hospitalar ou jaleco.
- Deixar um pouco de céu no topo do enquadramento: o arco corta os cantos de cima.

**Retratos da equipe (3)**: retrato 4:5, mínimo 1000 × 1250 px, mesmo fundo e mesma luz para os três, meio corpo, sorriso natural.

**Extras úteis** (redes sociais e futuras seções): mão apoiando a saída do carro, caminhada lado a lado, mesa de café, chegada em casa.

**Autorização de uso de imagem** assinada por todos (especialmente a senhora e, se for o caso, a família dela).

## Como colocar as fotos

### Site
1. Salve os arquivos em `site/public/fotos/` (JPG ou WebP; o Next.js gera as versões otimizadas sozinho).
2. Em `site/lib/marca.ts`:

```ts
fotos: {
  hero: { src: "/fotos/equipe-com-cliente.jpg", alt: "Equipe do Cuidado em Movimento passeando com uma senhora na praça", width: 1600, height: 2000 },
},
equipe: [
  { nome: "Nome", papel: "Cofundadora", frase: "", foto: { src: "/fotos/nome.jpg", alt: "Nome, da equipe Cuidado em Movimento", width: 1000, height: 1250 } },
  // ...
],
```

Com a foto definida, o esboço e o aviso "Espaço para fotografia" somem automaticamente.

### Flyer
1. Salve a foto em `flyer/fotos/`.
2. Em `flyer/flyer.html`, no bloco `CONFIG`: `foto: "fotos/equipe-com-cliente.jpg"`.
3. Dentro de `flyer/`, rode `node exportar.mjs`.

## Se for usar imagem gerada por IA (só como rascunho)
Imagem gerada **não deve ser apresentada como a equipe real**: a promessa do site é "pessoas próximas, com nome e rosto". Use apenas para aprovar layout ou em posts genéricos, e confira mãos, rostos e textos na imagem.

Prompt sugerido (em inglês, funciona melhor na maioria das ferramentas):

```text
Candid documentary photograph, portrait 4:5. An elderly Brazilian woman (about 80, short silver hair, cardigan) walking arm in arm in a tree-lined city park in soft morning light, accompanied by two blonde women in their 40s and 50s and a young man of about 20 with short black hair (clearly a young adult, not a teenager). All four interact naturally, laughing and talking; the young man offers his arm to the elderly woman. Neutral navy and cream clothing, no uniforms, no medical elements. 50mm lens, shallow depth of field, warm natural tones, realistic skin texture, natural hands, no text.
```
