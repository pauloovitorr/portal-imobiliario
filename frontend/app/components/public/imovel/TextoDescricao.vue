<script setup lang="ts">
import DOMPurify from 'isomorphic-dompurify'
import { ChevronDown } from '@lucide/vue'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from 'vue'

const COLLAPSED_HEIGHT = 200

const props = defineProps<{
    tituloDescricao: string;
    textoDescricao: string;
}>()

const descricaoId = useId()
const sanitizedDescription = computed(() => DOMPurify.sanitize(props.textoDescricao))
const descriptionClip = ref<HTMLElement | null>(null)
const descriptionContent = ref<HTMLElement | null>(null)
const hasOverflow = ref(false)
const isExpanded = ref(false)
let resizeObserver: ResizeObserver | undefined

function updateOverflow() {
    const contentHeight = descriptionContent.value?.scrollHeight ?? 0
    hasOverflow.value = contentHeight > COLLAPSED_HEIGHT

    if (!hasOverflow.value) {
        isExpanded.value = false
        if (descriptionClip.value) {
            descriptionClip.value.style.height = 'auto'
        }
    } else if (!isExpanded.value && descriptionClip.value) {
        descriptionClip.value.style.height = `${COLLAPSED_HEIGHT}px`
    }
}

function toggleDescription() {
    const clip = descriptionClip.value
    if (!clip || !hasOverflow.value) return

    clip.style.height = `${clip.getBoundingClientRect().height}px`
    void clip.offsetHeight
    isExpanded.value = !isExpanded.value
    clip.style.height = isExpanded.value ? `${clip.scrollHeight}px` : `${COLLAPSED_HEIGHT}px`
}

function finishHeightTransition(event: TransitionEvent) {
    const clip = descriptionClip.value
    if (event.target === clip && event.propertyName === 'height' && isExpanded.value && clip) {
        clip.style.height = 'auto'
    }
}

watch(sanitizedDescription, async () => {
    await nextTick()
    updateOverflow()
})

onMounted(async () => {
    await nextTick()
    updateOverflow()

    if (descriptionContent.value && typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(updateOverflow)
        resizeObserver.observe(descriptionContent.value)
    }
})

onBeforeUnmount(() => resizeObserver?.disconnect())
</script>

<template>
    <section class="container-texto-descricao">
        <h2 class="titulo-descricao">{{ tituloDescricao }}</h2>

        <div
            :id="descricaoId"
            ref="descriptionClip"
            class="description-clip"
            :class="{ 'is-collapsed': hasOverflow && !isExpanded }"
            @transitionend="finishHeightTransition"
        >
            <div ref="descriptionContent" class="texto-descricao" v-html="sanitizedDescription"></div>
        </div>

        <button
            v-if="hasOverflow"
            class="toggle-description"
            type="button"
            :aria-expanded="isExpanded"
            :aria-controls="descricaoId"
            @click="toggleDescription"
        >
            <span>{{ isExpanded ? 'Recolher descrição' : 'Descrição completa' }}</span>
            <ChevronDown class="toggle-description-icon" :class="{ 'is-expanded': isExpanded }" aria-hidden="true" />
        </button>
    </section>
</template>

<style scoped>
.container-texto-descricao {
    width: 100%;
}

.titulo-descricao {
    margin: 0 0 var(--padding-md);
    color: var(--color-neutral-900);
    font-size: var(--text-xl);
    font-weight: var(--font-medium);
    line-height: var(--leading-tight);
}

.description-clip {
    position: relative;
    height: 300px;
    overflow: hidden;
    transition: height var(--transition-normal);
}

.description-clip.is-collapsed::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 56px;
    background: linear-gradient(to bottom, transparent, var(--bg-surface));
    content: '';
    pointer-events: none;
}

.texto-descricao {
    color: var(--color-neutral-700);
    font-size: var(--text-base);
    font-weight: var(--font-regular);
    line-height: var(--leading-relaxed);
    overflow-wrap: anywhere;
}

.texto-descricao :deep(p) {
    margin: 0 0 var(--padding-sm);
}

.texto-descricao :deep(p:last-child) {
    margin-bottom: 0;
}

.texto-descricao :deep(ul),
.texto-descricao :deep(ol) {
    margin: 0 0 var(--padding-sm);
    padding-left: var(--padding-lg);
}

.texto-descricao :deep(strong),
.texto-descricao :deep(b) {
    font-weight: var(--font-semibold);
}

.texto-descricao :deep(a) {
    color: var(--color-accent-500);
    text-decoration: underline;
    text-underline-offset: 2px;
}

.toggle-description {
    display: inline-flex;
    align-items: center;
    gap: var(--padding-xs);
    margin-top: var(--padding-md);
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--color-neutral-900);
    font: inherit;
    font-weight: var(--font-medium);
    cursor: pointer;
}

.toggle-description:hover {
    color: var(--color-accent-600);
}

.toggle-description:focus-visible {
    outline: 2px solid var(--color-accent-500);
    outline-offset: 4px;
}

.toggle-description-icon {
    width: 18px;
    height: 18px;
    transition: transform var(--transition-fast);
}

.toggle-description-icon.is-expanded {
    transform: rotate(180deg);
}

@media (prefers-reduced-motion: reduce) {
    .description-clip,
    .toggle-description-icon {
        transition: none;
    }
}
</style>
