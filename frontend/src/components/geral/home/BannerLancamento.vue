<script setup lang="ts">
import BannerEmpreendimento from '@/assets/imgs/geral/empreendimento.png'
</script>


<template>
    <a href="">
        <div class="container-banner-lancamento estilo-container">
            <img :src="BannerEmpreendimento" alt="" srcset="">
        </div>
    </a>
</template>


<style scoped>
.container-banner-lancamento {
    margin-top: 104px;
    margin-bottom: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-banner-lancamento img {
    max-width: 100%;
    border-radius: var(--radius-xl);
    filter: brightness(.9);
}
</style>
