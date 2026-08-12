<script setup lang="ts">
defineProps<{
    titulo: string
    subtitulo: string
    detalhe: string
}>()
</script>


<template>
    <div class="titulo-section">
        <div>
            <span class="titulo-section-text">
                {{ titulo }}
            </span>
        </div>

        <div>
            <h3>
                {{ subtitulo }}
                <span class="detalhe">
                    {{ detalhe }}
                </span>
            </h3>
        </div>
    </div>
</template>


<style scoped>
.titulo-section {
    display: flex;
    flex-direction: column;
    /* gap: 8px; */
    /* border: 1px solid red; */
    /* padding: var(--padding-xl) 0; */
}

.titulo-section-text {
    font-family: var(--font-secondary);
    font-weight: var(--font-medium);
    color: var(--color-neutral-400);
    position: relative;
    padding-left: var(--padding-2xs);
    font-size: var(--text-xs);
}

/* .titulo-section-text:hover{
    color: #800f2f;
} */

.titulo-section-text::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    background-color: var(--color-neutral-400);
    top: 0;
    left: 0;
    border-radius: 2px;
}

.titulo-section h3 {
    font-size: var(--text-2xl);
    font-weight: var(--font-medium);
    color: var(--color-neutral-900);
}

.detalhe {
    color: var(--color-neutral-500);
}
</style>
