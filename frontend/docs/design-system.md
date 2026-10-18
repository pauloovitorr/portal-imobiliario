# Design system do frontend

## Direção visual

A interface usa uma base neutra quente, tons de vinho/burgundy como destaque e uma composição tipográfica que combina uma sans-serif legível com uma serifada usada pontualmente. O resultado sugerido pelos tokens é acolhedor e sofisticado, adequado à apresentação de imóveis. Mantenha a informação imobiliária — especialmente imagens, preço e atributos — clara e fácil de comparar.

Este documento resume os valores atuais. **A fonte de verdade dos tokens é [`app/assets/css/base.css`](../app/assets/css/base.css)**; confira esse arquivo antes de reutilizar ou alterar tokens. Os estilos e classes globais ficam em [`app/assets/css/main.css`](../app/assets/css/main.css), que importa `base.css`. Os valores e componentes podem evoluir.

## Arquivos CSS de referência

- [`app/assets/css/base.css`](../app/assets/css/base.css) — declara fontes, cores, tokens semânticos, superfícies, raios, sombras, transições, camadas, espaçamentos e largura máxima.
- [`app/assets/css/main.css`](../app/assets/css/main.css) — importa `base.css` e define reset, estilos globais do `body`, classes compartilhadas de botões e container.

Esses paths são relativos à raiz do frontend. Para ajustes de layout em um componente, verifique também o `<style>` local daquele componente; os dois arquivos acima são as referências globais, não substitutos dos estilos específicos.

## Tipografia

| Token | Valor atual | Uso indicado nos comentários da folha global |
| --- | --- | --- |
| `--font-primary` | Anek Latin, com fallbacks de sistema | Fonte predominante. |
| `--font-secondary` | Lora, serif | Uso pontual, inclusive em alguns títulos. |
| `--font-light` a `--font-extrabold` | 300, 400, 500, 600, 700, 800 | Pesos disponíveis. |
| `--text-xs` a `--text-4xl` | 0.75rem a 2.75rem | Escala de legendas até títulos de hero. |
| `--leading-tight`, `--leading-normal`, `--leading-relaxed` | 1.2, 1.5, 1.625 | Entrelinha compacta, padrão e confortável. |

Prefira a escala existente e preserve hierarquia tipográfica: preço, localização e características devem ser escaneáveis sem competir com o título principal.

## Cores

### Acento burgundy

| Token | Valor | Papel indicado |
| --- | --- | --- |
| `--color-accent-400` | `#a82046` | Destaques e badges. |
| `--color-accent-500` | `#800f2f` | CTA principal. |
| `--color-accent-600` | `#590d22` | Hover do CTA. |
| `--color-accent-700` | `#3d0818` | Estados pressionados e destaques escuros. |
| `--color-accent-800` | `#25050f` | Texto de alto contraste e bordas profundas. |

### Neutros e semântica

| Token | Valor | Papel indicado |
| --- | --- | --- |
| `--color-neutral-0` | `#ffffff` | Superfície branca. |
| `--color-neutral-50` | `#f9f6f7` | Fundo suave da aplicação. |
| `--color-neutral-100` | `#f5f2f3` | Cards secundários e inputs. |
| `--color-neutral-200` | `#e8e2e4` | Bordas sutis. |
| `--color-neutral-300` | `#d4cbcf` | Bordas de inputs. |
| `--color-neutral-400` | `#a6999e` | Neutro intermediário. |
| `--color-neutral-500` | `#786c72` | Texto secundário e ícones. |
| `--color-neutral-600` | `#5c5257` | Texto intermediário e legendas em destaque. |
| `--color-neutral-700` | `#42383c` | Texto principal de corpo. |
| `--color-neutral-900` | `#1f171a` | Títulos e destaques. |
| `--color-success` | `#10b981` | Disponível/vendido. |
| `--color-warning` | `#f59e0b` | Reservado/em análise. |
| `--color-danger` | `#ef4444` | Ações destrutivas/favorito ativo. |

Atalhos semânticos existentes: `--bg-app`, `--bg-surface`, `--border-color`, `--text-main` e `--text-muted`. Prefira-os quando o significado do estilo corresponder.

## Tokens de superfície e componentes

| Categoria | Tokens de referência |
| --- | --- |
| Transparências | `--bg-glass-card`, `--bg-glass-segmented`, `--bg-glass-input`, `--border-glass-card`, `--border-glass-segmented`. |
| Foco e sombra de acento | `--color-focus-ring`, `--shadow-accent-sm`, `--shadow-accent-lg`. |
| Raios | `--radius-sm` (9px), `--radius-md` (12px), `--radius-lg` (18px), `--radius-xl` (24px), `--radius-full` (pill). |
| Elevação | `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-hover`. |
| Transições | `--transition-fast` (150ms), `--transition-normal` (250ms), `--transition-bounce` (500ms). |
| Espaçamento | `--padding-3xs` (4px) até `--padding-3xl` (48px), com incrementos nomeados. |
| Atalhos de componente | `--padding-btn-sm`, `--padding-btn-md`, `--padding-btn-lg`, `--padding-card`, `--padding-modal`, `--padding-drawer`. |
| Camadas | `--z-banner`, `--z-dropdown`, `--z-sticky`, `--z-fixed`, `--z-modal-backdrop`, `--z-modal`, `--z-tooltip`. |
| Largura | `--max-width` (1280px). |

Os atalhos têm semântica: escolha o token mais próximo do uso real em vez de copiar um valor isolado. Não adicione novas camadas de z-index ou valores globais sem verificar as existentes.

## Padrões globais já implementados

Em `app/assets/css/main.css`:

- Reset global de margem, padding e `box-sizing`.
- `body` usa `--font-primary`, `--bg-app`, `--text-main` e `--leading-normal`.
- `.btn-primary` é um botão/CTA burgundy com padding, raio, transição e sombra tokenizados; hover e active têm estados próprios.
- `.btn-secondary` é uma ação neutra com borda, alinhamento centralizado e hover.
- `.estilo-container` aplica largura máxima, centralização e padding de seção.

Verifique se um padrão global atende ao componente antes de criar regras locais duplicadas. Se um botão existente precisar de comportamento ou hierarquia visual diferente, confirme o padrão de uso no restante do projeto antes de alterar a classe global.

## Responsividade, interação e acessibilidade

- Não há breakpoints centralizados no design system observado. Os componentes definem seus próprios limites; preserve-os ou ajuste-os de acordo com o layout afetado e teste as larguras relevantes.
- Reduza padding e reorganize conteúdo quando necessário, mantendo controles fáceis de usar em telas pequenas e evitando rolagem horizontal involuntária.
- Use estados visíveis de hover, foco, ativo e desabilitado quando aplicáveis; não dependa apenas da cor para transmitir seleção ou status.
- Preserve contraste e legibilidade, especialmente em texto sobre fotografia e em metadados menores.
- Mantenha foco de teclado, elementos HTML apropriados e atributos ARIA que comunicam estado ou rótulos.

## Convenções ao evoluir o sistema

1. Reutilize tokens existentes de `base.css` e classes globais de `main.css`.
2. Prefira estilos locais ao componente para particularidades que não são um padrão compartilhado.
3. Só introduza ou altere um token global quando houver necessidade reutilizável; atualize esta referência junto com a fonte de verdade.
4. Não copie uma paleta, um breakpoint ou um raio de outro produto sem necessidade explícita.
