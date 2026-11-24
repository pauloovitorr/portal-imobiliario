<script setup lang="ts">
import { cidadesBuscasPopulares } from '~/utils/cidadesBuscasPopulares'

const buscas = [
    { finalidade: 'comprar', tipo: 'apartamento', rotulo: 'Apartamentos à venda' },
    { finalidade: 'comprar', tipo: 'casa', rotulo: 'Casas à venda' },
    { finalidade: 'comprar', tipo: 'sala', rotulo: 'Salas comerciais à venda' },
    { finalidade: 'alugar', tipo: 'apartamento', rotulo: 'Apartamentos para alugar' },
    { finalidade: 'alugar', tipo: 'casa', rotulo: 'Casas para alugar' },
    { finalidade: 'alugar', tipo: 'sala', rotulo: 'Salas comerciais para alugar' },
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
                link="#capitais-title"
            />

            <div class="grupos-pesquisas">
                <section v-for="cidade in cidadesBuscasPopulares" :key="cidade.slug" class="grupo-pesquisas"
                    :aria-labelledby="`pesquisas-${cidade.slug}`">
                    <h3 :id="`pesquisas-${cidade.slug}`">{{ cidade.nome }} – {{ cidade.uf }}</h3>
                    <ul>
                        <li v-for="busca in buscas" :key="busca.rotulo">
                            <NuxtLink :to="`/${busca.finalidade}/${busca.tipo}/${cidade.slug}`">
                                {{ busca.rotulo }} {{ cidade.preposicao }} {{ cidade.nome }}
                            </NuxtLink>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section-pesquisas {
    padding-bottom: var(--espaco-entre-blocos);
    background-color: var(--bg-surface);
}

.container-pesquisas {
    display: flex;
    flex-direction: column;
}

.grupos-pesquisas {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--padding-2xl) var(--padding-xl);
}

.grupo-pesquisas h3 {
    margin: 0 0 var(--padding-xs);
    color: var(--text-main);
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    line-height: var(--leading-normal);
}

.grupo-pesquisas ul {
    display: grid;
    gap: var(--padding-3xs);
    margin: 0;
    padding: 0;
    list-style: none;
}

.grupo-pesquisas a {
    display: inline-flex;
    align-items: center;
    min-height: 24px;
    color: var(--color-neutral-600);
    font-size: var(--text-sm);
    line-height: var(--leading-normal);
    overflow-wrap: anywhere;
    text-decoration: underline;
    text-decoration-color: var(--color-neutral-300);
    text-underline-offset: 0.2em;
    transition: color var(--transition-fast), text-decoration-color var(--transition-fast);
}

.grupo-pesquisas a:hover {
    color: var(--color-accent-500);
    text-decoration-color: currentColor;
}

.grupo-pesquisas a:focus-visible {
    outline: 2px solid var(--color-accent-500);
    outline-offset: 2px;
}

@media (max-width: 1100px) {
    .grupos-pesquisas {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 600px) {
    .grupos-pesquisas {
        grid-template-columns: minmax(0, 1fr);
        row-gap: var(--padding-xl);
    }
}
</style>
