<script setup lang="ts">
import { Heart, Share } from '@lucide/vue'

const salvo = ref(false)
</script>


<template>
    <div class="cabecalho-imovel">
        <nav class="breadcrumb-imovel" aria-label="Navegação estrutural">
            <ol class="breadcrumb-lista">
                <li class="breadcrumb-item">
                    <span>Apartamento à venda</span>
                </li>
                <li class="breadcrumb-item">
                    <span aria-hidden="true">›</span>
                    <span>SP</span>
                </li>
                <li class="breadcrumb-item">
                    <span aria-hidden="true">›</span>
                    <span>Presidente Prudente</span>
                </li>
                <li class="breadcrumb-item breadcrumb-localizacao">
                    <span aria-hidden="true">›</span>
                    <span>Jardim América</span>
                </li>
            </ol>
        </nav>

        <div class="acoes-imovel">
            <button class="btn-compartilhar" type="button" aria-label="Compartilhar imóvel">
                <Share aria-hidden="true" />
                <span>Compartilhar</span>
            </button>
            <button class="btn-salvar" :class="{ 'esta-salvo': salvo }" type="button"
                :aria-label="salvo ? 'Remover imóvel dos salvos' : 'Salvar imóvel'" :aria-pressed="salvo"
                @click="salvo = !salvo">
                <Heart :fill="salvo ? 'currentColor' : 'none'" aria-hidden="true" />
            </button>
        </div>
    </div>
</template>


<style scoped>
.cabecalho-imovel {
    display: flex;
    min-width: 0;
    align-items: center;
    justify-content: space-between;
    gap: var(--padding-md);
    margin-bottom: 16px;
}

.breadcrumb-imovel {
    min-width: 0;
    flex: 1;
    color: var(--color-neutral-500, #786c72);
    font-size: var(--text-sm, 0.875rem);
}

.breadcrumb-lista {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: var(--padding-2xs);
    margin: 0;
    padding: 0;
    list-style: none;
    white-space: nowrap;
}

.breadcrumb-item {
    display: inline-flex;
    min-width: 0;
    flex-shrink: 0;
    align-items: center;
    gap: var(--padding-2xs);
}

.breadcrumb-localizacao {
    flex: 1;
}

.breadcrumb-item>span:last-child {
    overflow: hidden;
    text-overflow: ellipsis;
}

.acoes-imovel {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    gap: var(--padding-xs);
}

.btn-compartilhar,
.btn-salvar {
    display: inline-flex;
    min-height: 40px;
    align-items: center;
    justify-content: center;
    gap: var(--padding-2xs);
    border: 1px solid var(--color-neutral-200);
    border-radius: var(--radius-full);
    background: var(--color-neutral-0);
    color: var(--color-neutral-700);
    cursor: pointer;
    transition: background-color var(--transition-fast), color var(--transition-fast);
}

.btn-compartilhar {
    padding: 0 var(--padding-md);
    font: inherit;
    font-size: var(--text-sm);
}

.btn-salvar {
    width: 40px;
    padding: 0;
}

.btn-compartilhar svg,
.btn-salvar svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
}

.btn-compartilhar:hover,
.btn-salvar:hover,
.btn-salvar.esta-salvo {
    background: var(--color-neutral-100);
}

.btn-salvar.esta-salvo {
    color: var(--color-accent-600);
}

.btn-compartilhar:focus-visible,
.btn-salvar:focus-visible {
    outline: 2px solid var(--color-accent-500);
    outline-offset: 2px;
}

@media (max-width: 640px) {
    .cabecalho-imovel {
        align-items: flex-start;
        flex-direction: column;
    }

    .breadcrumb-imovel {
        width: 100%;
    }

    .acoes-imovel {
        align-self: flex-end;
    }
}
</style>
