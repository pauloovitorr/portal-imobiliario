<script setup lang="ts">
import { Images } from '@lucide/vue'
</script>


<template>
    <div class="galeria-imagens">
        <img class="imagem-principal" id="smallgallerypic1" data-role="open-fullscreen-gallery" data-index="0"
            src="//pic.le-cdn.com/thumbs/1024x768/08/1/properties/Property-7bc2278f460003023f604333a2b220e2-131662985.jpg"
            crossorigin="anonymous" alt="Foto principal do imóvel">
        <img class="imagem-secundaria" id="smallgallerypic2" data-role="open-fullscreen-gallery" data-index="1"
            src="//pic.le-cdn.com/thumbs/520x390/08/2/properties/Property-257a17cae7fa6f9eb0508391d5327f4d-131662985.jpg"
            crossorigin="anonymous" alt="Foto do imóvel">
        <img class="imagem-secundaria" id="smallgallerypic3" data-role="open-fullscreen-gallery" data-index="2"
            src="//pic.le-cdn.com/thumbs/520x390/08/3/properties/Property-fda00474e9713102d59f977f3993f5fd-131662985.jpg"
            crossorigin="anonymous" alt="Foto do imóvel">
        <img class="imagem-secundaria" id="smallgallerypic4" data-role="open-fullscreen-gallery" data-index="3"
            src="//pic.le-cdn.com/thumbs/520x390/08/4/properties/Property-dbff0f35c2e5816ec3a8999844d44295-131662985.jpg"
            crossorigin="anonymous" alt="Foto do imóvel">
        <div class="ultimo-card">
            <img class="imagem-secundaria " id="smallgallerypic5" data-role="open-fullscreen-gallery" data-index="4"
                src="//pic.le-cdn.com/thumbs/520x390/08/5/properties/Property-63b839c57c9eba52d1e058465c80b7c7-131662985.jpg"
                crossorigin="anonymous" alt="Foto do imóvel">

            <button class="btn-explorar-fotos" type="button">
                <Images aria-hidden="true" />
                Explorar todas as fotos
            </button>
        </div>
    </div>
</template>


<style scoped>
.galeria-imagens {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 16px;
    width: 100%;
    height: 500px;
    overflow: hidden;

}

.galeria-imagens img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-lg);
}

.imagem-principal {
    grid-column: span 2;
    grid-row: span 2;
}

.ultimo-card {
    position: relative;
}

.btn-explorar-fotos {
    position: absolute;
    right: 16px;
    bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border: 1px solid var(--border-glass-card);
    border-radius: var(--radius-full);
    color: var(--text-main);
    font-family: var(--font-primary);
    font-size: var(--text-xs);
    font-weight: var(--font-medium);
    line-height: var(--leading-tight);
    background: var(--bg-glass-card);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    cursor: pointer;
    transition: background-color var(--transition-fast), color var(--transition-fast);
    text-transform: uppercase;
}

.btn-explorar-fotos:hover {
    background-color: var(--color-neutral-0);
}

.btn-explorar-fotos:focus-visible {
    outline: 2px solid var(--color-accent-500);
    outline-offset: 2px;
}

.btn-explorar-fotos :deep(svg) {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
}

@media (max-width: 700px) {
    .galeria-imagens {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: auto;
        aspect-ratio: auto;
    }

    .imagem-principal {
        grid-column: span 2;
        grid-row: auto;
        aspect-ratio: 1.6 / 1;
    }

    .imagem-secundaria {
        aspect-ratio: 1.4 / 1;
    }
}
</style>
