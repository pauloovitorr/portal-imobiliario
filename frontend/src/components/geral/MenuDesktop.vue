<script setup lang="ts">
import MeuLugar from '@/assets/imgs/geral/meulugar.png'
import { Heart, Menu, X, ChevronDown, ChevronUp } from '@lucide/vue';


const props = defineProps<{
    isMenuOpen: boolean
}>()


// Eventos que o componente pode emitir para o pai
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
            <ul class="nav-opcoes-menu">
                <li class="menu-com-opcoes">
                    <span>Comprar</span>
                    <ChevronDown class="icone-seta seta-baixo" />
                    <ChevronUp class="icone-seta seta-cima" />
                </li>

                <li class="menu-com-opcoes">
                    <span>Alugar</span>
                    <ChevronDown class="icone-seta seta-baixo" />
                    <ChevronUp class="icone-seta seta-cima" />
                </li>

                <li>Buscar imobiliárias</li>
                <a href="#" class="nav-link">Notícias</a>
            </ul>
        </nav>

        <div class="actions-desktop">
            <button class="btn-icon" title="Favoritos">
                <Heart class="icon" />
                <span class="badge"></span>
            </button>

            <a href="#" class="nav-link">Entrar</a>
            <a href="#" class="btn-primary">Anunciar Imóvel</a>
        </div>

        <button class="hamburger-btn" @click="handleClick" aria-label="Abrir menu">
            <Menu v-if="!isMenuOpen" class="icon" />
            <X v-else class="icon" />
        </button>

    </div>
</template>


<style scoped>
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
.nav-desktop ul {
    display: flex;
    align-items: center;
    gap: 32px;
    list-style: none;

}


.nav-link,
.nav-desktop ul li {
    font-size: var(--text-base);
    font-weight: var(--font-regular);
    color: var(--color-neutral-700);
    text-decoration: none;
    transition: color var(--transition-normal);
    position: relative;
}

.nav-link::after,
.nav-opcoes-menu li::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0px;
    height: 1px;
    background-color: var(--color-accent-600);
    transition: var(--transition-normal);
}

.nav-link:hover,
.nav-opcoes-menu li:hover {
    color: var(--color-accent-600);
}

.nav-link:hover::after,
.nav-opcoes-menu li:hover::after {
    width: 100%;
}


.menu-com-opcoes {
    display: flex;
    align-items: center;
    gap: 2px
}

.menu-com-opcoes .icone-seta {
    width: 16px;
    height: 16px;
    transition: var(--transition-normal);
}

.menu-com-opcoes .seta-cima {
    display: none;
}

.menu-com-opcoes:hover {

    .seta-baixo {
        display: none;
    }

    .seta-cima {
        display: block;
    }
}

/* Ações Desktop */
.actions-desktop {
    display: flex;
    align-items: center;
    gap: 1.25rem;
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
    transition: all var(--transition-normal);
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
    width: 4px;
    height: 4px;
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
