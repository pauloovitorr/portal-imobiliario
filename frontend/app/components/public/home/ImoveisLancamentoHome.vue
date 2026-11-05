<script setup lang="ts">
import { MapPinHouse } from '@lucide/vue';
import TituloSecao from '../TituloSecao.vue';
import CardImovelLancamento from './CardImovelLancamento.vue';


</script>

<template>
    <section class="container-lancamentos estilo-container container-alinhado" data-aos="fade-up" data-aos-delay="50"
        data-aos-duration="500" data-aos-easing="ease-in-out">
        <PublicTituloSecao titulo="Lançamentos" subtitulo="Seja um dos primeiros" detalhe="conheça os novos projetos"
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
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--padding-md);
}

@media (max-width: 1100px) and (min-width: 641px) {
    .imoveis-container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .imoveis-container {
        grid-template-columns: minmax(0, 1fr);
    }
}
</style>