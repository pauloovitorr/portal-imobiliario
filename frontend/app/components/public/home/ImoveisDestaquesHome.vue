<script setup lang="ts">

</script>


<template>
    <section id="imoveis-destaque" class="imovel-destaque-container container-alinhado">

        <PublicTituloSecao titulo="Destaques" subtitulo="Encontre o Refúgio" detalhe="que você merece" link="" />

        <div class="imoveis-container">
            <div v-for="card in 8" :key="card" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-easing="ease-in-out">
                <PublicHomeCardImovel compacto />
            </div>
        </div>

    </section>


</template>


<style scoped>
.imoveis-container {
    width: 100%;
    /* border: 1px solid rgb(209, 255, 5); */
    /* height: 500px; */
    /* margin-top: 16px; */
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--padding-md);
}

.imoveis-container > div {
    display: grid;
    min-width: 0;
}

@media (max-width: 1100px) and (min-width: 641px) {
    .imoveis-container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .imoveis-container {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
</style>
