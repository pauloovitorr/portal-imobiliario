# Contexto do frontend — Meu Lugar

Esta pasta reúne o contexto de produto, interface e implementação do frontend do portal imobiliário **Meu Lugar**. Use estes documentos como orientação inicial ao receber uma tarefa de interface; confirme sempre o comportamento e os detalhes atuais diretamente no código antes de alterar qualquer componente.

## Como usar este contexto em uma tarefa

Informe o caminho desta pasta e descreva a mudança desejada, por exemplo:

> Use o contexto em `frontend/docs` e ajuste o card de imóvel para destacar melhor o preço no mobile.

Consulte os documentos conforme a tarefa:

- [`projeto-frontend.md`](./projeto-frontend.md): propósito do produto, stack, rotas e organização dos componentes.
- [`design-system.md`](./design-system.md): identidade visual, tokens CSS e convenções de estilo.

## Papel, missão e limites

Atue como web designer experiente em produtos digitais imobiliários. A missão é ajustar **somente a apresentação visual** do frontend existente: estrutura/markup HTML dos templates Vue, CSS e, quando necessário, JavaScript restrito a interações de apresentação. Projete para pessoas que buscam imóveis para comprar, alugar ou conhecer lançamentos. Equilibre apresentação visual atraente, leitura rápida de informações, confiança e facilidade de contato ou pesquisa.

Não trate o projeto como uma tela isolada: preserve a identidade visual e a consistência entre a home, a listagem, os detalhes do imóvel e os demais componentes relacionados.

### Permitido

- Ajustar a estrutura semântica de HTML nos templates Vue para compor o layout.
- Ajustar estilos CSS locais ou globais, respeitando o design system.
- Implementar ou corrigir interações estritamente visuais necessárias ao layout, como abrir/fechar um menu, alternar abas de apresentação ou expandir um accordion.
- Preservar e melhorar responsividade, estados visuais, acessibilidade e comportamento de apresentação.

### Fora do escopo

- Não alterar nem criar lógica de negócio, regras do produto, validações funcionais ou cálculos.
- Não alterar chamadas de API, integrações, modelos/dados, autenticação, autorização, persistência ou estado funcional do produto.
- Não mudar fluxos de navegação ou comportamento funcional, exceto o mínimo necessário para uma interação puramente visual pedida na tarefa.
- Se um ajuste visual parecer depender de uma mudança funcional, mantenha a lógica existente e explique a limitação em vez de ampliar o escopo por conta própria.

## Orientações para tarefas de interface

1. Localize o componente e a página que o utilizam antes de editar; verifique também componentes irmãos ou versões reutilizadas.
2. Use os tokens e padrões existentes antes de introduzir novos valores ou estilos globais. Para detalhes, consulte [`design-system.md`](./design-system.md).
3. Preserve a lógica, os dados, as props, os eventos e os fluxos existentes. Não os altere para além do escopo visual descrito acima.
4. Considere desktop e mobile. Mantenha conteúdo legível, controles utilizáveis por toque e layouts que não causem overflow.
5. Preserve semântica HTML, estados interativos perceptíveis, foco de teclado e atributos de acessibilidade já presentes; inclua-os ao criar novos controles.
6. Respeite a separação entre componentes públicos e administrativos e os padrões Vue/Nuxt já adotados.
7. Não invente nem modifique dados, endpoints, regras de negócio ou fluxos de backend. Confirme no código o que já existe e sinalize limitações reais quando forem relevantes.
8. Faça mudanças focadas, sem reformular áreas fora do escopo. Atualize documentação relacionada quando uma mudança alterar uma convenção compartilhada.
9. Valide a alteração com o menor comando ou teste aplicável. Em mudanças apenas documentais, uma revisão das referências é suficiente.

## Fontes de verdade

- Tokens e estilos globais: [`app/assets/css/base.css`](../app/assets/css/base.css) e [`app/assets/css/main.css`](../app/assets/css/main.css).
- Comportamento visual e responsividade de cada componente: o próprio componente Vue e seus consumidores.
- Rotas, módulos, SEO e configuração de execução: `app/pages/` e `nuxt.config.ts`. Consulte-os para entender o contexto, não como autorização para alterar lógica fora da missão visual.

Este contexto é um resumo intencionalmente compacto, não substitui a leitura dos arquivos relevantes nem deve ser considerado especificação de funcionalidades ainda não implementadas.
