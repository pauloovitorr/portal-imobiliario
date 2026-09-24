<script setup lang="ts">
// Wrapper principal do card de imóvel para a página de listagem/filtros
</script>

<template>
    <div class="card-imovel-wrapper">
        <PublicFiltrosCardImagemImovel />
        <LazyPublicFiltrosCardDescricaoImovel />
    </div>
</template>

<style scoped>
.card-imovel-wrapper {
    background-color: var(--bg-surface);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-normal);
    display: flex;
    flex-direction: column;
    width: 100%;
    cursor: pointer;
}

.card-imovel-wrapper:hover {
    box-shadow: var(--shadow-hover);
    transform: translateY(-4px);
}
</style>