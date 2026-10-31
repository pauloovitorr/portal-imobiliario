<script setup lang="ts">

</script>


<template>
    <div class="container-descricao">
        <PublicImovelContainerTituloDescricao />
        <PublicImovelCaracteristicas />
        <PublicImovelDescricao />
        <div class="secao-info-adicional">
            <PublicImovelLocalizacaoImovel />
        </div>
        <div class="secao-info-adicional">
            <PublicImovelPergunteAnunciante />
        </div>
    </div>
</template>


<style scoped>
.container-descricao {
    width: 97%;
}

.secao-info-adicional {
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid var(--border-color);
}
</style>
