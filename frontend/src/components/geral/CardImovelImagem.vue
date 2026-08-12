<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
// Importação oficial do pacote instalado via npm
import Glide from '@glidejs/glide'
// Caminho correto do CSS para resolver o erro do Vite
import '@glidejs/glide/dist/css/glide.core.css'

import Imovel from '@/assets/imgs/geral/imovel.png'
import { ChevronLeft, ChevronRight } from '@lucide/vue'

// Referência para o elemento do carrossel
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
        <!-- <span class="tag-imagem">1016</span> -->
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <li class="glide__slide"><img :src="Imovel" alt="" /></li>
                <li class="glide__slide"><img :src="Imovel" alt="" /></li>
                <li class="glide__slide"><img :src="Imovel" alt="" /></li>
                <li class="glide__slide"><img :src="Imovel" alt="" /></li>
                <li class="glide__slide"><img :src="Imovel" alt="" /></li>
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

        <!-- Bolinhas de Paginação (Bullets) -->
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
    height: 250px;
}

/* .tag-imagem{
    padding: var(--padding-3xs) var(--padding-xs);
    background-color: var(--bg-glass-segmented);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: var( --radius-sm);
    border: 1px solid var(--border-glass-segmented);
    font-size: var(--text-xs) ;
    

    position: absolute;
    top: 10px;
    right: 15px;
    z-index: 5;
} */

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

/* --- Estilização das Setas --- */
.glide__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: var(--border-glass-card);
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s, opacity 0.2s;
    z-index: 2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    opacity: 0;
}

.container-imagem:hover .glide__arrow {
    opacity: 1;
}

.glide__arrow--left {
    left: 12px;
}

.glide__arrow--right {
    right: 12px;
}

.glide__arrow:hover {
    background: rgba(255, 255, 255, 1);
}

.icone-seta {
    width: 20px;
    height: 20px;
    color: #333;
}

/* --- Estilização das Bolinhas (Bullets) --- */
.glide__bullets {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 6px;
    z-index: 2;
}

.glide__bullet {
    width: 8px;
    height: 8px;
    padding: 0;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;
}

.glide__bullet--active {
    background-color: #ffffff;
    transform: scale(1.2);
}
</style>
