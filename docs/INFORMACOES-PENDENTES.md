# Informações pendentes antes de publicar

Tudo que depende de dados reais está marcado no site como **[INSERIR …]** (caixa tracejada dourada) e é editado em **um único arquivo**: `site/lib/marca.ts`. No flyer, o bloco `CONFIG` no topo de `flyer/flyer.html`.

## Contatos — `site/lib/marca.ts` → `contato`
| Campo | Exemplo de formato | Onde aparece |
|---|---|---|
| `whatsapp` | `"5511999999999"` (só dígitos, com 55 + DDD) | Todos os botões de WhatsApp, formulário, JSON-LD |
| `whatsappExibicao` | `"(11) 99999-9999"` | Seção Contato |
| `telefone` | `"(11) 3333-3333"` | Seção Contato (link para ligar) |
| `instagram` | `"cuidadoemmovimento"` (sem @) | Seção Contato, JSON-LD |
| `email` | `"contato@…"` | Política de Privacidade, JSON-LD |
| `regiao` | `"Zona Sul de São Paulo e região"` | Contato, Dúvidas, JSON-LD |
| `horario` | `"Segunda a sábado, 7h às 19h"` | Contato |

Enquanto `whatsapp` estiver vazio, os botões levam para a seção de contato e o formulário avisa que o canal está sendo configurado (nenhum link quebrado vai ao ar).

## Fotografias — ver `docs/BRIEFING-FOTOS.md`
- [ ] Foto principal (hero e flyer): senhora idosa com as três pessoas da equipe.
- [ ] Três retratos individuais da equipe.
- [ ] Autorização de uso de imagem assinada por todos que aparecem (inclusive a senhora).

## Equipe — `marca.equipe`
- [ ] Nome de cada integrante (o site mostra "Cofundadora/Cofundador" como papel — confirmar).
- [ ] Frase curta de apresentação (opcional).

## Legal / LGPD — `marca.legal` e `site/app/privacidade/page.tsx`
- [ ] Razão social e CNPJ (ou CPF/MEI, se for o caso).
- [ ] E-mail para assuntos de privacidade.
- [ ] Prazo de retenção das conversas de agendamento.
- [ ] Revisão da Política de Privacidade por assessoria jurídica.

## Publicação
- [ ] Domínio definitivo → `NEXT_PUBLIC_SITE_URL` (ver `site/.env.example`).
- [ ] Nome definitivo da marca (hoje "provisório"): trocar em `marca.nome` e nos SVGs de `/marca`.
- [ ] Crédito do estúdio no rodapé: confirmar nome/URL em `marca.credito` (ou deixar `nome: ""` para remover).
- [ ] Google Business Profile e Search Console (padrão do estúdio).

## Decisões deliberadas (não são pendências)
- **Preços** não aparecem no site nem no flyer (política comercial em definição). A pergunta "Como é definido o valor?" diz apenas que depende da duração.
- **Sem depoimentos, avaliações ou números** inventados. Quando houver clientes reais (com autorização), dá para adicionar uma seção de depoimentos.
- **Sem promessas de certificação, licença ou "segurança garantida".** O rodapé deixa claro que não é serviço médico/enfermagem.
