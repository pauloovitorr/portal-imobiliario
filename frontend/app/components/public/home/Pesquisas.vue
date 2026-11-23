<script setup lang="ts">
interface GrupoPesquisa {
    id: string
    titulo: string
    sugestoes: string[]
}

const destinoPesquisa = '/comprar/apartamento/presidente-prudente'

const grupos: GrupoPesquisa[] = [
    {
        id: 'comprar',
        titulo: 'Comprar',
        sugestoes: [
            'Apartamentos à venda em São Paulo',
            'Casas à venda em Presidente Prudente',
            'Terrenos à venda em Campinas',
            'Imóveis à venda em Curitiba',
            'Apartamentos à venda no Rio de Janeiro',
            'Casas à venda em Belo Horizonte',
            'Apartamentos à venda em Florianópolis',
            'Terrenos à venda em Goiânia',
        ],
    },
    {
        id: 'alugar',
        titulo: 'Alugar',
        sugestoes: [
            'Apartamentos para alugar em São Paulo',
            'Casas para alugar em Presidente Prudente',
            'Imóveis para alugar em Campinas',
            'Apartamentos para alugar em Curitiba',
            'Apartamentos para alugar em Salvador',
            'Casas para alugar no Recife',
            'Apartamentos para alugar em Brasília',
            'Casas para alugar em Curitiba',
        ],
    },
    {
        id: 'lancamentos',
        titulo: 'Lançamentos',
        sugestoes: [
            'Lançamentos em São Paulo',
            'Lançamentos no Rio de Janeiro',
            'Lançamentos em Belo Horizonte',
            'Lançamentos em Curitiba',
            'Lançamentos em Florianópolis',
            'Lançamentos em Campinas',
            'Lançamentos em Brasília',
            'Lançamentos em Goiânia',
        ],
    },
]
</script>


<template>
    <section class="section-pesquisas" aria-labelledby="titulo-pesquisas">
        <div class="container-pesquisas container-alinhado">
            <PublicTituloSecao
                id-titulo="titulo-pesquisas"
                titulo="Explore"
                subtitulo="Buscas populares"
                detalhe=""
                link=""
                :mostrar-link="false"
            />

            <div class="grupos-pesquisas">
                <section
                    v-for="grupo in grupos"
                    :key="grupo.id"
                    class="grupo-pesquisas"
                    :aria-labelledby="`titulo-grupo-${grupo.id}`"
                >
                    <h3 :id="`titulo-grupo-${grupo.id}`">{{ grupo.titulo }}</h3>
                    <ul>
                        <li v-for="sugestao in grupo.sugestoes" :key="sugestao">
                            <NuxtLink :to="destinoPesquisa">{{ sugestao }}</NuxtLink>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </section>
</template>


<style scoped>
.section-pesquisas {
    padding-top: 0;
    padding-bottom: 64px;
    background-color: var(--color-neutral-0);
}

.container-pesquisas {
    display: flex;
    flex-direction: column;
}

.grupos-pesquisas {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--padding-xl);
}

.grupo-pesquisas {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--padding-md);
}

.grupo-pesquisas h3 {
    margin: 0;
    color: var(--text-main);
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    line-height: var(--leading-normal);
}

.grupo-pesquisas ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--padding-sm);
    margin: 0;
    padding: 0;
    list-style: none;
}

.grupo-pesquisas li {
    max-width: 100%;
}

.grupo-pesquisas a {
    display: flex;
    min-width: 0;
    width: fit-content;
    max-width: 100%;
    min-height: 32px;
    align-items: center;
    padding: var(--padding-2xs) var(--padding-sm);
    border-radius: var(--radius-sm);
    background: var(--color-focus-ring);
    color: var(--color-accent-500);
    font-size: var(--text-sm);
    line-height: var(--leading-normal);
    overflow-wrap: anywhere;
    text-decoration: none;
    transition:
        background-color var(--transition-fast),
        color var(--transition-fast);
}

.grupo-pesquisas a:hover {
    background: rgba(128, 15, 47, 0.14);
    color: var(--color-accent-700);
}

.grupo-pesquisas a:focus-visible {
    outline: 2px solid var(--color-accent-500);
    outline-offset: 2px;
}

@media (max-width: 900px) {
    .grupos-pesquisas {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (min-width: 601px) {
    .grupos-pesquisas {
        row-gap: var(--padding-sm);
    }

    .grupo-pesquisas,
    .grupo-pesquisas ul {
        display: grid;
        grid-template-rows: subgrid;
    }

    .grupo-pesquisas {
        grid-row: span 9;
        row-gap: var(--padding-sm);
    }

    .grupo-pesquisas h3 {
        margin-bottom: calc(var(--padding-md) - var(--padding-sm));
    }

    .grupo-pesquisas ul {
        grid-row: span 8;
    }
}

@media (max-width: 600px) {
    .section-pesquisas {
        padding-bottom: var(--padding-3xl);
    }

    .grupos-pesquisas {
        grid-template-columns: minmax(0, 1fr);
    }

}
</style>
