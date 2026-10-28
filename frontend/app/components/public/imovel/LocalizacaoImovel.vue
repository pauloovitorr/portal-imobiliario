<script setup lang="ts">
import { MapPin } from '@lucide/vue'

const endereco = 'Rua Pablo Picasso, S/N, Perdizes, São Paulo'
const mapaUrl = `https://maps.google.com/maps?q=${encodeURIComponent(endereco)}&output=embed`
</script>

<template>
    <section class="secao-localizacao" aria-labelledby="titulo-localizacao">
        <div class="cabecalho-localizacao">
            <div>
                <h2 id="titulo-localizacao">Localização do imóvel</h2>
                <p class="endereco-localizacao">
                    <MapPin aria-hidden="true" />
                    <span>{{ endereco }}</span>
                </p>
            </div>
        </div>

        <div class="mapa-wrapper">
            <iframe
                :src="mapaUrl"
                title="Mapa ilustrativo da localização do imóvel em Perdizes, São Paulo"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
            />
        </div>
    </section>
</template>

<style scoped>
.secao-localizacao {
    display: flex;
    flex-direction: column;
    gap: var(--padding-lg);
}

.cabecalho-localizacao {
    display: flex;
    align-items: flex-start;
    gap: var(--padding-md);
}

.cabecalho-localizacao h2 {
    margin: 0;
    color: var(--text-main);
    font-size: var(--text-xl);
    font-weight: var(--font-medium);
    line-height: var(--leading-tight);
}

.endereco-localizacao {
    display: flex;
    align-items: flex-start;
    gap: var(--padding-xs);
    margin: var(--padding-sm) 0 0;
    color: var(--color-neutral-600);
    font-size: var(--text-base);
    line-height: var(--leading-normal);
}

.endereco-localizacao svg {
    width: 18px;
    height: 18px;
    flex: 0 0 auto;
    margin-top: 2px;
    color: var(--color-accent-500);
}

.mapa-wrapper {
    height: 300px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--color-neutral-100);
}

.mapa-wrapper iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
}

@media (max-width: 640px) {
    .mapa-wrapper {
        height: 260px;
    }
}
</style>
