<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;

const slugParts = slug.split('-');
const idImovel = slugParts[slugParts.length - 1];

</script>



<template>
    <section class="section-detalhes-imovel">
        <div class="container-detalhes-imovel">
            <PublicImovelBreadcrumbs />
            <PublicImovelGaleriaImagens />

            <section class="section-detalhes-descricao-form">
                <section class="section-descricao">
                    <PublicImovelDescricaoImovel />
                </section>
                <section class="section-form">
                    <PublicImovelFormContato/>
                </section>
            </section>

        </div>

    </section>
</template>


<style scoped>
.section-detalhes-imovel {
    min-height: calc(100vh - 80px);
    background-color: var(--color-neutral-0);
}

.container-detalhes-imovel {
    max-width: var(--max-width);
    margin: 0 auto;
    /* border: 1px solid red; */
    padding: 64px var(--padding-xl);
}

.section-detalhes-descricao-form {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
    margin-top: 32px;
}

.section-descricao {
    grid-column: span 3;
    /* border: 1px solid blue; */
}

.section-form {
    grid-column: span 1;
    /* border: 1px solid green; */
}
</style>
