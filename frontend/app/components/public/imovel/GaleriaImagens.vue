<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.css'
import { ChevronLeft, ChevronRight, Images } from '@lucide/vue'

const mobileGlideRef = ref<HTMLElement | null>(null)
let glideInstance: InstanceType<typeof Glide> | null = null
let mobileBreakpoint: MediaQueryList | null = null

const fotos = [
    {
        src: '//pic.le-cdn.com/thumbs/1024x768/08/1/properties/Property-7bc2278f460003023f604333a2b220e2-131662985.jpg',
        alt: 'Foto principal do imóvel',
    },
    {
        src: '//pic.le-cdn.com/thumbs/520x390/08/2/properties/Property-257a17cae7fa6f9eb0508391d5327f4d-131662985.jpg',
        alt: 'Foto do imóvel',
    },
    {
        src: '//pic.le-cdn.com/thumbs/520x390/08/3/properties/Property-fda00474e9713102d59f977f3993f5fd-131662985.jpg',
        alt: 'Foto do imóvel',
    },
    {
        src: '//pic.le-cdn.com/thumbs/520x390/08/4/properties/Property-dbff0f35c2e5816ec3a8999844d44295-131662985.jpg',
        alt: 'Foto do imóvel',
    },
    {
        src: '//pic.le-cdn.com/thumbs/520x390/08/5/properties/Property-63b839c57c9eba52d1e058465c80b7c7-131662985.jpg',
        alt: 'Foto do imóvel',
    },
] as const

function syncMobileGlide(event: MediaQueryList | MediaQueryListEvent) {
    if (event.matches && mobileGlideRef.value && !glideInstance) {
        glideInstance = new Glide(mobileGlideRef.value, {
            type: 'slider',
            startAt: 0,
            perView: 1,
            gap: 0,
            rewind: true,
        })
        glideInstance.mount()
    } else if (!event.matches && glideInstance) {
        glideInstance.destroy()
        glideInstance = null
    }
}

onMounted(() => {
    mobileBreakpoint = window.matchMedia('(max-width: 700px)')
    syncMobileGlide(mobileBreakpoint)
    mobileBreakpoint.addEventListener('change', syncMobileGlide)
})

onUnmounted(() => {
    mobileBreakpoint?.removeEventListener('change', syncMobileGlide)
    glideInstance?.destroy()
    glideInstance = null
})
</script>


<template>
    <div class="galeria-imagens">
        <div class="moldura-imagem imagem-principal">
            <img id="smallgallerypic1" data-role="open-fullscreen-gallery" data-index="0" :src="fotos[0].src"
                crossorigin="anonymous" :alt="fotos[0].alt">
        </div>
        <div class="moldura-imagem imagem-secundaria">
            <img id="smallgallerypic2" data-role="open-fullscreen-gallery" data-index="1" :src="fotos[1].src"
                crossorigin="anonymous" :alt="fotos[1].alt">
        </div>
        <div class="moldura-imagem imagem-secundaria">
            <img id="smallgallerypic3" data-role="open-fullscreen-gallery" data-index="2" :src="fotos[2].src"
                crossorigin="anonymous" :alt="fotos[2].alt">
        </div>
        <div class="moldura-imagem imagem-secundaria">
            <img id="smallgallerypic4" data-role="open-fullscreen-gallery" data-index="3" :src="fotos[3].src"
                crossorigin="anonymous" :alt="fotos[3].alt">
        </div>
        <div class="ultimo-card">
            <div class="moldura-imagem imagem-secundaria">
                <img id="smallgallerypic5" data-role="open-fullscreen-gallery" data-index="4" :src="fotos[4].src"
                    crossorigin="anonymous" :alt="fotos[4].alt">
            </div>

            <button class="btn-explorar-fotos" type="button">
                <Images aria-hidden="true" />
                Explorar todas as fotos
            </button>
        </div>
    </div>

    <div ref="mobileGlideRef" class="glide galeria-mobile">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <li v-for="(foto, index) in fotos" :key="foto.src" class="glide__slide">
                    <div class="moldura-imagem">
                        <img :id="`mobilegallerypic${index + 1}`" data-role="open-fullscreen-gallery"
                            :data-index="index" :src="foto.src" crossorigin="anonymous" :alt="foto.alt">
                    </div>
                </li>
            </ul>
        </div>

        <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<" aria-label="Foto anterior">
                <ChevronLeft aria-hidden="true" />
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">" aria-label="Próxima foto">
                <ChevronRight aria-hidden="true" />
            </button>
        </div>

        <div class="glide__bullets" data-glide-el="controls[nav]">
            <button v-for="(foto, index) in fotos" :key="foto.src" class="glide__bullet" :data-glide-dir="`=${index}`"
                :aria-label="`Ir para foto ${index + 1}`"></button>
        </div>

    </div>
    <button class="btn-explorar-fotos mobile-explorar-fotos" type="button">
        <Images aria-hidden="true" />
        Explorar todas as fotos
    </button>
