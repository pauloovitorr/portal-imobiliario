<script setup lang="ts"></script>


<template>


    <div class="container-banner-empreendimento estilo-container" data-aos="fade-up" data-aos-delay="50"
        data-aos-duration="500" data-aos-easing="ease-in-out">
        <NuxtImg src="/empreendimento2.png" alt="Banner de empreendimento" format="webp" loading="lazy" />
    </div>

</template>


<style scoped>
.container-banner-empreendimento {
    /* padding-top: 64px;
    padding-bottom: 64px; */
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-banner-empreendimento img {
    width: 100%;
    border-radius: var(--radius-xl);
    filter: brightness(.9);
}


@media (max-width: 575px) {
    .container-banner-empreendimento {
        display: none;
    }
}
</style>
