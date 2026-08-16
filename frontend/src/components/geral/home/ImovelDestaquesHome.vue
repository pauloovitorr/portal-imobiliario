<script setup lang="ts">
import CardImovel from './CardImovel.vue';
import TituloSecao from '../TituloSecao.vue';


</script>


<template>
    <section class="imovel-destaque-container estilo-container">

        <TituloSecao titulo="Os Mais Desejados" subtitulo="Encontre o Seu Refúgio"
            detalhe="com todo o espaço e conforto que você merece" link="" />

        <div class="imoveis-container" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500"
            data-aos-easing="ease-in-out">
            <CardImovel />
            <CardImovel />
            <CardImovel />
        </div>

    </section>



    <section class="imovel-destaque-container estilo-container">

        <TituloSecao titulo="Exclusividade & Requinte" subtitulo="Seleção de Alto Padrão"
            detalhe="para quem busca o extraordinário" link="" />

        <div class="imoveis-container" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500"
            data-aos-easing="ease-in-out">
            <CardImovel />
            <CardImovel />
            <CardImovel />
        </div>

    </section>
</template>


<style scoped>
/* .imovel-destaque-container {
    max-width: var(--max-width);
    margin: 0 auto;
    margin-top: 32px;
    margin-bottom: 32px;
} */



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

@media (max-width:768px) {
    .imoveis-container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width:600px) {
    .imoveis-container {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
</style>
