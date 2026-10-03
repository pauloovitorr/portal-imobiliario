<script setup lang="ts">
const visualizacaoAtiva = ref<'lista' | 'mapa'>('lista')
</script>

<template>
    <section class="section-listagem" :class="{ 'modo-mapa': visualizacaoAtiva === 'mapa' }">
        <div class="layout-listagem" :class="{ 'layout-mapa': visualizacaoAtiva === 'mapa' }">
            <aside v-if="visualizacaoAtiva === 'lista'" class="container-filtros">
                <PublicFiltrosFiltroListagem />
            </aside>

            <main v-if="visualizacaoAtiva === 'lista'" class="container-resultados">
                <div class="container-info-imoveis">
                    <span class="qtd-imoveis">117 acomodações</span>

                    <div class="visualizacao-toggle" role="group" aria-label="Alternar visualização">
                        <button type="button" :class="{ ativo: visualizacaoAtiva === 'lista' }"
                            :aria-pressed="visualizacaoAtiva === 'lista'" @click="visualizacaoAtiva = 'lista'">
                            Imóveis
                        </button>
                        <button type="button" :class="{ ativo: visualizacaoAtiva === 'mapa' }"
                            :aria-pressed="visualizacaoAtiva === 'mapa'" @click="visualizacaoAtiva = 'mapa'">
                            Mapa
                        </button>
                    </div>
                </div>

                <div class="lista-cards-imoveis">
                    <PublicFiltrosCardImovel v-for="i in 12" :key="i" />
                </div>
            </main>

            <div v-else class="mapa-visualizacao">
                <div class="controles-mapa">
                    <div class="visualizacao-toggle" role="group" aria-label="Alternar visualização">
                        <button type="button" :aria-pressed="visualizacaoAtiva === 'lista'"
                            @click="visualizacaoAtiva = 'lista'">
                            Imóveis
                        </button>
                        <button type="button" class="ativo" :aria-pressed="visualizacaoAtiva === 'mapa'"
                            @click="visualizacaoAtiva = 'mapa'">
                            Mapa
                        </button>
                    </div>
                </div>
                <PublicFiltrosMapaImoveis />
            </div>
        </div>
    </section>
</template>

<style scoped>
.section-listagem {
    min-height: calc(100vh - 80px);
    background-color: var(--color-neutral-0);
}

.layout-listagem {
    display: grid;
    grid-template-columns: minmax(250px, 0.3fr) minmax(0, 0.7fr);
    gap: var(--padding-xl);
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: var(--padding-xl);
    align-items: start;
}

.container-filtros {
    position: sticky;
    top: var(--padding-xl);
    min-width: 0;
    max-height: calc(100vh - var(--padding-2xl));
}

.container-resultados {
    min-width: 0;
}

.container-info-imoveis {
    min-height: 56px;
    margin-bottom: var(--padding-md);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--padding-md);
}

.qtd-imoveis {
    color: var(--color-neutral-900);
    font-size: var(--text-xl);
    font-weight: var(--font-medium);
    line-height: var(--leading-tight);
}

.lista-cards-imoveis {
    display: flex;
    flex-direction: column;
    gap: var(--padding-md);
}

.visualizacao-toggle {
    display: inline-flex;
    flex-shrink: 0;
    gap: 4px;
    padding: 4px;
    border: 1px solid var(--color-neutral-200);
    border-radius: var(--radius-md);
    background-color: var(--color-neutral-100);
}

.visualizacao-toggle button {
    border: 0;
    border-radius: var(--radius-sm);
    padding: 8px 12px;
    color: var(--color-neutral-600);
    background: transparent;
    font: inherit;
    cursor: pointer;
}

.visualizacao-toggle button.ativo {
    color: var(--color-neutral-900);
    background-color: var(--color-neutral-0);
    box-shadow: var(--shadow-sm);
}

.layout-mapa {
    display: block;
    max-width: var(--max-width);
}

.mapa-visualizacao {
    position: relative;
    width: 100%;
}

.controles-mapa {
    position: absolute;
    z-index: var(--z-dropdown);
    top: var(--padding-md);
    right: var(--padding-md);
}

@media (max-width: 900px) {
    .layout-listagem {
        grid-template-columns: minmax(0, 1fr);
        gap: var(--padding-md);
    }

    .container-filtros {
        position: static;
        max-height: none;
    }

    .container-info-imoveis {
        margin-bottom: var(--padding-sm);
    }
}

@media (max-width: 560px) {
    .layout-listagem {
        padding: var(--padding-md);
    }

    .container-info-imoveis {
        align-items: flex-start;
        flex-direction: column;
    }

    .container-info-imoveis .visualizacao-toggle {
        width: 100%;
    }

    .container-info-imoveis .visualizacao-toggle button {
        flex: 1;
    }
}
</style>
