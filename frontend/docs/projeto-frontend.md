# Projeto e estrutura do frontend

## Visão do produto

O frontend atende o **Meu Lugar**, um portal imobiliário para descoberta de imóveis. A configuração de SEO descreve busca de casas, apartamentos e terrenos para compra, aluguel ou temporada. A interface pública contém uma página inicial, uma rota de listagem por finalidade/tipo/cidade e uma página de detalhes do imóvel.

Ao trabalhar em uma interface, priorize a descoberta e comparação de imóveis: imagens claras, localização e atributos fáceis de localizar, preço legível e caminhos evidentes para pesquisa ou contato. Mantenha o tom visual acolhedor e sofisticado que a tipografia e a paleta atuais sugerem, sem comprometer a clareza ou inventar regras comerciais.

## Missão de trabalho: apresentação visual

O escopo das tarefas descritas por este contexto é **apenas layout e apresentação**. Faça alterações em HTML dos templates Vue, CSS e JavaScript somente para interações visuais simples necessárias à apresentação — por exemplo, abrir/fechar um menu, alternar abas visuais ou expandir/recolher um accordion.

Não implemente nem altere lógica de negócio, regras e validações do produto, cálculos, dados, estado funcional, integração/API, autenticação, persistência ou fluxos de navegação. Preserve o funcionamento existente. Se a solicitação não puder ser atendida sem mudar essas áreas, explique a dependência e limite a implementação à parte visual, salvo nova instrução explícita do usuário.

## Stack e configuração

- Nuxt 4 com Vue 3 e componentes em Single File Components (`.vue`), usando `<script setup lang="ts">` quando há lógica tipada.
- Tokens globais em [`app/assets/css/base.css`](../app/assets/css/base.css); estilos globais e classes compartilhadas em [`app/assets/css/main.css`](../app/assets/css/main.css), que importa `base.css`. A folha global é registrada em `nuxt.config.ts`.
- Módulos Nuxt configurados: SEO, otimização de imagens e Pinia.
- A configuração atual usa `ssr: false`. A regra para `/admin/**` também desativa SSR.
- A configuração pública de runtime inclui `backendUrl` e `apiBase`. O sitemap consulta uma origem configurável. Isso não implica que cada tela já consuma esses serviços.
- A configuração do site define o nome `Meu Lugar`, locale `pt-BR`, URL configurável e descrição de busca.

Consulte `nuxt.config.ts` antes de alterar comportamento de renderização, configuração pública, SEO, imagens ou integrações.

## Rotas observadas

| Arquivo | Rota Nuxt | Responsabilidade |
| --- | --- | --- |
| `app/pages/index.vue` | `/` | Composição da home com hero, destaques, banners, lançamentos, estatísticas, chamada para ação e notícias. |
| `app/pages/[finalidade]/[tipo]/[cidade].vue` | `/:finalidade/:tipo/:cidade` | Página de listagem com filtros, resultados e alternância entre lista e mapa. |
| `app/pages/imovel/[slug].vue` | `/imovel/:slug` | Página de detalhes de um imóvel. |

Os nomes de rota são derivados dos caminhos dos arquivos do Nuxt. Confirme os parâmetros e a navegação nos consumidores antes de mudar uma rota.

## Organização de componentes

Os componentes públicos ficam em `app/components/public/` e agrupam a UI por área:

- Raiz: elementos compartilhados, como `NavBar.vue`, `MenuDesktop.vue`, `MenuMobile.vue`, `Footer.vue` e `TituloSecao.vue`.
- `home/`: hero e pesquisa inicial, cartões, seções de imóveis em destaque/lançamento, banners, estatísticas, chamada para ação e notícias.
- `filtros/`: filtro da listagem, resumo da pesquisa, cartões de imóveis e visualização do mapa.
- `imovel/`: breadcrumbs, galeria, descrição, título e formulário de contato.
- Na página de detalhe, `LocalizacaoImovel.vue`, `PergunteAnunciante.vue` e `ImoveisSimilares.vue` complementam a descrição e o contato com localização demonstrativa, perguntas rápidas sem envio e cartões de imóveis similares com dados mockados.
- `app/layouts/default.vue`: moldura pública com barra de navegação, conteúdo da rota e rodapé.
- `app/layouts/admin.vue`: layout administrativo existente; confirme a implementação das páginas administrativas antes de pressupor fluxos disponíveis.

O Nuxt usa autoimportação de componentes segundo os nomes observados em templates, como `PublicHomeHero`. Siga o padrão de nomenclatura já utilizado. Não mova componentes entre grupos sem verificar todas as referências.

Outras áreas presentes incluem `app/plugins/` para plugins de cliente, `app/utils/` para utilitários e `app/assets/` para CSS e imagens. A estrutura pode evoluir: confirme os arquivos atuais antes de documentar ou pressupor novas páginas, stores ou integrações.

## Padrões de implementação observados

- Componentes Vue encapsulam template/markup e estilos locais; estilos de componente normalmente usam `<style scoped>`. Para esta missão, altere o template e os estilos conforme necessário, preservando a lógica existente.
- Layouts compõem componentes compartilhados ao redor da página.
- O CSS compartilhado usa custom properties definidas em `base.css`; consulte [`design-system.md`](./design-system.md).
- Breakpoints são definidos nos próprios componentes e variam conforme o layout. Não há uma escala global de breakpoints estabelecida nos arquivos consultados.
- Use props, eventos e estado reativo Vue de acordo com o componente existente. Não substitua interações por elementos semânticos inadequados nem remova estados acessíveis, como `aria-pressed`.
- JavaScript só deve ser alterado para uma interação visual simples, sem inserir lógica de produto, buscar ou transformar dados funcionais, ou mudar integrações e fluxos.

## Limites do que esta documentação afirma

Os arquivos de configuração indicam pontos de integração com backend, API, sitemap e imagens, mas não são prova de que uma tela específica já esteja conectada ou que um fluxo esteja completo. Confira o componente e seus dados reais. Preserve conteúdo de demonstração quando ele estiver presente, a menos que a tarefa peça explicitamente uma integração ou substituição.
