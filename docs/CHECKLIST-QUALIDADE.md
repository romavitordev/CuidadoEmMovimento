# Checklist do Padrão de Qualidade (Roma & Buganza): status

`[x]` feito · `[~]` parcial · `[ ]` pendente · `n/a` não se aplica (com motivo)

## 1. Design e referências
- [x] Direção visual a partir de referências (Refero: Fable, Altitude, Midday), em `docs/DESIGN.md`
- [x] Tokens antes das telas (`:root` em `globals.css`)
- [~] Máximo de 2 famílias de fonte: DM Serif Display + Manrope; **Parisienne** é exceção pedida no briefing (2 usos no site, sem preload)
- [x] Contraste WCAG AA verificado (dourado só como fundo de botão ou ícone sobre azul; `#8A5A0B` para texto dourado sobre claro)
- [x] Animações respeitam `prefers-reduced-motion`
- n/a Cult UI / ShaderGradient / 3D: não acrescentariam confiança a este público; site mantido leve

## 2. Frontend
- [x] Mobile first; testado em 375px e 1280px, sem rolagem horizontal
- [ ] Testar também em 768px e 1920px e em aparelho real
- [x] Áreas de toque ≥ 44px (botões 54px, campos 52px)
- n/a Tema escuro (ver README)
- [x] CTA acima da dobra (inclusive no celular) e WhatsApp flutuante
- [x] Formulário com estados de erro, enviando e sucesso, com fallback para WhatsApp
- [ ] Prova social real (depoimentos, fotos): depende de clientes e do ensaio
- [ ] Lighthouse mobile ≥ 90/95/95/95: rodar após publicar com as fotos reais
- [x] Imagens via `next/image` (AVIF/WebP, srcset, lazy) quando as fotos entrarem
- [x] Fontes servidas pelo próprio site com `display: swap` (next/font)
- [x] HTML semântico, 1 `h1`, foco visível, link "Pular para o conteúdo", labels em todos os campos
- [x] `title`, description, canonical, Open Graph, Twitter Card, JSON-LD `LocalBusiness` (só com dados reais)
- [x] `sitemap.xml` e `robots.txt`
- [ ] Search Console, Google Business Profile, GA4/GTM após o domínio (os botões já têm `data-evento` para medir cliques)

## 3. Backend
- n/a Sem backend: o formulário não envia dados ao servidor. Honeypot incluído mesmo assim.
- [ ] Headers de segurança (CSP, HSTS) no `next.config.ts`: configurar no deploy

## 4. LGPD
- [x] Consentimento no formulário
- [~] Política de Privacidade criada (`/privacidade`); faltam dados do controlador e revisão jurídica
- n/a Banner de cookies: sem analytics ou pixel por enquanto
- [ ] Razão social, CNPJ, e-mail

## 5. Entrega
- [x] README com stack, como rodar, onde editar e referências
- [ ] Textos e fotos reais (ver `INFORMACOES-PENDENTES.md`)
- [ ] Testar em Safari (iOS) e Samsung Internet
- [x] Favicon, imagem de compartilhamento (OG) gerada, 404 personalizada
