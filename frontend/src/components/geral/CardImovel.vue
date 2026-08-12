<script setup lang="ts">
import CardImovelDescricao from './CardImovelDescricao.vue';
import CardImovelImagem from './CardImovelImagem.vue';


</script>

<template>
    <div class="card-imovel">
       
        <CardImovelImagem/>
        <CardImovelDescricao/>
        
    </div>
</template>

<style scoped>
.card-imovel {
    border: 1px solid var(--border-color);
    border-radius: var(--radius-xl);
    display: flex;
    flex-direction: column;
    background-color: var(--bg-surface);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
}


</style>
