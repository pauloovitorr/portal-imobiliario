<template>
    <div class="card-imovel-wrapper">
        <PublicFiltrosCardImagemImovel />
        <PublicFiltrosCardDescricaoImovel />
    </div>
</template>

<style scoped>
.card-imovel-wrapper {
    background-color: var(--bg-surface);
    border-radius: var(--radius-xl);
    border: 1px solid var(--border-color);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    display: flex;
    align-items: stretch;
    width: 100%;
    transition: box-shadow var(--transition-normal);
}

.card-imovel-wrapper:hover {
    box-shadow: var(--shadow-md);
}

.card-imovel-wrapper :deep(.container-imagem) {
    width: 42%;
    min-width: 42%;
    height: auto;
    min-height: 250px;
}

@media (max-width: 700px) {
    .card-imovel-wrapper {
        flex-direction: column;
    }

    .card-imovel-wrapper :deep(.container-imagem) {
        width: 100%;
        min-width: 100%;
        height: 240px;
        min-height: 0;
    }
}
</style>