<script setup lang="ts">
import BannerEmpreendimento from '@/components/geral/home/BannerEmpreendimento.vue';
import BannerLancamento from '@/components/geral/home/BannerLancamento.vue';
import CallAction from '@/components/geral/home/CallAction.vue';
import Estatisticas from '@/components/geral/home/Estatisticas.vue';
import Hero from '@/components/geral/home/Hero.vue';
import ImoveisDestaquesHome from '@/components/geral/home/ImoveisDestaquesHome.vue';
import ImoveisDestaquesHomeSecundario from '@/components/geral/home/ImoveisDestaquesHomeSecundario.vue';
import ImoveisLancamentoHome from '@/components/geral/home/ImoveisLancamentoHome.vue';





</script>


<template>
    <Hero />
    <ImoveisDestaquesHome/>
    <!-- <ImoveisDestaquesHomeSecundario/> -->
    <BannerEmpreendimento />
    <ImoveisLancamentoHome/>
    <BannerLancamento />
    <Estatisticas/>
    <CallAction />
</template>


<style scoped>

</style>
