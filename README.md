# Divino Look — website

Site da **Divino Look**, boutique de moda feminina na Rua Santana, 208, Loja 1 — Centro, Lavras–MG
([@divinolook_lavras](https://www.instagram.com/divinolook_lavras/)).

**Publicado em:** https://duduwwl.github.io/divino-look-lavras/

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Landing page **sem produtos**: hero com o nome como monumento, categorias, nova coleção (temas que abrem o catálogo filtrado), lookbook, sobre a loja, atendimento, Instagram, newsletter (demonstrativa) e contato |
| `/produtos` | Catálogo com busca, categorias, filtros combinados (preço, tamanho, cor, disponibilidade), ordenação, "Carregar mais" e filtros sincronizados na URL |
| `/produtos/[slug]` | Página de produto: galeria com zoom e visualização em tela cheia, tamanho, cor, quantidade, sacola, compra pelo WhatsApp e produtos relacionados (33 páginas geradas) |
| `/politicas` | Texto-base de políticas (demonstrativo, a ser aprovado pela loja) |

Sacola e favoritos ficam no `localStorage` do navegador. O pedido é finalizado pelo WhatsApp com a mensagem já montada; o site **não** processa pagamentos.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build      # exporta o site estático para ./out
```

Requer Node 22+.

## Configuração

| Variável | Uso | Padrão |
| --- | --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número do WhatsApp (só dígitos, com 55 + DDD) | `5535988281548` (link "Fale conosco" do Linktree da loja) |
| `NEXT_PUBLIC_BASE_PATH` | Subcaminho do GitHub Pages | definido no workflow: `/divino-look-lavras` |
| `NEXT_PUBLIC_SITE_URL` | URL pública (canonical, Open Graph, sitemap) | definido no workflow |

Para trocar o WhatsApp sem mexer no código: **Settings → Secrets and variables → Actions → Variables → `WHATSAPP_NUMBER`**.
Endereço, Instagram e grupo VIP ficam em `src/config/site.ts`.

## Catálogo

`src/data/products.ts` reúne 154 produtos organizados a partir das 423 fotografias fornecidas pela Divino Look.
As fotos ficam em `public/products`, separadas em uma pasta por produto. Preços, tamanhos, cores e estoque continuam demonstrativos
até a loja fornecer a planilha oficial.

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

Cada push na `main` roda `.github/workflows/deploy.yml`: typecheck → lint → build estático → GitHub Pages.
