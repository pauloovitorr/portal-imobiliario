<script setup lang="ts">
import { ref } from 'vue'
import MenuDesktop from './MenuDesktop.vue';
import MenuMobile from './MenuMobile.vue';


// Controle do estado do menu mobile
const isMenuOpen = ref<boolean>(false)

const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="navbar-header">
    <MenuDesktop :isMenuOpen="isMenuOpen" @toggle-menu="toggleMenu" />
    <MenuMobile :isMenuOpen="isMenuOpen" @close-menu="toggleMenu" />
  </header>
</template>

<style scoped>

/* Header Fixo com efeito Blur usando Variáveis */
.navbar-header {
  background-color: var(--color-neutral-0);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  position: relative; /* Ou position: sticky / fixed dependendo do layout */
  z-index: var(--z-fixed);
}

/* .navbar-header {
  position: fixed;
  left: 50%;
  top: 12px;
  transform: translateX(-50%);
  background-color: var(--bg-glass-segmented);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: var(--radius-full);
  border: 1px solid var(--border-glass-segmented);
  box-shadow: var(--shadow-md);
  z-index: var(--z-fixed);
  width: 96%;
} */



/* Botão Hambúrguer Mobile */
.hamburger-btn {
  display: none;
  background: transparent;
  border: none;
  color: var(--color-neutral-700);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--radius-md);
}

.hamburger-btn:hover {
  background-color: var(--color-neutral-100);
}



@media (max-width: 768px) {
  .navbar-container{
    padding: 0 16px;
  }
}

</style>