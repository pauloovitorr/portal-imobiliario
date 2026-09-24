<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.css'
import { ChevronLeft, ChevronRight, Heart } from '@lucide/vue'

const glideRef = ref<HTMLElement | null>(null)
let glideInstance: any = null

onMounted(() => {
    if (glideRef.value) {
        glideInstance = new Glide(glideRef.value, {
            type: 'slider',
            startAt: 0,
            perView: 1,
            gap: 0,
            rewind: true
        })
        glideInstance.mount()
    }
})

onUnmounted(() => {
    if (glideInstance) {
        glideInstance.destroy()
    }
})
</script>

<template>
    <div ref="glideRef" class="glide container-imagem">
        <!-- Botão Favorito Estilo Airbnb (Flutuante) -->
        <button class="btn-favorito" aria-label="Favoritar imóvel">
            <Heart class="icone-favoritar" />
        </button>

        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <li class="glide__slide">
                    <NuxtImg src="/imovel.png" format="webp" loading="lazy" alt="Imóvel" />
                </li>
                <li class="glide__slide">
                    <NuxtImg src="/imovel.png" format="webp" loading="lazy" alt="Imóvel" />
                </li>
                <li class="glide__slide">
                    <NuxtImg src="/imovel.png" format="webp" loading="lazy" alt="Imóvel" />
                </li>
                <li class="glide__slide">
                    <NuxtImg src="/imovel.png" format="webp" loading="lazy" alt="Imóvel" />
                </li>
                <li class="glide__slide">
                    <NuxtImg src="/imovel.png" format="webp" loading="lazy" alt="Imóvel" />
                </li>
            </ul>
        </div>

        <!-- Setas de Navegação -->
        <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<" aria-label="Anterior">
                <ChevronLeft class="icone-seta" />
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">" aria-label="Próximo">
                <ChevronRight class="icone-seta" />
            </button>
        </div>

        <!-- Bullets de Navegação -->
        <div class="glide__bullets" data-glide-el="controls[nav]">
            <button class="glide__bullet" data-glide-dir="=0" aria-label="Slide 1"></button>
            <button class="glide__bullet" data-glide-dir="=1" aria-label="Slide 2"></button>
            <button class="glide__bullet" data-glide-dir="=2" aria-label="Slide 3"></button>
            <button class="glide__bullet" data-glide-dir="=3" aria-label="Slide 4"></button>
            <button class="glide__bullet" data-glide-dir="=4" aria-label="Slide 5"></button>
        </div>
    </div>
</template>

<style scoped>
.container-imagem {
    position: relative;
    width: 100%;
    height: 220px;
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    overflow: hidden;
}

.glide__track,
.glide__slides,
.glide__slide {
    height: 100%;
}

.container-imagem img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Botão Favorito Flutuante */
.btn-favorito {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(0, 0, 0, 0.3);
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 5;
    transition: transform var(--transition-fast), background var(--transition-fast);
}

.btn-favorito:hover {
    transform: scale(1.1);
    background: rgba(0, 0, 0, 0.5);
}

.icone-favoritar {
    width: 18px;
    height: 18px;
    color: #ffffff;
}

/* Setas do Glide */
.glide__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s, opacity 0.2s;
    z-index: 3;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    opacity: 0;
}

.container-imagem:hover .glide__arrow {
    opacity: 1;
}

.glide__arrow--left {
    left: 10px;
}

.glide__arrow--right {
    right: 10px;
}

.glide__arrow:hover {
    background: #ffffff;
}

.icone-seta {
    width: 16px;
    height: 16px;
    color: var(--color-neutral-900);
}

/* Bullets */
.glide__bullets {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 5px;
    z-index: 3;
}

.glide__bullet {
    width: 6px;
    height: 6px;
    padding: 0;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    border: none;
    cursor: pointer;
    transition: var(--transition-normal);
}

.glide__bullet--active {
    background-color: #ffffff;
    width: 16px;
    border-radius: 20px;
}
</style>