<script setup lang="ts">
const visualizacaoAtiva = ref<'lista' | 'mapa'>('lista')
const filtroListagemRef = ref<{ abrirModal: () => void } | null>(null)

</script>


<template>
    <section class="section-listagem">

        <div class="container-filtros">
            <PublicFiltrosFiltroListagem ref="filtroListagemRef" />
        </div>

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

        <div class="layout-listagem">
            <Transition name="fade-view" mode="out-in">
                <div v-if="visualizacaoAtiva === 'lista'" class="layout-coluna listagem-imoveis" key="lista">

                    <div class="lista-cards-imoveis">
                        <PublicFiltrosCardImovel v-for="i in 12" :key="i" />
                    </div>



                </div>

                <div v-else class="layout-coluna mapa-coluna" key="mapa">
                    <PublicFiltrosMapaImoveis />
                </div>
            </Transition>
        </div>
    </section>
</template>


<style scoped>
.section-listagem {
    min-height: calc(100vh - 80px);
    background-color: var(--color-neutral-0);
}

.container-filtros {
    display: flex;
    justify-content: center;
    padding: var( --padding-md) 0;
    background-color: var(--color-neutral-0);
    border-bottom: 1px solid var(--color-neutral-200);
    position: sticky;
    top: 0;
    z-index: var(--z-sticky);
}



.container-info-imoveis {
    width: 100%;
    height: 80px;
    /* border: 1px solid red; */
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0px var(--padding-xl);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.layout-listagem {
    display: block;
    min-height: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0px var(--padding-xl);
    padding-bottom: 64px;
    /* border: 1px solid red; */
    position: relative;
}

/* .listagem-imoveis{
    background-color: red;
} */

.qtd-imoveis {
    color: var(--color-neutral-900);
    font-size: var(--text-xl);
    font-weight: var(--font-medium);
    line-height: var(--leading-tight);
    /* border: 1px solid red; */
}

.lista-cards-imoveis {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 24px;
}

.visualizacao-toggle {
    display: flex;
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
    cursor: pointer;
}

.visualizacao-toggle button.ativo {
    color: var(--color-neutral-900);
    background-color: var(--color-neutral-0);
    box-shadow: var(--shadow-sm);
}

.fade-view-enter-active,
.fade-view-leave-active {
    transition: opacity 180ms ease;
}

.fade-view-enter-from,
.fade-view-leave-to {
    opacity: 0;
}





/* Coluna 2 Mapa */

.mapa-imoveis {
    width: 100%;
    height: 500px;
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-neutral-200);
    box-shadow: var(--shadow-sm);
    position: static;
}

.layout-coluna {
    width: 100%;
    min-height: 0;
    /* border: 1px solid red; */
}

@media (max-width: 1200px) {
    .lista-cards-imoveis {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .mapa-imoveis {
        height: 420px;
    }
}

@media (max-width: 900px) {
    .container-info-imoveis {
        gap: 16px;
    }

    .lista-cards-imoveis {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 768px) {

    .mapa-coluna {
        min-height: 360px;
    }

    .mapa-imoveis {
        height: 360px;
    }

}

@media (max-width: 600px) {
    .lista-cards-imoveis {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .container-info-imoveis {
        height: auto;
        align-items: flex-start;
        flex-direction: column;
        gap: 12px;
        padding-top: 16px;
        padding-bottom: 16px;
    }

    .visualizacao-toggle {
        width: 100%;
    }

    .visualizacao-toggle button {
        flex: 1;
    }
}
</style>
