<script setup lang="ts">
import { ref, reactive } from 'vue';

// filtros de finalidade
const tipoFinalidade = ref<'comprar' | 'alugar' | 'temporada'>('comprar');
</script>


<template>
    <div class="container-finalidade">
        <button type="button" :class="['finalidade-item', { active: tipoFinalidade === 'comprar' }]"
            @click="tipoFinalidade = 'comprar'">Comprar</button>
        <button type="button" :class="['finalidade-item', { active: tipoFinalidade === 'alugar' }]"
            @click="tipoFinalidade = 'alugar'">Aluguel</button>
        <button type="button" :class="['finalidade-item', { active: tipoFinalidade === 'temporada' }]"
            @click="tipoFinalidade = 'temporada'">Temporada</button>
    </div>
</template>


<style scoped>
.container-finalidade {
    display: flex;
    align-self: flex-start;
    padding: var(--padding-2xs);
    background-color: var(--bg-glass-segmented);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: var(--radius-full);
    border: 1px solid var(--border-glass-segmented);
    box-shadow: var(--shadow-sm);
}

.finalidade-item {
    border: none;
    background: transparent;
    padding: var(--padding-xs) var(--padding-lg);
    font-family: var(--font-primary);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    color: var(--color-neutral-700);
    border-radius: var(--radius-full);
    cursor: pointer;
    transition: all var(--transition-normal);
}


.finalidade-item.active {
    background: var(--color-neutral-0);
    color: var(--color-neutral-900);
    font-weight: var(--font-semibold);
    box-shadow: var(--shadow-md);
}

@media (max-width:330px){
.container-finalidade{
    flex-direction: column;
    width: 100%;
    border-radius: var(--radius-xl);
}
}
</style>
