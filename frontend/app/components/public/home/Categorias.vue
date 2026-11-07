<script setup lang="ts">
import { ref } from 'vue'
import { ChevronLeft, ChevronRight } from '@lucide/vue'

const cardsTrackRef = ref<HTMLDivElement | null>(null)

const categories = [
    { name: 'Casas', image: '/imovel.png' },
    { name: 'Casas em condomínio', image: '/empreendimento.png' },
    { name: 'Alto padrão', image: '/banner.png' },
    { name: 'Lançamentos', image: '/empreendimento2.png' },
    { name: 'Apartamentos', image: '/imovel.png' },
    { name: 'Terrenos', image: '/empreendimento.png' },
]

function scrollCards(direction: -1 | 1) {
    cardsTrackRef.value?.scrollBy({ left: direction * 232, behavior: 'smooth' })
}
</script>

<template>
    <section class="categorias-section container-alinhado" aria-labelledby="categorias-title">
        <PublicTituloSecao
            id-titulo="categorias-title"
            titulo="Explore"
            subtitulo="Categorias"
            detalhe=""
            link=""
            :mostrar-link="false"
        >
            <template #acoes>
                <div class="carousel-controls">
                    <button type="button" aria-label="Mostrar categorias anteriores" @click="scrollCards(-1)">
                        <ChevronLeft aria-hidden="true" />
                    </button>
                    <button type="button" aria-label="Mostrar próximas categorias" @click="scrollCards(1)">
                        <ChevronRight aria-hidden="true" />
                    </button>
                </div>
            </template>
        </PublicTituloSecao>

        <div ref="cardsTrackRef" class="cards-track" tabindex="0" aria-label="Categorias de imóveis">
            <article v-for="category in categories" :key="category.name" class="category-card">
                <img :src="category.image" :alt="`Imagem ilustrativa: ${category.name}`" loading="lazy">
                <div class="card-shade"></div>
                <h3>{{ category.name }}</h3>
            </article>
        </div>
    </section>
</template>

<style scoped>
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

.category-card {
    position: relative;
    flex: 0 0 220px;
    height: 180px;
    overflow: hidden;
    border-radius: var(--radius-md);
    scroll-snap-align: start;
}

.category-card img,
.card-shade {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}

.category-card img {
    object-fit: cover;
    transition: transform var(--transition-normal);
}

.category-card:hover img {
    transform: scale(1.04);
}

.card-shade {
    background: linear-gradient(180deg, transparent 48%, rgba(31, 23, 26, 0.78) 100%);
}

.category-card h3 {
    position: absolute;
    right: 12px;
    bottom: 10px;
    left: 12px;
    margin: 0;
    color: var(--color-neutral-0);
    font-size: var(--text-sm);
    font-weight: var(--font-semibold);
    line-height: var(--leading-tight);
}

@media (max-width: 600px) {
    .category-card {
        flex-basis: 200px;
        height: 164px;
    }
}
</style>
