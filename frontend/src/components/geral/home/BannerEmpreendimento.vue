<script setup lang="ts">
import BannerEmpreendimento from '@/assets/imgs/geral/empreendimento.png'
import TituloSecao from '../TituloSecao.vue';
</script>


<template>

    
        <div class="container-banner-empreendimento estilo-container">
            <img :src="BannerEmpreendimento" alt="Banner de empreendimento" 
            loading="lazy">
        </div>
   
</template>


<style scoped>
.container-banner-empreendimento {
    /* padding-top: 64px;
    padding-bottom: 64px; */
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-banner-empreendimento img {
    max-width: 100%;
    border-radius: var(--radius-xl);
    filter: brightness(.9);
}


@media (max-width: 575px){
    .container-banner-empreendimento{
        display: none;
    }
}

</style>
