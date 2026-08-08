<script setup lang="ts">
import MeuLugar from '@/assets/imgs/geral/meulugar.png'
import { Heart, Menu, X, ChevronDown } from '@lucide/vue';

const props = defineProps<{
  isMenuOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle-menu'): void
}>()

const handleClick = (): void => {
  emit('toggle-menu')
}
</script>

<template>
  <div class="navbar-container">

    <div class="navbar-logo">
      <div class="logo-icon">
        <img :src="MeuLugar" alt="Logo do portal imobiliário">
      </div>
    </div>

    <nav class="nav-desktop">

      <ul class="nav-menu">
        <li class="nav-item has-dropdown">
          <div class="nav-item-title">
            <span>Comprar</span>
            <ChevronDown class="icon-arrow" />
          </div>
          
          <div class="dropdown-menu">
            <ul class="dropdown-list">
              <li><a href="#" class="dropdown-link">Casas</a></li>
              <li><a href="#" class="dropdown-link">Apartamentos</a></li>
              <li><a href="#" class="dropdown-link">Terrenos</a></li>
              <li><a href="#" class="dropdown-link">Lançamentos</a></li>
            </ul>
          </div>
        </li>

        <li class="nav-item has-dropdown">
          <div class="nav-item-title">
            <span>Alugar</span>
            <ChevronDown class="icon-arrow" />
          </div>

          <div class="dropdown-menu">
            <ul class="dropdown-list">
              <li><a href="#" class="dropdown-link">Apartamentos</a></li>
              <li><a href="#" class="dropdown-link">Casas</a></li>
              <li><a href="#" class="dropdown-link">Casas em Condomínio</a></li>
            </ul>
          </div>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">Buscar imobiliárias</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Notícias</a>
        </li>
      </ul>
      
    </nav>

    <div class="actions-desktop">
      <button class="btn-icon" title="Favoritos">
        <Heart class="icon" />
        <span class="badge"></span>
      </button>

      <ul>
        <li class="nav-item">
          <a href="#" class="nav-link">Entrar</a>
        </li>
      </ul>
      <a href="#" class="btn-primary">Anunciar Imóvel</a>
    </div>

    <button class="hamburger-btn" @click="handleClick" aria-label="Abrir menu">
      <Menu v-if="!isMenuOpen" class="icon" />
      <X v-else class="icon" />
    </button>

  </div>
</template>

<style scoped>
/* Contêiner Principal */
.navbar-container {
  max-width: var(--max-width);
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--padding-xl)
}



.logo-icon img {
  max-width: 160px;
  display: block;
}

/* Navegação Desktop */
.nav-desktop {
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0; 
  height: 100%;
}

.nav-item {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

/* Links do Menu */
.nav-link,
.nav-item-title {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-neutral-700);
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 0.875rem;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.nav-item:hover .nav-link,
.nav-item:hover .nav-item-title {
  color: var(--color-neutral-900);
  background-color: var(--color-neutral-100);
}

.icon-arrow {
  width: 14px;
  height: 14px;
  color: var(--color-neutral-500);
  transition: transform var(--transition-normal);
}

.has-dropdown:hover .icon-arrow {
  transform: rotate(180deg);
  color: var(--color-accent-500);
}


.dropdown-menu {
  position: absolute;
  top: calc(100% - 12px);
  left: 50%;
  transform: translateX(-50%) translateY(10px) scale(0.95);
  min-width: 220px;
  

  background-color: var(--bg-glass-card);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid var(--border-glass-card);
  border-radius: var(--radius-xl);
  
  box-shadow: var(--shadow-hover);
  padding: 0.5rem;
  
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition-normal), transform var(--transition-normal), visibility var(--transition-normal);
  z-index: var(--z-dropdown);
  pointer-events: none;
}

/* Ponte invisível para garantir a passagem fluida do mouse */
.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -15px;
  left: 0;
  width: 100%;
  height: 15px;
}

.has-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0) scale(1);
}

.dropdown-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.dropdown-link {
  display: block;
  padding: 0.625rem 0.875rem;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-neutral-700);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.dropdown-link:hover {
  background-color: var(--color-neutral-0);
  /* color: var(--color-neutral-0); */
}

/* Ações Desktop */
.actions-desktop {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.actions-desktop ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.btn-icon {
  position: relative;
  padding: 0.5rem;
  background: transparent;
  border: none;
  color: var(--color-neutral-700);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-icon:hover {
  color: var(--color-accent-500);
  background-color: var(--color-neutral-100);
}

.icon {
  width: 20px;
  height: 20px;
}

.badge {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 8px;
  height: 8px;
  background-color: var(--color-accent-500);
  border: 2px solid var(--color-neutral-0);
  border-radius: var(--radius-full);
}

/* Botão Mobile */
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

/* Responsividade */
@media (max-width: 900px) {
  .nav-desktop,
  .actions-desktop {
    display: none;
  }

  .hamburger-btn {
    display: block;
  }
}
</style>





<!-- Estilo de design descontinuado -->
<!-- <style scoped>
/* Contêiner Principal */
.navbar-container {
  max-width: 1280px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
}

.logo-icon img {
  max-width: 170px;
  display: block;
}

/* Navegação Desktop */
.nav-desktop {
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0; 
  height: 100%;
}

.nav-item {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

/* Links & Títulos de Item do Menu */
.nav-link,
.nav-item-title {
  font-size: var(--text-base);
  font-weight: var(--font-regular);
  color: var(--color-neutral-700);
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0;
  transition: color var(--transition-fast);
  position: relative;

}

.nav-link::after,
.nav-item-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-accent-500);
  transition: width var(--transition-normal);
}

.nav-item:hover .nav-link,
.nav-item:hover .nav-item-title {
  color: var(--color-accent-500);
}

.nav-item:hover .nav-link::after,
.nav-item:hover .nav-item-title::after {
  width: 100%;
}


.icon-arrow {
  width: 16px;
  height: 16px;
  transition: transform var(--transition-normal);
}

.has-dropdown:hover .icon-arrow {
  transform: rotate(180deg);
}

/* Submenu / Dropdown */
.dropdown-menu {
  position: absolute;
  top: calc(100% - 10px);
  left: 70%;
  transform: translateX(-50%) translateY(8px);
  min-width: 200px;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  box-shadow: var( --shadow-sm);
  padding: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-normal);
  z-index: var(--z-dropdown);
}


.has-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.dropdown-link {
  display: block;
  padding: 8px;
  font-size: var(--text-sm);
  color: var(--color-neutral-700);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.dropdown-link:hover {
  background-color: var(--color-neutral-100);
  color: var(--color-accent-500);
}

/* Ações Desktop */
.actions-desktop {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.btn-icon {
  position: relative;
  padding: 0.625rem;
  background: transparent;
  border: none;
  color: var(--color-neutral-500);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-icon:hover {
  color: var(--color-accent-500);
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
  background-color: var(--color-accent-500);
  border: 2px solid var(--color-neutral-0);
  border-radius: var(--radius-full);
}

/* Botão Mobile */
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

/* Responsividade */
@media (max-width: 768px) {
  .nav-desktop,
  .actions-desktop {
    display: none;
  }

  .hamburger-btn {
    display: block;
  }
}
</style> -->