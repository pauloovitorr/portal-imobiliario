<script setup lang="ts">

</script>


<template>
    <section class="section-listagem">

        <div class="container-filtros">
            <h1>Filtros Principais</h1>
        </div>

        <div class="container-info-imoveis">
            <span class="qtd-imoveis">117 acomodações</span>
        </div>

        <div class="layout-listagem">
            <div class="layout-coluna listagem-imoveis">

                <div class="lista-cards-imoveis">
                    <PublicFiltrosCardImovel v-for="i in 10" :key="i" />
                </div>
            </div>

            <div class="layout-coluna">
                <iframe class="mapa-imoveis"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14784.145827369774!2d-51.425188779830954!3d-22.124585657356697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f4134d876285%3A0x2be9f94d9b275ff5!2sHospital%20Iamada!5e0!3m2!1spt-BR!2sbr!4v1789600111867!5m2!1spt-BR!2sbr"
                    loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            </div>
        </div>
    </section>
</template>


<style scoped>
.section-listagem {
    min-height: calc(100vh - 80px);
    background-color: var( --color-neutral-0);
}

.container-filtros {
    /* border: 1px solid red; */
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-app);
}


.container-info-imoveis {
    width: 100%;
    height: 80px;
    /* border: 1px solid red; */
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0px var(--padding-xl);
    display: flex;
    align-items: center;
}

.layout-listagem {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    min-height: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0px var(--padding-xl);
    padding-bottom: 64px;
    /* border: 1px solid red; */
    position: relative;
}

/* .listagem-imoveis{
    background-color: red;
} */

.qtd-imoveis {
    color: var(--color-neutral-900);
    font-size: var(--text-xl);
    font-weight: var(--font-medium);
    line-height: var(--leading-tight);
    /* border: 1px solid red; */
}

.lista-cards-imoveis {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}






/* Coluna 2 Mapa */

.mapa-imoveis {
    width: 100%;
    height: 500px;
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-neutral-200);
    box-shadow: var(--shadow-sm);
    position: sticky;
    top: 16px
}

.layout-coluna {
    width: 50%;
    min-height: 500px;
    /* border: 1px solid red; */
}
</style>
