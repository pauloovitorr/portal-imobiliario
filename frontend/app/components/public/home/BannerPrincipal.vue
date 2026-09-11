<script setup lang="ts"></script>


<template>
    <div class="banner">
        <NuxtImg src="/banner.png" alt="Banner do portal"  format="webp" loading="lazy" />
    </div>
</template>



<style scoped>
.banner {
    width: 100%;
    height: calc(85vh - 80px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: var(--z-banner);
}

.banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
