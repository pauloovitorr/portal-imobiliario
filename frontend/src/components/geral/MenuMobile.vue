<script setup lang="ts">
import { ref } from 'vue';
import MeuLugar from '@/assets/imgs/geral/meulugar.png';
import { X, ChevronDown, Heart } from '@lucide/vue';

const props = defineProps<{
  isMenuOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close-menu'): void
}>()

const openSubmenu = ref<string | null>(null);

const toggleSubmenu = (menu: string): void => {
  openSubmenu.value = openSubmenu.value === menu ? null : menu;
}

const handleClose = (): void => {
  openSubmenu.value = null;
  emit('close-menu');
}
</script>

<template>
  <Transition name="slide-fade">
    <div v-if="isMenuOpen" class="menu-mobile-container">
      <div class="fundo-escuro" @click="handleClose"></div>

      <aside class="gaveta-mobile">
        <div class="gaveta-header">
          <div class="logo-icon">
            <img :src="MeuLugar" alt="Logo do portal imobiliário">
          </div>
          <button class="btn-fechar" @click="handleClose" aria-label="Fechar menu">
            <X class="icon" />
          </button>
        </div>

        <div class="gaveta-conteudo">
          <nav class="nav-mobile-menu">
            
            <div class="nav-mobile-item">
              <button 
                class="nav-mobile-trigger" 
                :class="{ 'is-open': openSubmenu === 'comprar' }"
                @click="toggleSubmenu('comprar')"
              >
                <span>Comprar</span>
                <ChevronDown class="icon-arrow" />
              </button>
              
              <div 
                class="accordion-wrapper" 
                :class="{ 'is-expanded': openSubmenu === 'comprar' }"
              >
                <div class="submenu-mobile">
                  <a href="#" class="submenu-link" @click="handleClose">Casas</a>
                  <a href="#" class="submenu-link" @click="handleClose">Apartamentos</a>
                  <a href="#" class="submenu-link" @click="handleClose">Terrenos</a>
                  <a href="#" class="submenu-link" @click="handleClose">Lançamentos</a>
                </div>
              </div>
            </div>

            <div class="nav-mobile-item">
              <button 
                class="nav-mobile-trigger" 
                :class="{ 'is-open': openSubmenu === 'alugar' }"
                @click="toggleSubmenu('alugar')"
              >
                <span>Alugar</span>
                <ChevronDown class="icon-arrow" />
              </button>

              <div 
                class="accordion-wrapper" 
                :class="{ 'is-expanded': openSubmenu === 'alugar' }"
              >
                <div class="submenu-mobile">
                  <a href="#" class="submenu-link" @click="handleClose">Apartamentos</a>
                  <a href="#" class="submenu-link" @click="handleClose">Casas</a>
                  <a href="#" class="submenu-link" @click="handleClose">Casas em Condomínio</a>
                </div>
              </div>
            </div>

            <a href="#" class="nav-mobile-link" @click="handleClose">Buscar imobiliárias</a>
            <a href="#" class="nav-mobile-link" @click="handleClose">Notícias</a>
            <a href="#" class="nav-mobile-link fav-link" @click="handleClose">
              <span>Favoritos</span>
              <Heart class="icon-sm" />
            </a>
          </nav>

          <div class="acoes-mobile">
            <a href="#" class="btn-secondary" @click="handleClose">Entrar</a>
            <a href="#" class="btn-primary" @click="handleClose">Anunciar Imóvel</a>
          </div>
        </div>
      </aside>
    </div>
  </Transition>
</template>

<style scoped>
/* Contêiner Geral da Gaveta Mobile */
.menu-mobile-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: var(--z-modal);
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
}

.logo-icon img {
  max-width: 150px;
  display: block;
}

/* Fundo Escurecido / Overlay */
.fundo-escuro {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(31, 23, 26, 0.4);
  backdrop-filter: blur(4px);
}

/* Gaveta Lateral (Drawer) */
.gaveta-mobile {
  position: relative;
  z-index: calc(var(--z-modal) + 1);
  width: 85vw;
  max-width: 340px;
  height: 100%;
  background-color: var(--bg-surface);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
}

/* Cabeçalho */
.gaveta-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1rem;
  flex-shrink: 0;
}

.btn-fechar {
  background: transparent;
  border: none;
  color: var(--color-neutral-700);
  cursor: pointer;
  padding: var(--padding-btn-sm);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--transition-fast);
}

.btn-fechar:hover {
  background-color: var(--color-neutral-100);
}

.icon {
  width: 24px;
  height: 24px;
}

.icon-sm {
  width: 18px;
  height: 18px;
}

/* Conteúdo Rolável */
.gaveta-conteudo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow-y: auto;
}

/* Links & Menus Mobile */
.nav-mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.nav-mobile-link,
.nav-mobile-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1rem;
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--color-neutral-700);
  text-decoration: none;
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  box-sizing: border-box;
  transition: all var(--transition-fast);
}

.nav-mobile-link:hover,
.nav-mobile-trigger:hover {
  background-color: var(--color-neutral-100);
  color: var(--color-neutral-900);
}

.nav-mobile-link:active,
.nav-mobile-trigger:active {
  transform: scale(0.98);
}

.nav-mobile-trigger.is-open {
  color: var(--color-accent-500);
  background-color: var(--color-neutral-100);
  font-weight: var(--font-semibold);
}

/* Rotação do Ícone de Seta */
.icon-arrow {
  width: 18px;
  height: 18px;
  transition: transform var(--transition-normal);
}

.nav-mobile-trigger.is-open .icon-arrow {
  transform: rotate(180deg);
}

/* --- ANIMAÇÃO DO ACORDEÃO --- */
.accordion-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--transition-normal);
}

.accordion-wrapper.is-expanded {
  grid-template-rows: 1fr;
}

.submenu-mobile {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-left: 1rem;
  transition: opacity var(--transition-fast);
  opacity: 0;
}

.accordion-wrapper.is-expanded .submenu-mobile {
  opacity: 1;
  padding-top: 0.25rem;
  padding-bottom: 0.5rem;
}

/* Links Internos do Submenu */
.submenu-link {
  display: block;
  padding: 0.625rem 0.875rem;
  font-size: var(--text-sm);
  color: var(--color-neutral-500);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.submenu-link:hover {
  color: var(--color-accent-500);
  background-color: var(--color-neutral-100);
}

/* Favoritos com Alinhamento */
.fav-link {
  justify-content: space-between;
}

/* Rodapé */
.acoes-mobile {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-shrink: 0;
}

@media (max-width: 480px) {
  .gaveta-mobile {
    width: 100vw;
    max-width: 100vw;
  }
}

/* Transições da Gaveta Mobile */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity var(--transition-normal);
}

.slide-fade-enter-active .gaveta-mobile,
.slide-fade-leave-active .gaveta-mobile {
  transition: transform var(--transition-bounce);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-from .gaveta-mobile,
.slide-fade-leave-to .gaveta-mobile {
  transform: translateX(100%);
}
</style>