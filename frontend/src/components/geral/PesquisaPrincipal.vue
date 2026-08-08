<script setup lang="ts">
import FiltroContainerFinalidade from './Filtro-Container-finalidade.vue';
import FiltroContainerOpcoes from './Filtro-Container-Opcoes.vue';
</script>

<template>
    <div class="main-geral-filtros">
        <div class="container-filtros">

            <h1 class="hero-title">
                Encontre o seu <span class="highlight">lugar</span>
            </h1>

            <FiltroContainerFinalidade />
            <FiltroContainerOpcoes />
        </div>
    </div>
</template>

<style scoped>
/* Container com margem e centralização para sobrepor a Hero Image */
.main-geral-filtros {
    width: 100%;
    height: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-filtros {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--padding-sm);
    padding: var(--padding-lg);
}


.hero-title {
    font-family: var(--font-primary);
    font-size: var(--text-3xl);
    font-weight: var(--font-medium);
    
    line-height: var(--leading-tight);
    letter-spacing: -0.02em;
    margin-bottom: var(--padding-2xs);
    

    color: var(--color-neutral-0);
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
}

.hero-title .highlight {
    color: var(--color-accent-500);
    position: relative;
    display: inline-block;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);
}


@media (max-width: 768px) {
    .hero-title {
        font-size: var(--text-2xl);
    }
}

@media (min-width: 1024px) {
    .hero-title {
        font-size: var(--text-4xl);
    }
}
</style>