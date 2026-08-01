<script setup lang="ts">
import MeuLugar from '@/assets/imgs/geral/meulugar.png'
import { X } from '@lucide/vue';

const props = defineProps<{
  isMenuOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close-menu'): void
}>()

const handleClose = (): void => {
  emit('close-menu')
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
            <X class="icone-fechar" />
          </button>
        </div>

        <div class="gaveta-conteudo">
          <nav class="links-mobile">
            <a href="#" class="link-mobile" @click="handleClose">Comprar</a>
            <a href="#" class="link-mobile" @click="handleClose">Alugar</a>
            <a href="#" class="link-mobile" @click="handleClose">Buscar imobiliárias</a>
            <a href="#" class="link-mobile" @click="handleClose">Notícias</a>
            <a href="#" class="link-mobile" @click="handleClose">Favoritos</a>
          </nav>

          <div class="acoes-mobile">
            <a href="#" class="btn-secondary">Entrar</a>
            <a href="#" class="btn-primary">Anunciar Imóvel</a>
          </div>
        </div>
      </aside>
    </div>
  </Transition>
</template>

<style scoped>
/* Container Principal do Menu Mobile (Fixado sem estourar tela) */
.menu-mobile-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: var(--z-modal);
  display: flex;
  justify-content: flex-end;
  overflow: hidden; /* Evita qualquer barra de rolagem indesejada na tela principal */
}

.logo-icon img {
  max-width: 170px;
}

/* Fundo escurecido / Overlay */
.fundo-escuro {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(31, 23, 26, 0.4); /* Baseado no seu neutral-900 com opacidade */
  backdrop-filter: blur(4px);
  transition: opacity var(--transition-normal);
}

/* Gaveta Lateral (Drawer) */
.gaveta-mobile {
  position: relative;
  z-index: calc(var(--z-modal) + 1);
  width: 80vw;
  max-width: 320px;
  height: 100%;
  background-color: var(--color-neutral-0);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;
}

/* Cabeçalho da Gaveta */
.gaveta-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 16px;
  flex-shrink: 0;
}

/* Botão Fechar */
.btn-fechar {
  background: transparent;
  border: none;
  color: var(--color-neutral-700);
  cursor: pointer;
  padding: 8px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--transition-fast);
}

.btn-fechar:hover {
  background-color: var(--color-neutral-100);
}

.icone-fechar {
  width: 24px;
  height: 24px;
}

/* Container Interno Rolável (Para telas pequenas na vertical) */
.gaveta-conteudo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 8px;

  /* Esconde barras de rolagem nativas para manter o visual limpo */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE e Edge */
}

.gaveta-conteudo::-webkit-scrollbar {
  display: none; /* Chrome, Safari e Opera */
}

/* Links do Menu Mobile */
.links-mobile {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.link-mobile {
  display: block;
  padding: 12px 16px;
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--color-neutral-700);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.link-mobile:hover {
  background-color: var(--color-neutral-100);
  color: var(--color-accent-500);
}

/* Ações no Rodapé da Gaveta */
.acoes-mobile {
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
}



/* Dispositivos extremamente pequenos */
@media (max-width: 480px) {
  .gaveta-mobile {
    width: 100vw;
    max-width: 100vw;
  }
}

/* --- ANIMAÇÕES COM VUE TRANSITION --- */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all var(--transition-bounce);
}

.slide-fade-enter-active .gaveta-mobile,
.slide-fade-leave-active .gaveta-mobile {
  transition: transform var(--transition-normal);
}

.slide-fade-enter-active .fundo-escuro,
.slide-fade-leave-active .fundo-escuro {
  transition: opacity var(--transition-normal);
}

/* Estado Inicial / Final */
.slide-fade-enter-from .fundo-escuro,
.slide-fade-leave-to .fundo-escuro {
  opacity: 0;
}

.slide-fade-enter-from .gaveta-mobile,
.slide-fade-leave-to .gaveta-mobile {
  transform: translateX(100%);
}
</style>