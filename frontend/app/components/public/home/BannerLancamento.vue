<script setup lang="ts">
</script>


<template>

    <div class="container-banner-lancamento estilo-container" data-aos="fade-up" data-aos-delay="50"
        data-aos-duration="500" data-aos-easing="ease-in-out">
        <NuxtImg src="/empreendimento.png" alt="Banner Empreendimento" format="webp" loading="lazy" />
    </div>

</template>


<style scoped>
.container-banner-lancamento {
    /* margin-top: 32px; */
    /* margin-bottom: 104px; */
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-banner-lancamento img {
    width: 100%;
    border-radius: var(--radius-xl);
    filter: brightness(.9);
}

@media (max-width: 575px) {
    .container-banner-lancamento {
        display: none;
    }
}
</style>
