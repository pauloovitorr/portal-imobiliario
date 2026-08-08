<script setup lang="ts">
import BannerPrincipal from './BannerPrincipal.vue';
import Excluir from './Excluir.vue';
import PesquisaPrincipal from './PesquisaPrincipal.vue';

</script>


<template>
    <div class="container-hero">
        <BannerPrincipal />
        <PesquisaPrincipal />
         <!-- <Excluir /> -->
    </div>
</template>

<style scoped>
.container-hero {
    width: 100%;
    height: calc(85vh - 80px);
    position: relative;
    /* border: 1px solid blue; */
}
</style>
