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
       
            <span class="titulo-section-text">
                {{ titulo }}
            </span>
        

        <div class="container-frase">
            <h3>
                {{ subtitulo }}
                <span class="detalhe">
                    {{ detalhe }}
                </span>
            </h3>


            <div>
                <a :href="link" class="link-ver-tudo">
                    <span>Ver tudo</span>

                    <ChevronRight class="icone-seta" />
                </a>
            </div>
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
    /* font-family: var(--font-secondary); */
    font-weight: var(--font-medium);
    color: var(--color-neutral-400);
    position: relative;
    padding-left: var(--padding-2xs);
    font-size: var(--text-sm);
    letter-spacing: 1px;
    /* border: 1px solid red; */
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

.container-frase {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.titulo-section h3 {
    font-size: var(--text-2xl);
    font-weight: var(--font-medium);
    color: var(--color-neutral-900);
    font-family: var(--font-secondary);
}

.detalhe {
    color: var(--color-neutral-500);
}



.link-ver-tudo {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-size: var(--text-sm);
    font-weight: var(--font-medium);    
    color: var(--color-neutral-600);
    text-decoration: none;
    white-space: nowrap;
    transition: color var(--transition-normal);
}


.link-ver-tudo:hover {
    color: var(--color-neutral-900);
}


.link-ver-tudo .icone-seta {
    transition: transform var(--transition-normal), color var(--transition-normal);
}

.link-ver-tudo:hover .icone-seta {
    transform: translateX(6px);
    color: var(--color-accent-500);
}
</style>
