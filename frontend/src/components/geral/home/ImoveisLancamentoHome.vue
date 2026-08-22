<script setup lang="ts">
import { MapPinHouse } from '@lucide/vue';
import TituloSecao from '../TituloSecao.vue';
import CardImovelLancamento from './CardImovelLancamento.vue';


</script>

<template>
    <section class="container-lancamentos  estilo-container" data-aos="fade-up" data-aos-delay="50"
        data-aos-duration="500" data-aos-easing="ease-in-out">
        <TituloSecao titulo="Lançamentos" subtitulo="Seja um dos primeiros" detalhe="conheça os novos projetos"
            link="" />

        <div class="imoveis-container">
            <CardImovelLancamento />
        </div>
    </section>
</template>

<style scoped>
/* .container-lancamentos {
    margin-top: 80px;
    margin-bottom: 80px;
    border: 1px solid red;
} */

.imoveis-container {
    width: 100%;
    /* margin-top: 16px; */
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 32px;
    row-gap: 32px;
}
</style>