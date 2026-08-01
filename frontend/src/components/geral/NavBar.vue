<script setup lang="ts">
import { ref } from 'vue'
import { Heart } from '@lucide/vue';
import MeuLugar from '@/assets/imgs/geral/meulugar.png'

// Controle do estado do menu mobile
const isMenuOpen = ref<boolean>(false)

const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="navbar-header">
    <div class="navbar-container">

      <div class="navbar-logo">
        <div class="logo-icon">
          <img v-bind:src="MeuLugar" alt="" srcset="">
        </div>
      </div>

      <nav class="nav-desktop">
        <a href="#" class="nav-link">Comprar</a>
        <a href="#" class="nav-link">Alugar</a>
        <a href="#" class="nav-link">Buscar imobiliárias</a>
        <a href="#" class="nav-link">Notícias</a>
      </nav>

      <div class="actions-desktop">
        <button class="btn-icon" title="Favoritos">
          <Heart class="icon" />
          <span class="badge"></span>
        </button>

        <a href="#" class="nav-link">Entrar</a>
        <a href="#" class="btn-primary">Anunciar Imóvel</a>
      </div>

      <button class="hamburger-btn" @click="toggleMenu" aria-label="Abrir menu">
        <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

    </div>

    <div v-show="isMenuOpen" class="nav-mobile">
      <a href="#" class="mobile-link">Comprar</a>
      <a href="#" class="mobile-link">Alugar</a>
      <a href="#" class="mobile-link">Buscar imobiliárias</a>
      <a href="#" class="mobile-link">Notícias</a>
      <a href="#" class="mobile-link">Favoritos</a>

      <div class="mobile-actions">
        <a href="#" class="btn-secondary">Entrar</a>
        <a href="#" class="btn-primary full-width">Anunciar Imóvel</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Reset básico para o componente */
* {
  box-sizing: border-box;
}

/* Header Fixo com efeito Blur usando Variáveis */
.navbar-header {
  background-color: var(--color-neutral-0);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
}

.navbar-container {
  max-width: 1280px;
  margin: 0 auto;
  /* padding: 0 1rem; */
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
/* .navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
} */

.logo-icon img {
  max-width: 170px;
}

.logo-text {
  font-size: var(--text-xl);
  font-weight: var(--font-extrabold);
  color: var(--color-primary-900);
  letter-spacing: -0.025em;
}

.logo-text span {
  color: var(--color-accent-500);
}

/* Links Desktop */
.nav-desktop {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-size: var(--text-base);
  font-weight: var(--font-regular);
  color: var(--color-neutral-700);
  text-decoration: none;
  transition: color var(--transition-fast);
  position: relative;
}

.nav-link::after{
  content: '';
  position: absolute;
  bottom: 2px;
  left: 0px;
  width: 0px;
  height: 1px;
  background-color: var(--color-accent-600);
  transition: var(--transition-fast);
}

.nav-link:hover {
  color: var(--color-accent-600);
}

.nav-link:hover::after {
  width: 100%;
}

/* Ações Desktop */
.actions-desktop {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

/* Botões Globais */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1.25rem;
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--color-neutral-0);
  background-color: var(--color-accent-500);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background-color: var(--color-accent-600);
  box-shadow: var(--shadow-md);
}

.btn-primary:active {
  transform: scale(0.98);
}

.btn-secondary {
  display: block;
  text-align: center;
  padding: 0.625rem 1rem;
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--color-neutral-700);
  border: 1px solid var(--color-neutral-300);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.btn-secondary:hover {
  background-color: var(--color-neutral-100);
  color: var(--color-neutral-900);
}

/* Ícone de Favoritos */
.btn-icon {
  position: relative;
  padding: 0.625rem;
  background: transparent;
  border: none;
  color: var(--color-neutral-500);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-icon:hover {
  color: var(--color-accent-600);
  background-color: var(--color-neutral-100);
}

.icon {
  width: 24px;
  height: 24px;
}

.badge {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 8px;
  height: 8px;
  background-color: var(--color-accent-600);
  border: 2px solid var(--color-neutral-0);
  border-radius: var(--radius-full);
}

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

/* Menu Mobile */
.nav-mobile {
  display: none;
  border-top: 1px solid var(--border-color);
  background-color: var(--bg-surface);
  padding: 1rem;
}

.mobile-link {
  display: block;
  padding: 0.75rem 1rem;
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--color-neutral-700);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.mobile-link:hover {
  background-color: var(--color-primary-50);
  color: var(--color-primary-600);
}

.mobile-actions {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.full-width {
  width: 100%;
}

/* Media Queries para Responsividade */
@media (max-width: 768px) {

  .nav-desktop,
  .actions-desktop {
    display: none;
  }

  .hamburger-btn {
    display: block;
  }

  .nav-mobile {
    display: flex;
    flex-direction: column;
  }
}
</style>