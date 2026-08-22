<script setup lang="ts">
import BannerImg from '@/assets/imgs/geral/1.png';
</script>


<template>
    <div class="banner">
        <img :src="BannerImg" alt="Banner" loading="lazy" />
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
