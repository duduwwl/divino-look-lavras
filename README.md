# Divino Look — website

Site da **Divino Look**, boutique de moda feminina na Rua Santana, 208, Loja 1 — Centro, Lavras–MG
([@divinolook_lavras](https://www.instagram.com/divinolook_lavras/)).

**Publicado em:** https://divino-look-lavras.vercel.app/

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Landing page **sem produtos**: hero com o nome como monumento, categorias, nova coleção (temas que abrem o catálogo filtrado), lookbook, sobre a loja, atendimento, Instagram, newsletter com cadastro real e contato |
| `/produtos` | Catálogo com busca, categorias, filtros combinados (preço, tamanho, cor, disponibilidade), ordenação, "Carregar mais" e filtros sincronizados na URL |
| `/produtos/[slug]` | Página de produto: galeria com zoom e visualização em tela cheia, tamanho, cor, quantidade, sacola, compra pelo WhatsApp e produtos relacionados |
| `/politicas` | Texto-base de políticas (demonstrativo, a ser aprovado pela loja) |

Sacola e favoritos ficam no `localStorage` do navegador. O pedido é finalizado pelo WhatsApp com a mensagem já montada; o site **não** processa pagamentos.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build
```

Requer Node 22+.

## Configuração

| Variável | Uso | Padrão |
| --- | --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número do WhatsApp (só dígitos, com 55 + DDD) | `5535988281548` (link "Fale conosco" do Linktree da loja) |
| `DATABASE_URL` | Conexão PostgreSQL Neon usada somente no servidor | fornecida pela integração Vercel/Neon |
| `DATA_HASH_SECRET` | Segredo para anonimização de IP no antispam | variável sensível na Vercel |
| `NEXT_PUBLIC_SITE_URL` | URL pública (canonical, Open Graph, sitemap) | `https://divino-look-lavras.vercel.app` |

Para trocar o WhatsApp sem mexer no código, altere `NEXT_PUBLIC_WHATSAPP_NUMBER` nas variáveis do projeto Vercel.
Endereço, Instagram e grupo VIP ficam em `src/config/site.ts`.

## Catálogo

O catálogo principal fica no PostgreSQL Neon e reúne 146 produtos revisados a partir das fotografias fornecidas pela Divino Look.
As fotos ficam em `public/products`, separadas em uma pasta por produto. `src/data/products.ts` é a fonte de importação e também
serve como fallback seguro caso o banco fique temporariamente indisponível.

### Banco de dados

O esquema versionado em `drizzle/` contém categorias, produtos, imagens, tamanhos, cores, coleções, newsletter, pedidos,
itens de pedido, configurações, auditoria e controle de abuso. Para sincronizar um ambiente autorizado:

```bash
npm run db:migrate
npm run db:seed
npm run db:check
```

As credenciais ficam apenas nas variáveis protegidas da Vercel e em `.env.local` (ignorado pelo Git). Nunca use `NEXT_PUBLIC_`
em segredos do banco. O endpoint da newsletter valida origem e dados, usa honeypot, anonimiza IP e limita tentativas.

## Bibliotecas de componentes usadas

| Biblioteca | Componente | Onde |
| --- | --- | --- |
| Motion Primitives (MIT) | `TextEffect` | Frase de abertura do hero |
| | `InView` | Entradas de seções |
| | `AnimatedGroup` | Stagger dos cards do catálogo e dos temas da nova coleção |
| | `ScrollProgress` | Barra de progresso no topo da home |
| | `TransitionPanel` | Abas Descrição / Tamanhos / Cuidados do produto |
| | `InfiniteSlider` | Faixa do Instagram |
| | `AnimatedNumber` | Subtotal da sacola |
| Fancy Components (MIT) | Sticky Footer (block) | Rodapé que se revela sob a página |
| | `VerticalCutReveal` | Frase do rodapé |
| Watermelon UI | Range Selection Slider (`RangeSlider` + `RollingNumber`) | Filtro de faixa de preço |
| | Pop Stepper | Seletor de quantidade (produto e sacola) |
| Canvas UI | — (analisada, não integrada) | Os efeitos dependem do recurso experimental *html-in-canvas* do Chrome; nos navegadores atuais caem para HTML puro, e a estética (HUD, glitch, partículas) não combina com a marca |

Todos os componentes foram copiados para `src/components/{motion-primitives,fancy,watermelon}` com a origem
anotada no topo do arquivo e adaptados (cores, acessibilidade, `prefers-reduced-motion`, Motion 14 / React 19).

## Deploy

O repositório está conectado ao projeto `zoryon1/divino-look-lavras` na Vercel. Cada push na `main` publica a produção;
o GitHub Actions executa typecheck, lint e build como verificação independente.
