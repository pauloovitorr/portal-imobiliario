# Páginas e destinos pendentes

Este inventário registra a diferença entre páginas com rota, seções que aparecem dentro de uma página e links/ações cuja página de destino ainda não foi criada ou conectada. Ele reflete os arquivos atuais de `app/pages/` e os links dos componentes públicos; não representa uma decisão de produto nem uma especificação de funcionalidades.

Antes de implementar um destino, confirme o escopo solicitado. Não crie páginas, regras ou fluxos funcionais apenas porque um link aparece neste inventário.

## Rotas existentes

| Rota | Estado observado |
| --- | --- |
| `/` | Home existente, composta por seções de busca, destaques, lançamentos, chamada para parceiros e notícias. |
| `/:finalidade/:tipo/:cidade` | Página dinâmica de listagem de imóveis. Os destinos de categorias nos menus ainda usam `#`; a rota existe, mas esses links não estão conectados a ela. |
| `/imovel/:slug` | Página dinâmica de detalhes de imóvel. |
| `/entrar` | Interface de formulário de login existente; autenticação, envio e recuperação de senha ainda não estão integrados. |
| `/anunciar` | Interface de cadastro com nome, e-mail, telefone e senha; autenticação/cadastro e envio ainda não estão integrados. |

Fontes: `app/pages/index.vue`, `app/pages/[finalidade]/[tipo]/[cidade].vue`, `app/pages/imovel/[slug].vue`, `app/pages/entrar.vue` e `app/pages/anunciar.vue`.

## Destinos sem página/rota própria identificada

| Destino ou ação | O que existe hoje | Localização observada |
| --- | --- | --- |
| Página de notícias | Existe uma seção de notícias na home, com cards que abrem matérias externas. Não foi identificada uma rota interna de listagem ou detalhe de notícias. | `app/components/public/home/Noticias.vue`; título da seção em `app/components/public/TituloSecao.vue`. |
| Imóveis favoritados | Existem botões/atalhos visuais de favoritos, mas não foi identificada página de favoritos nem fluxo persistente de favoritos. | `app/components/public/MenuDesktop.vue`, `app/components/public/MenuMobile.vue`, `app/components/public/home/CardImovelDescricao.vue` e `app/components/public/filtros/CardDescricaoImovel.vue`. |
| “Conhecer Vantagens” | O CTA existe na home com `href="#"`; não foi identificada página de vantagens. | `app/components/public/home/CallAction.vue`. |
| “Buscar imobiliárias” | O item aparece nos menus e rodapé com `href="#"`; não foi identificada página de busca/listagem de imobiliárias. | `app/components/public/MenuDesktop.vue`, `app/components/public/MenuMobile.vue` e `app/components/public/Footer.vue`. |
| Área do corretor | O link aparece no rodapé com `href="#"`; não foi identificada rota correspondente. | `app/components/public/Footer.vue`. |
| Cadastro de imobiliária | O link aparece no rodapé com `href="#"`; não foi identificada rota correspondente. | `app/components/public/Footer.vue`. |
| Páginas “Ver tudo” das seções da home | O componente compartilhado oferece esse link, mas as seções observadas recebem `link=""`; não há destino conectado. | `app/components/public/TituloSecao.vue`, `app/components/public/home/ImoveisDestaquesHome.vue`, `app/components/public/home/ImoveisLancamentoHome.vue` e `app/components/public/home/Noticias.vue`. |
| Destino dos cards de lançamentos | Os cards existem, mas os itens têm `link: ''`; não foi identificado destino de detalhe conectado para esses projetos. | `app/components/public/home/CardImovelLancamento.vue`. |

## Links que ainda são placeholders

Os seguintes grupos ainda contêm `href="#"` ou destino vazio. Um placeholder não deve ser interpretado como confirmação de que uma página específica já foi definida:

- Categorias de compra e aluguel (casas, apartamentos, terrenos, lançamentos e casas em condomínio) nos menus desktop/mobile. A rota dinâmica de listagem existe, mas as opções ainda não apontam para ela.
- “Comprar”, “Alugar”, “Lançamentos”, “Notícias”, categorias e links de parceiros no rodapé.
- “Notícias” e categorias nos menus; o conteúdo de notícias atualmente leva a sites externos, não a uma página interna.
- “Criar Conta e Anunciar” e “Conhecer Vantagens” no CTA da home. `/anunciar` existe como placeholder, mas o CTA ainda não está ligado a essa rota.
- Links “Ver tudo” enviados sem destino pelas seções da home.
- Cards de lançamento com URL vazia.

Além disso, as opções “Entrar” e “Anunciar Imóvel” dos menus desktop/mobile já apontam para `/entrar` e `/anunciar`, respectivamente. Ambas as rotas apresentam formulários visuais, mas ainda não fazem autenticação, cadastro, persistência nem envio para API. A recuperação de senha não possui fluxo ou destino implementado. O rodapé ainda tem links de anúncio com `#`.

## Orientação para futuras tarefas

1. Verifique novamente `app/pages/` e o componente que contém o link; este inventário pode ficar desatualizado quando novas rotas forem implementadas.
2. Se a solicitação for apenas visual, preserve o destino e o comportamento funcional atual. Não invente uma rota para substituir `#`.
3. Se a tarefa pedir para ligar ou criar uma página, confirme o destino e o comportamento esperado antes de implementar lógica funcional.
4. Ao adicionar uma nova rota, atualize as tabelas deste documento e de [`projeto-frontend.md`](./projeto-frontend.md).
