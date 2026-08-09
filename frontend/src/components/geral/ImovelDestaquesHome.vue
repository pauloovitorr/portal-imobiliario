<script setup lang="ts">
import CardImovel from './CardImovel.vue';


</script>


<template>
    <section class="imovel-destaque-container">
        <div class="titulo-section">
            <div>
                <span class="titulo-section-text">Imóveis em Destaque</span>
            </div>
            <div>
                <h3>Acabaram de chegar
                    <span class="detalhe">e merecem toda a sua atenção</span>
                </h3>
            </div>
        </div>

        <div class="imoveis-container">
            <CardImovel />
            <CardImovel />
            <CardImovel />
        </div>

    </section>
</template>


<style scoped>
.imovel-destaque-container {
    max-width: var(--max-width);
    height: 700px;
    margin: 0 auto;
    margin-top: 32px;
    margin-bottom: 32px;
    /* border: 1px solid red; */
    padding: var(--padding-xl)
}


.titulo-section {
    display: flex;
    flex-direction: column;
    gap: 8px;
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

.imoveis-container {
    width: 100%;
    /* border: 1px solid rgb(209, 255, 5); */
    height: 500px;
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 32px;
    row-gap: 32px
}
</style>
