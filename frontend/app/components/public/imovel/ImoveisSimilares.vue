<script setup lang="ts">
import { ChevronLeft, ChevronRight } from '@lucide/vue'
import { ref } from 'vue'

const listaRef = ref<HTMLElement | null>(null)

const imoveis = [
    {
        id: 1,
        tipoImovel: 'Apartamento à venda',
        bairro: 'Jardim Paulista',
        localizacao: 'São Paulo/SP',
        area: '68 m²',
        quartos: '2 dorms',
        suites: '1 suíte',
        vagas: '1 vaga',
        preco: 'R$ 631.774',
        imagem: '/imovel.png',
    },
    {
        id: 2,
        tipoImovel: 'Apartamento à venda',
        bairro: 'Vila Formosa',
        localizacao: 'São Paulo/SP',
        area: '54 m²',
        quartos: '2 dorms',
        suites: '1 suíte',
        vagas: '1 vaga',
        preco: 'R$ 352.130',
        imagem: '/imovel.png',
    },
    {
        id: 3,
        tipoImovel: 'Apartamento à venda',
        bairro: 'Bela Vista',
        localizacao: 'São Paulo/SP',
        area: '62 m²',
        quartos: '2 dorms',
        suites: '1 suíte',
        vagas: '1 vaga',
        preco: 'R$ 362.000',
        imagem: '/imovel.png',
    },
    {
        id: 4,
        tipoImovel: 'Apartamento à venda',
        bairro: 'Brooklin',
        localizacao: 'São Paulo/SP',
        area: '74 m²',
        quartos: '3 dorms',
        suites: '1 suíte',
        vagas: '2 vagas',
        preco: 'Consulte preço',
        imagem: '/imovel.png',
    },
    {
        id: 5,
        tipoImovel: 'Apartamento à venda',
        bairro: 'Tatuapé',
        localizacao: 'São Paulo/SP',
        area: '70 m²',
        quartos: '3 dorms',
        suites: '1 suíte',
        vagas: '2 vagas',
        preco: 'R$ 402.000',
        imagem: '/imovel.png',
    },
]

const rolarLista = (direcao: number): void => {
    if (!listaRef.value) return

    listaRef.value.scrollBy({
        left: direcao * (listaRef.value.clientWidth * 0.8),
        behavior: 'smooth',
    })
}

</script>

<template>
    <section class="secao-similares" aria-labelledby="titulo-similares">
        <div class="cabecalho-similares">
            <div>
                <h2 id="titulo-similares">Imóveis novos similares</h2>
                <p>Outras opções que podem combinar com você.</p>
            </div>
            <div class="controles-carrossel" aria-label="Controles da lista de imóveis">
                <button type="button" aria-label="Rolar imóveis para a esquerda" @click="rolarLista(-1)">
                    <ChevronLeft aria-hidden="true" />
                </button>
                <button type="button" aria-label="Rolar imóveis para a direita" @click="rolarLista(1)">
                    <ChevronRight aria-hidden="true" />
                </button>
            </div>
        </div>

        <div ref="listaRef" class="lista-similares" tabindex="0" aria-label="Lista de imóveis similares">
            <PublicHomeCardImovel
                v-for="imovel in imoveis"
                :key="imovel.id"
                compacto
                class="card-similar"
                :tipo-imovel="imovel.tipoImovel"
                :bairro="imovel.bairro"
                :localizacao="imovel.localizacao"
                :area="imovel.area"
                :quartos="imovel.quartos"
                :suites="imovel.suites"
                :vagas="imovel.vagas"
                :preco="imovel.preco"
                :imagem="imovel.imagem"
            />
        </div>
        <p class="nota-demo">Imóveis e informações exibidos para fins de demonstração.</p>
    </section>
</template>

<style scoped>
.secao-similares {
    display: flex;
    flex-direction: column;
    gap: var(--padding-md);
    min-width: 0;
}

.cabecalho-similares {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--padding-md);
}

.cabecalho-similares h2 {
    margin: 0;
    color: var(--text-main);
    font-size: var(--text-xl);
    font-weight: var(--font-medium);
    line-height: var(--leading-tight);
}

.cabecalho-similares p {
    margin: var(--padding-3xs) 0 0;
    color: var(--text-muted);
    font-size: var(--text-sm);
}

.controles-carrossel {
    display: none;
    flex: 0 0 auto;
    gap: var(--padding-xs);
}

.controles-carrossel button {
    display: inline-flex;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-full);
    background: var(--bg-surface);
    color: var(--color-neutral-700);
    cursor: pointer;
    transition: background-color var(--transition-fast), color var(--transition-fast);
}

.controles-carrossel button:hover {
    background: var(--color-accent-500);
    color: var(--color-neutral-0);
}

.controles-carrossel button:focus-visible,
.botao-favorito:focus-visible {
    outline: 2px solid var(--color-accent-500);
    outline-offset: 3px;
}

.controles-carrossel svg {
    width: 18px;
    height: 18px;
}

.lista-similares {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: var(--padding-md);
    min-width: 0;
}

.nota-demo {
    margin: 0;
    color: var(--text-muted);
    font-size: var(--text-xs);
}

@media (max-width: 1100px) and (min-width: 641px) {
    .lista-similares {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .cabecalho-similares h2 {
        font-size: var(--text-xl);
    }

    .controles-carrossel {
        display: flex;
    }

    .lista-similares {
        grid-auto-columns: minmax(240px, 78%);
        grid-auto-flow: column;
        grid-template-columns: none;
        overflow-x: auto;
        overscroll-behavior-inline: contain;
        padding: 2px 2px var(--padding-xs);
        scroll-behavior: smooth;
        scroll-snap-type: x mandatory;
        scrollbar-color: var(--color-neutral-300) transparent;
        scrollbar-width: thin;
    }

    .card-similar {
        scroll-snap-align: start;
    }

}
</style>
