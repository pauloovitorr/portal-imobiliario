<script setup lang="ts">
import CardImovelDescricao from './CardImovelDescricao.vue';
import CardImovelImagem from './CardImovelImagem.vue';

withDefaults(defineProps<{
    compacto?: boolean;
    tipoImovel?: string;
    bairro?: string;
    localizacao?: string;
    area?: string;
    quartos?: string;
    suites?: string;
    vagas?: string;
    preco?: string;
    imagem?: string;
}>(), {
    compacto: false,
    tipoImovel: 'Casa à venda',
    bairro: 'Jardim América',
    localizacao: 'Presidente Prudente/SP',
    area: '462 m²',
    quartos: '4 dorms',
    suites: '4 suítes',
    vagas: '6 vagas',
    preco: 'R$ 18.000.000',
});
</script>

<template>
    <div class="card-imovel" :class="{ 'card-imovel-compacto': compacto }">
        <CardImovelImagem :imagem="imagem" :compacto="compacto" />
        <CardImovelDescricao
            :compacto="compacto"
            :tipo-imovel="tipoImovel"
            :bairro="bairro"
            :localizacao="localizacao"
            :area="area"
            :quartos="quartos"
            :suites="suites"
            :vagas="vagas"
            :preco="preco"
        />
    </div>
</template>

<style scoped>
.card-imovel {
    min-width: 0;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-xl);
    display: flex;
    flex-direction: column;
    background-color: var(--bg-surface);
    /* box-shadow: var(--shadow-sm); */
    overflow: hidden;
    transition:  var(--transition-normal);
}

.card-imovel:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-5px);
}

.card-imovel-compacto :deep(.container-imagem) {
    height: 160px;
}

@media (max-width: 700px) {
    .card-imovel :deep(.container-imagem) {
        height: 240px;
    }

    .card-imovel-compacto :deep(.container-imagem) {
        height: 160px;
    }
}
</style>
