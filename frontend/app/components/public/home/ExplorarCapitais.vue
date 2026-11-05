<script setup lang="ts">
import { ref } from 'vue'
import { ChevronLeft, ChevronRight } from '@lucide/vue'

const cardsTrackRef = ref<HTMLDivElement | null>(null)

const capitals = [
    { name: 'São Paulo - SP', listings: '57821 imóveis', image: '/banner.png' },
    { name: 'Salvador - BA', listings: '12674 imóveis', image: '/imovel.png' },
    { name: 'Florianópolis - SC', listings: '12504 imóveis', image: '/empreendimento.png' },
    { name: 'Rio de Janeiro - RJ', listings: '11569 imóveis', image: '/banner.png' },
    { name: 'Belo Horizonte - MG', listings: '8838 imóveis', image: '/imovel.png' },
    { name: 'Curitiba - PR', listings: '7620 imóveis', image: '/empreendimento.png' },
    { name: 'Recife - PE', listings: '6840 imóveis', image: '/banner.png' },
    { name: 'Brasília - DF', listings: '5980 imóveis', image: '/imovel.png' },
    { name: 'Goiânia - GO', listings: '4720 imóveis', image: '/empreendimento.png' },
]

function scrollCards(direction: -1 | 1) {
    cardsTrackRef.value?.scrollBy({ left: direction * 250, behavior: 'smooth' })
}
</script>

<template>
    <section class="capitais-section container-alinhado" aria-labelledby="capitais-title">
        <PublicTituloSecao
            id-titulo="capitais-title"
            titulo="Localização"
            subtitulo="Explore as capitais"
            detalhe=""
            link=""
            :mostrar-link="false"
        >
            <template #acoes>
                <div class="carousel-controls">
                    <button type="button" aria-label="Mostrar cidades anteriores" @click="scrollCards(-1)">
                        <ChevronLeft aria-hidden="true" />
                    </button>
                    <button type="button" aria-label="Mostrar próximas cidades" @click="scrollCards(1)">
                        <ChevronRight aria-hidden="true" />
                    </button>
                </div>
            </template>
        </PublicTituloSecao>

        <div ref="cardsTrackRef" class="cards-track" tabindex="0" aria-label="Capitais com imóveis disponíveis">
            <article v-for="capital in capitals" :key="capital.name" class="capital-card">
                <div class="card-image">
                    <img :src="capital.image" alt="Imagem ilustrativa de imóvel" loading="lazy">
                    <span>Imagem ilustrativa</span>
                </div>

                <div class="card-info">
                    <h3>{{ capital.name }}</h3>
                    <p>{{ capital.listings }}</p>
                </div>
            </article>
        </div>
    </section>
</template>

<style scoped>
.capitais-section {
    padding-top: 24px;
    padding-bottom: 32px;
}

.carousel-controls {
    display: flex;
    gap: 8px;
}

.carousel-controls button {
    display: grid;
    width: 36px;
    height: 36px;
    place-items: center;
    padding: 0;
    color: var(--color-neutral-700);
    background: var(--bg-surface);
    border: 1px solid var(--color-neutral-300);
    border-radius: var(--radius-full);
    cursor: pointer;
    transition: color var(--transition-fast), border-color var(--transition-fast);
}

.carousel-controls button:hover {
    color: var(--color-accent-500);
    border-color: var(--color-accent-500);
}

.carousel-controls button:focus-visible {
    outline: 2px solid var(--color-accent-500);
    outline-offset: 2px;
}

.cards-track {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
}

.cards-track::-webkit-scrollbar {
    display: none;
}

.capital-card {
    flex: 0 0 220px;
    overflow: hidden;
    background: var(--bg-surface);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    scroll-snap-align: start;
}

.card-image {
    position: relative;
    height: 124px;
}

.card-image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-image span {
    position: absolute;
    right: 8px;
    bottom: 8px;
    padding: 4px 8px;
    color: var(--color-neutral-0);
    background: rgba(31, 23, 26, 0.8);
    border-radius: var(--radius-full);
    font-size: var(--text-xs);
    font-weight: var(--font-semibold);
}

.card-info {
    padding: 10px 12px;
}

.card-info h3 {
    margin: 0 0 2px;
    color: var(--text-main);
    font-size: var(--text-sm);
    font-weight: var(--font-semibold);
}

.card-info p {
    margin: 0;
    color: var(--text-muted);
    font-size: var(--text-sm);
}

@media (max-width: 600px) {
    .capitais-section {
        padding-top: 16px;
        padding-bottom: 24px;
    }

    .capital-card {
        flex-basis: 200px;
    }
}
</style>
