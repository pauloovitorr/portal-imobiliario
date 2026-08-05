<script setup lang="ts">
import { ref, reactive } from 'vue';

// filtros de finalidade
const tipoFinalidade = ref<'comprar' | 'aluguar' | 'temporada'>('comprar');

</script>


<template>
    <div class="main-geral-filtros">

        <div class="container-filtros">

            <div class="container-finalidade">
                <button type="button"
                    :class="['finalidade-item', { active: tipoFinalidade === 'comprar' }]">Comprar</button>
                <button type="button"
                    :class="['finalidade-item', { active: tipoFinalidade === 'aluguar' }]">Aluguel</button>
                <button type="button"
                    :class="['finalidade-item', { active: tipoFinalidade === 'temporada' }]">Temporada</button>
            </div>

            <div class="container-opcoes">
                <label for="">Olá</label>
                <input type="text">
                <label for="">Olá</label>
                <input type="text">
                <label for="">Olá</label>
                <input type="text">
            </div>

        </div>

    </div>
</template>


<style scoped>
/* Container com margem e centralização para sobrepor a Hero Image */
.main-geral-filtros {
    width: 100%;
    height: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-filtros {
    border: 1px solid blue;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding: var(--padding-lg);
}

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

</style>
