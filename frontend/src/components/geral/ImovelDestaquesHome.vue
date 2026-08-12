<script setup lang="ts">
import CardImovel from './CardImovel.vue';
import TituloSecao from './TituloSecao.vue';


</script>


<template>
    <section class="imovel-destaque-container">

         <TituloSecao
        titulo="Imóveis em Destaque"
        subtitulo="Acabaram de chegar"
        detalhe="e merecem toda a sua atenção"
    />

        <div class="imoveis-container" 
        data-aos="fade-up" 
        data-aos-delay="50" 
        data-aos-duration="500"
        data-aos-easing="ease-in-out">
            <CardImovel />
            <CardImovel />
            <CardImovel />
            <CardImovel />
            <CardImovel />
            <CardImovel />
        </div>

    </section>
</template>


<style scoped>
.imovel-destaque-container {
    max-width: var(--max-width);
    margin: 0 auto;
    margin-top: 32px;
    margin-bottom: 32px;
    /* border: 1px solid red; */
    padding: var(--padding-xl)
}



.imoveis-container {
    width: 100%;
    /* border: 1px solid rgb(209, 255, 5); */
    /* height: 500px; */
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 32px;
    row-gap: 32px
}
</style>
