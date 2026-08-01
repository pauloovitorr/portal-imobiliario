<script setup lang="ts">
import NavBar from '@/components/geral/NavBar.vue';


</script>


<template>
    <div class="layout-guest">
        <NavBar/>
        <main class="content">
            <RouterView />
        </main>
    </div>
</template>


<style scoped></style>
