<script setup lang="ts">
import { computed } from 'vue'
import { MapPin } from '@lucide/vue'

const route = useRoute();

const finalidade = computed(() => String(route.params.finalidade ?? ''))
const tipo = computed(() => String(route.params.tipo ?? ''))
const cidade = computed(() => String(route.params.cidade ?? ''))

const sugestoesCidade = [
    { slug: 'presidente-prudente', nome: 'Presidente Prudente' },
    { slug: 'sao-paulo', nome: 'São Paulo' },
    { slug: 'santo-andre', nome: 'Santo André' },
    { slug: 'campinas', nome: 'Campinas' },
]

function destinoCidade(slug: string) {
    const query = { ...route.query }
    if (slug !== cidade.value) delete query.bairros

    return { path: `/${finalidade.value}/${tipo.value}/${slug}`, query }
}

const totalImoveis = ref(117)

const formatarTexto = (slug: string) => {
    if (!slug) return ''
    return slug
        .split('-')
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(' ')
}


const textoFinalidade = computed(() => {
    if (finalidade.value === 'alugar') return 'para alugar'
    if (finalidade.value === 'comprar') return 'à venda'
    return formatarTexto(finalidade.value)
})

// Formata o tipo do imóvel (Pluraliza)
const textoTipo = computed(() => {
    const tipoFormatado = formatarTexto(tipo.value)
    return totalImoveis.value > 1 ? `${tipoFormatado}s` : tipoFormatado
})

// Trata os bairros da query string
const listaBairros = computed(() => {
    const bairros = route.query.bairros
    return typeof bairros === 'string' ? bairros.split(',').filter(Boolean).map(formatarTexto) : []
})

const nomeCidade = computed(() =>
    sugestoesCidade.find(sugestao => sugestao.slug === cidade.value)?.nome ?? formatarTexto(cidade.value)
)

// Texto descritivo da localização (Bairros ou Cidade)
const textoLocalizacao = computed(() => {
    return `em ${nomeCidade.value}`
})
</script>

<template>
    <div class="cabecalho-busca">
        <nav class="breadcrumb-imoveis">
            <span>{{ formatarTexto(tipo) }} {{ textoFinalidade }}</span>
            <span>›</span>
            <span>SP</span>
            <span>›</span>
            <span>{{ nomeCidade }}</span>
            <span v-if="listaBairros.length > 0">› {{ listaBairros.join(', ') }}</span>
        </nav>

        
        <h1 class="qtd-imoveis">
            <strong>{{ totalImoveis.toLocaleString('pt-BR') }}</strong> {{ textoTipo }} {{ textoFinalidade }} {{
            textoLocalizacao }}
        </h1>

        <nav class="sugestoes-cidade" aria-label="Sugestões de cidade">
            <NuxtLink v-for="sugestao in sugestoesCidade" :key="sugestao.slug"
                :to="destinoCidade(sugestao.slug)"
                :aria-current="sugestao.slug === cidade ? 'location' : undefined">
                <MapPin :size="15" aria-hidden="true" />
                {{ sugestao.nome }}
            </NuxtLink>
        </nav>
    </div>
</template>

<style scoped>
.cabecalho-busca {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.breadcrumb-imoveis {
    font-size: var(--text-sm, 0.875rem);
    color: var(--color-neutral-500, #666);
    display: flex;
    gap: 0.5rem;
    align-items: center;
    
    /* Regras para forçar a única linha e cortar com ... */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
}

/* Garante que os itens dentro do flexbox possam encolher corretamente para gerar o corte */
.breadcrumb-imoveis > span {
    overflow: hidden;
    text-overflow: ellipsis;
}

.qtd-imoveis {
    color: var(--color-neutral-900, #111);
    font-size: var(--text-xl, 1.5rem);
    font-weight: var(--font-medium, 500);
    line-height: var(--leading-tight, 1.2);
    margin: 0;
}

.qtd-imoveis strong {
    font-weight: var(--font-bold, 700);
}

.sugestoes-cidade {
    display: flex;
    flex-wrap: wrap;
    gap: var(--padding-xs);
    margin-top: var(--padding-2xs);
}

.sugestoes-cidade a {
    display: inline-flex;
    align-items: center;
    gap: var(--padding-2xs);
    min-height: 40px;
    padding-inline: var(--padding-sm);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-full);
    background: var(--bg-surface);
    color: var(--text-main);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    text-decoration: none;
    transition: background-color var(--transition-fast), border-color var(--transition-fast);
}

.sugestoes-cidade a:hover,
.sugestoes-cidade a[aria-current] {
    border-color: var(--color-accent-400);
    background: var(--color-neutral-50);
    color: var(--color-accent-600);
}

.sugestoes-cidade a:focus-visible {
    outline: 2px solid var(--color-accent-500);
    outline-offset: 2px;
}

@media (max-width: 560px) {
    .cabecalho-busca {
        width: 100%;
    }
}

</style>
