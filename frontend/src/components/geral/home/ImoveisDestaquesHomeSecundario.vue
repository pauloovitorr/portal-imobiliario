<script setup lang="ts">
import TituloSecao from '../TituloSecao.vue';
import CardImovel from './CardImovel.vue';


</script>


<template>
    <section class="imovel-destaque-container-secundario">

        <TituloSecao titulo="" subtitulo="Seleção de Alto Padrão" detalhe="para quem busca conforto" link="" />

        <div class="imoveis-container-secundario" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500"
            data-aos-easing="ease-in-out">
            <CardImovel />
            <CardImovel />
            <CardImovel />
        </div>

    </section>
</template>


<style scoped>
.imovel-destaque-container-secundario {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0px var(--padding-xl);
    padding-top: 16px;
    padding-bottom: 64px;
    /* border: 1px solid red; */
}



.imoveis-container-secundario {
    width: 100%;
    /* border: 1px solid rgb(209, 255, 5); */
    /* height: 500px; */
    /* margin-top: 16px; */
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 32px;
    row-gap: 32px
}

@media (max-width:768px) {
    .imoveis-container-secundario {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width:600px) {
    .imoveis-container-secundario {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
</style>
