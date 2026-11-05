<script setup lang="ts">
import { ChevronRight } from '@lucide/vue';
defineProps<{
    titulo: string
    subtitulo: string
    detalhe: string
    link: string
}>()
</script>


<template>
    <div class="titulo-section">
        <span class="titulo-section-text">{{ titulo }}</span>

        <div class="container-frase">
            <h2>
                <span class="chamada-principal">{{ subtitulo }}</span>
                <span class="detalhe">{{ detalhe }}</span>
            </h2>

            <div>
                <a :href="link" class="link-ver-tudo" aria-label="Ver tudo">
                    <span>Ver tudo</span>
                    <ChevronRight class="icone-seta" aria-hidden="true" />
                </a>
            </div>
        </div>
    </div>
</template>


<style scoped>
.titulo-section {
    display: flex;
    flex-direction: column;
    gap: var(--padding-3xs);
    padding-bottom: 16px;
}

.titulo-section-text {
    color: var(--color-accent-500);
    font-size: var(--text-xs);
    font-weight: var(--font-semibold);
    letter-spacing: 0.08em;
    line-height: var(--leading-tight);
    text-transform: uppercase;
}

.container-frase {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--padding-xl);
}

.titulo-section h2 {
    flex: 1;
    max-width: 800px;
    margin: 0;
    color: var(--color-neutral-700);
    font-family: var(--font-primary);
    font-size: var(--text-xl);
    font-weight: var(--font-medium);
    line-height: var(--leading-tight);
}

.chamada-principal {
    font-weight: var(--font-semibold);
}

.detalhe {
    margin-inline-start: var(--padding-2xs);
    color: var(--color-neutral-600);
    font-weight: var(--font-regular);
}

.detalhe::before {
    content: '—';
    margin-inline-end: var(--padding-2xs);
    color: var(--color-neutral-400);
}

.link-ver-tudo {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    color: var(--color-neutral-600);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    text-decoration: none;
    transition: color var(--transition-fast), border-color var(--transition-fast);
}


.link-ver-tudo:hover {
    color: var(--color-neutral-900);
}

.link-ver-tudo:focus-visible {
    outline: 2px solid var(--color-accent-500);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
}

.link-ver-tudo .icone-seta {
    box-sizing: border-box;
    width: 36px;
    height: 36px;
    padding: 8px;
    color: var(--color-neutral-700);
    background: var(--bg-surface);
    border: 1px solid var(--color-neutral-300);
    border-radius: var(--radius-full);
    transition: color var(--transition-fast), border-color var(--transition-fast);
}

.link-ver-tudo:hover .icone-seta {
    color: var(--color-accent-500);
    border-color: var(--color-accent-500);
}


@media (max-width: 480px) {
    .container-frase {
        align-items: flex-start;
        flex-direction: column;
        gap: var(--padding-xs);
    }

    .container-frase > div {
        align-self: flex-end;
    }
}

@media (max-width: 768px) {
    .titulo-section h2 {
        font-size: var(--text-lg);
    }
}

</style>
