<script setup lang="ts">

</script>


<template>
    <div class="card-imovel">
        <div class="container-imagem"></div>
        <div class="container-descricao"></div>
    </div>
</template>


<style scoped>
.card-imovel {
    /* height: 100%; */
    border: 1px solid rgb(27, 2, 26);
    border-radius: var(--radius-xl);
    display: flex;
    flex-direction: column;
}

.container-imagem {
    width: 100%;
    height: 50%;
    border: 1px solid red;
    border-radius: var(--radius-xl) var(--radius-xl) 0 0;
}



.container-descricao {
    width: 100%;
    height: 50%;
    border: 1px solid red;
    border-radius: 0 0 var(--radius-xl) var(--radius-xl);
}
</style>