</template>


<style scoped>
.galeria-imagens {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 16px;
    width: 100%;
    height: 500px;
}

.moldura-imagem {
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    border-radius: var(--radius-lg);
}

.galeria-imagens img,
.galeria-mobile img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-normal);
}

@media (hover: hover) and (pointer: fine) {
    .moldura-imagem:hover img {
        transform: scale(1.05);
    }
}

.imagem-principal {
    grid-column: span 2;
    grid-row: span 2;
}

.ultimo-card {
    position: relative;
    min-width: 0;
    min-height: 0;
}

.ultimo-card .moldura-imagem {
    width: 100%;
    height: 100%;
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

.galeria-mobile {
    display: none;
}

.mobile-explorar-fotos {
    display: none;
}

@media (max-width: 700px) {
    .galeria-imagens {
        display: none;
    }

    .galeria-mobile {
        position: relative;
        display: block;
        width: 100%;
        height: min(72vw, 420px);
        min-height: 240px;
    }

    .galeria-mobile .glide__track,
    .galeria-mobile .glide__slides,
    .galeria-mobile .glide__slide,
    .galeria-mobile .moldura-imagem {
        height: 100%;
    }

    .galeria-mobile .glide__slide {
        overflow: hidden;
    }

    .galeria-mobile .glide__arrow {
        position: absolute;
        top: 50%;
        z-index: 2;
        display: flex;
        width: 36px;
        height: 36px;
        align-items: center;
        justify-content: center;
        transform: translateY(-50%);
        border: 0;
        border-radius: var(--radius-full);
        background: var(--bg-glass-card);
        box-shadow: var(--shadow-sm);
        color: var(--color-neutral-900);
        cursor: pointer;
    }

    .galeria-mobile .glide__arrow--left {
        left: var(--padding-sm);
    }

    .galeria-mobile .glide__arrow--right {
        right: var(--padding-sm);
    }

    .galeria-mobile .glide__arrow :deep(svg) {
        width: 20px;
        height: 20px;
    }

    .galeria-mobile .glide__bullets {
        position: absolute;
        bottom: var(--padding-sm);
        left: 50%;
        z-index: 2;
        display: flex;
        gap: var(--padding-2xs);
        transform: translateX(-50%);
    }

    .galeria-mobile .glide__bullet {
        width: 8px;
        height: 8px;
        padding: 0;
        border: 0;
        border-radius: var(--radius-full);
        background: rgba(255, 255, 255, 0.65);
        cursor: pointer;
        transition: width var(--transition-fast), background-color var(--transition-fast);
    }

    .galeria-mobile .glide__bullet--active {
        width: 20px;
        background: var(--color-neutral-0);
    }

    .mobile-explorar-fotos {
        display: flex;
        position: static;
        width: fit-content;
        margin: var(--padding-sm) 0 0 auto;
        padding: var(--padding-xs) var(--padding-sm);
        font-size: var(--text-xs);
    }

    .mobile-explorar-fotos :deep(svg) {
        width: 18px;
        height: 18px;
    }

    .galeria-mobile .glide__bullets {
        left: var(--padding-lg);
        transform: none;
    }

    .galeria-mobile .glide__arrow {
        top: auto;
        bottom: var(--padding-sm);
        transform: none;
    }

    .galeria-mobile .glide__arrow--left {
        left: auto;
        right: calc(var(--padding-sm) + 44px);
    }

    .galeria-mobile .glide__arrow--right {
        right: var(--padding-sm);
    }
}
</style>
