<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute();

const finalidade = route.params.finalidade as string;
const tipo = route.params.tipo as string;
const cidade = route.params.cidade as string;
const bairrosQuery = route.query.bairros as string;

const totalImoveis = ref(117)

const formatarTexto = (slug: string) => {
    if (!slug) return ''
    return slug
        .split('-')
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(' ')
}


const textoFinalidade = computed(() => {
    if (finalidade === 'alugar') return 'para alugar'
    if (finalidade === 'comprar') return 'à venda'
    return formatarTexto(finalidade)
})

// Formata o tipo do imóvel (Pluraliza)
const textoTipo = computed(() => {
    const tipoFormatado = formatarTexto(tipo)
    return totalImoveis.value > 1 ? `${tipoFormatado}s` : tipoFormatado
})

// Trata os bairros da query string
const listaBairros = computed(() => {
    if (!bairrosQuery) return []
    return bairrosQuery.split(',').map(b => formatarTexto(b))
})

// Texto descritivo da localização (Bairros ou Cidade)
const textoLocalizacao = computed(() => {
    const nomeCidade = formatarTexto(cidade)

    return `em ${nomeCidade}`
})
</script>

<template>
    <div class="cabecalho-busca">
        <nav class="breadcrumb-imoveis">
            <span>{{ formatarTexto(tipo) }} {{ textoFinalidade }}</span>
            <span>›</span>
            <span>SP</span>
            <span>›</span>
            <span>{{ formatarTexto(cidade) }}</span>
            <span v-if="listaBairros.length > 0">› {{ listaBairros.join(', ') }}</span>
        </nav>

        
        <h1 class="qtd-imoveis">
            <strong>{{ totalImoveis.toLocaleString('pt-BR') }}</strong> {{ textoTipo }} {{ textoFinalidade }} {{
            textoLocalizacao }}
        </h1>
    </div>
</template>

<style scoped>
.cabecalho-busca {
    width: 80%;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
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

@media (max-width: 1024px) {
    .cabecalho-busca {
        width: 70%;
    }
}

@media (max-width: 560px) {
    .cabecalho-busca {
        width: 100%;
    }
}

</style>