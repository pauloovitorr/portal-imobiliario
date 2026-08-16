<script setup lang="ts">
import BannerEmpreendimento from '@/assets/imgs/geral/empreendimento.png'
</script>


<template>
    <div class="container-banner-empreendimento estilo-container">
        <img :src="BannerEmpreendimento" alt="" srcset="">
    </div>
</template>


<style scoped>

.container-banner-empreendimento{
    margin-top: 32px;
    margin-bottom: 32px;
}

.container-banner-empreendimento img{
    max-width: 100%;
    border-radius: var(--radius-xl);
    filter: brightness(.9);
}

</style>
