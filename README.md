# Cuidado em Movimento: landing page, flyer e marca

Transporte e companhia para idosos. Entrega: **landing page** (Next.js), **flyer A4** e **arquivos da marca**.

```
site/     Landing page (Next.js 16 + React 19 + TypeScript, CSS com tokens)
flyer/    Flyer A4 em HTML + script de exportação (PNG 300 dpi, PNG digital, PDF)
marca/    Logotipo em SVG (arquivos-mestre) + folha de marca
docs/     DESIGN.md, INFORMACOES-PENDENTES.md, BRIEFING-FOTOS.md, CHECKLIST-QUALIDADE.md
```

## Rodar o site

```bash
cd site
npm install
npm run dev        # http://localhost:3010
npm run build      # build de produção (todas as páginas estáticas)
npm run typecheck
```

Deploy recomendado: Vercel (importar a pasta `site/` e definir `NEXT_PUBLIC_SITE_URL`). Como todas as páginas são estáticas, funciona também em qualquer hospedagem Node.

**Vitrine:** o repositório `layout_cuidadoemmovimento` é o espelho estático publicado em https://romavitordev.github.io/layout_cuidadoemmovimento/. Ele tem o mesmo código de `site/` e muda só no `next.config.ts` (`output: 'export'`, `basePath` e `NEXT_PUBLIC_VITRINE=1`, que coloca `noindex`). Ao alterar o site aqui, copie as mudanças para lá.

## Onde editar

| O quê | Arquivo |
|---|---|
| Contatos, região, horários, fotos, nomes da equipe, CNPJ | `site/lib/marca.ts` (fonte única) |
| Textos de serviços, etapas, diferenciais e dúvidas | `site/lib/conteudo.ts` |
| Textos do hero, "Quem somos" e contato | `site/app/page.tsx` |
| Cores, fontes, espaçamentos | `site/app/globals.css` (bloco `:root`) |
| Contatos e foto do flyer | bloco `CONFIG` em `flyer/flyer.html`, depois `node exportar.mjs` dentro de `flyer/` |

## Estrutura do site
- `app/page.tsx`: Hero, Quem somos, Serviços (+ "Em cada atendimento"), Como funciona, Diferenciais, Equipe, Dúvidas, Contato.
- `components/`: `Cabecalho` (menu mobile), `Foto` (moldura em arco com esboço enquanto não há foto), `FormularioContato` (monta a mensagem e abre o WhatsApp; não armazena dados), `WhatsappFlutuante`, `Revelar` (animação suave que respeita "reduzir movimento"), `Logo`, `Icone`.
- `app/privacidade`, `app/not-found.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx` (imagem de compartilhamento gerada), `app/icon.svg` (favicon).

## Referências visuais
Refero Styles (Fable, Altitude, Midday; detalhes em `docs/DESIGN.md`) e o conceito de logotipo definido pela equipe, redesenhado em vetor.

## Decisões
- Sem preços, depoimentos, números ou certificações: nada inventado. Placeholders `[INSERIR …]` bem visíveis.
- Formulário → WhatsApp em vez de backend: nenhum dado pessoal guardado no site, e o atendimento continua no canal que a família já usa.
- Número de WhatsApp visível (não escondido no servidor como no buganza_imoveis): o público mais velho prefere ver e ligar, e o número já vai impresso no flyer.
- Sem tema escuro: a marca depende do creme quente e o público é mais velho; o tema claro já atende WCAG AA.
