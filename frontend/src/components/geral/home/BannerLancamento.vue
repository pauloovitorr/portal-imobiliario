<script setup lang="ts">
import BannerEmpreendimento from '@/assets/imgs/geral/empreendimento.png'
</script>


<template>
   
        <div class="container-banner-lancamento estilo-container">
            <img :src="BannerEmpreendimento" alt="Banner Empreendimento" loading="lazy">
        </div>
   
</template>


<style scoped>
.container-banner-lancamento {
    /* margin-top: 32px; */
    /* margin-bottom: 104px; */
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-banner-lancamento img {
    max-width: 100%;
    border-radius: var(--radius-xl);
    filter: brightness(.9);
}

@media (max-width: 575px){
    .container-banner-lancamento{
        display: none;
    }
}
</style>
