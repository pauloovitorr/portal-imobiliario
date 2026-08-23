<script setup lang="ts">
import Footer from '@/components/geral/Footer.vue';
import NavBar from '@/components/geral/NavBar.vue';

</script>


<template>
    <div class="layout-guest">
        <NavBar/>
        <main class="content">
            <RouterView />
        </main>
        <Footer/>
    </div>
</template>


<style scoped></style>
