<script setup lang="ts">
interface PesquisaRelacionada {
    label: string
    href?: string
}

interface GrupoPesquisas {
    id: string
    titulo: string
    pesquisas: PesquisaRelacionada[]
}

const grupos: GrupoPesquisas[] = [
    {
        id: 'tipos',
        titulo: 'Outros tipos de imóveis para alugar em São Paulo',
        pesquisas: [
            { label: 'Apartamentos para alugar em São Paulo', href: '/alugar/apartamento/sao-paulo' },
            { label: 'Casas para alugar em São Paulo', href: '/alugar/casa/sao-paulo' },
            { label: 'Salas comerciais para alugar em São Paulo', href: '/alugar/sala/sao-paulo' },
            { label: 'Terrenos para alugar em São Paulo', href: '/alugar/terreno/sao-paulo' },
        ],
    },
    {
        id: 'bairros',
        titulo: 'Apartamentos para alugar em bairros de São Paulo',
        pesquisas: [
            { label: 'Vila Santo Estéfano' },
            { label: 'Vila Monte Alegre' },
            { label: 'Vila da Saúde' },
            { label: 'Vila Água Funda' },
            { label: 'São Judas' },
            { label: 'Vila Nair' },
        ],
    },
]
</script>

<template>
    <section class="secao-outras-pesquisas" aria-labelledby="titulo-outras-pesquisas">
        <h2 id="titulo-outras-pesquisas">Outros tipos de pesquisas</h2>

        <div class="grupos-pesquisas">
            <section
                v-for="grupo in grupos"
                :key="grupo.id"
                class="grupo-pesquisas"
                :aria-labelledby="`titulo-pesquisas-${grupo.id}`"
            >
                <h3 :id="`titulo-pesquisas-${grupo.id}`">{{ grupo.titulo }}</h3>

                <ul :id="`lista-pesquisas-${grupo.id}`" class="lista-pesquisas">
                    <li v-for="pesquisa in grupo.pesquisas" :key="pesquisa.label">
                        <NuxtLink v-if="pesquisa.href" :to="pesquisa.href" class="tag-pesquisa">
                            {{ pesquisa.label }}
                        </NuxtLink>
                        <span v-else class="tag-pesquisa">{{ pesquisa.label }}</span>
                    </li>
                </ul>
            </section>
        </div>
    </section>
</template>

<style scoped>
.secao-outras-pesquisas {
    display: flex;
    flex-direction: column;
    gap: var(--padding-xl);
    margin-top: var(--padding-3xl);
}

.secao-outras-pesquisas h2 {
    margin: 0;
    color: var(--text-main);
    font-size: var(--text-2xl);
    font-weight: var(--font-semibold);
    line-height: var(--leading-tight);
}

.grupos-pesquisas {
    display: flex;
    flex-direction: column;
    gap: var(--padding-xl);
}

.grupo-pesquisas {
    display: flex;
    flex-direction: column;
    gap: var(--padding-md);
}

.grupo-pesquisas h3 {
    margin: 0;
    color: var(--text-main);
    font-size: var(--text-lg);
    font-weight: var(--font-medium);
    line-height: var(--leading-normal);
}

.lista-pesquisas {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: var(--padding-sm);
    margin: 0;
    padding: 0;
    list-style: none;
}

.lista-pesquisas li {
    max-width: 100%;
}

.tag-pesquisa {
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

.tag-pesquisa:hover {
    background: rgba(128, 15, 47, 0.14);
    color: var(--color-accent-700);
}

a.tag-pesquisa:focus-visible {
    outline: 2px solid var(--color-accent-500);
    outline-offset: 3px;
}

@media (max-width: 560px) {
    .secao-outras-pesquisas {
        gap: var(--padding-lg);
    }
}
</style>
