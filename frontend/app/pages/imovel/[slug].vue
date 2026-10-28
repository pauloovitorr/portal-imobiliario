<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;

const slugParts = slug.split('-');
const idImovel = slugParts[slugParts.length - 1];

</script>



<template>
    <section class="section-detalhes-imovel">
        <div class="container-detalhes-imovel container-alinhado">
            <PublicImovelBreadcrumbs />
            <PublicImovelGaleriaImagens />

            <section class="section-detalhes-descricao-form">
                <section class="section-descricao">
                    <PublicImovelInfosImovel />
                </section>
                <section class="section-form">
                    <PublicImovelFormContato/>
                </section>
            </section>

            <section class="secao-imoveis-similares" aria-label="Imóveis novos similares">
                <PublicImovelImoveisSimilares />
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
    /* border: 1px solid red; */
    padding-top: 32px;
    padding-bottom: 64px;
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

.secao-imoveis-similares {
    width: 100%;
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid var(--border-color);
}

@media (max-width: 900px) {
    .section-detalhes-descricao-form {
        grid-template-columns: minmax(0, 1fr);
    }

    .section-descricao,
    .section-form {
        grid-column: 1 / -1;
    }
}
</style>
