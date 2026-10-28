<script setup lang="ts">
import { BedDouble, CarFront, Heart, MapPin, MessageCircle, Ruler, ShowerHead } from '@lucide/vue'

withDefaults(defineProps<{
    compacto?: boolean;
    tipoImovel?: string;
    bairro?: string;
    localizacao?: string;
    area?: string;
    quartos?: string;
    suites?: string;
    vagas?: string;
    preco?: string;
}>(), {
    compacto: false,
    tipoImovel: 'Casa à venda',
    bairro: 'Jardim América',
    localizacao: 'Presidente Prudente/SP',
    area: '462 m²',
    quartos: '4 dorms',
    suites: '4 suítes',
    vagas: '6 vagas',
    preco: 'R$ 18.000.000',
});
</script>

<template>
    <div class="container-descricao" :class="{ 'descricao-compacta': compacto }">
        <div class="linha-superior">
            <div class="identificacao-imovel">
                <span class="tipo-imovel">{{ tipoImovel }}</span>
                <h3 class="bairro-imovel">{{ bairro }}</h3>
            </div>
            <button class="btn-favorito" type="button" aria-label="Favoritar imóvel">
                <Heart class="icone-favoritar" />
            </button>
        </div>

        <div class="localizacao-imovel">
            <MapPin class="icone-localizacao" aria-hidden="true" />
            <span>{{ localizacao }}</span>
        </div>

        <div class="caracteristicas-imovel" aria-label="Características do imóvel">
            <span class="caracteristica">
                <Ruler aria-hidden="true" />
                {{ area }}
            </span>
            <span class="caracteristica">
                <BedDouble aria-hidden="true" />
                {{ quartos }}
            </span>
            <span class="caracteristica">
                <ShowerHead aria-hidden="true" />
                {{ suites }}
            </span>
            <span class="caracteristica">
                <CarFront aria-hidden="true" />
                {{ vagas }}
            </span>
        </div>

        <div class="footer-valor">
            <div class="bloco-preco">
                <span class="label-venda">Venda</span>
                <span class="valor-imovel">{{ preco }}</span>
            </div>
            <a
                href="/moema-passaros/apartamento-4-dormitorios-4-suites-6-vagas-463-metros-cf364022"
                class="btn-contato"
                :aria-label="compacto ? 'Falar com o anunciante' : undefined"
                :title="compacto ? 'Falar com o anunciante' : undefined"
            >
                <MessageCircle v-if="compacto" aria-hidden="true" />
                <span v-else>Falar com o anunciante</span>
            </a>
        </div>
    </div>
</template>

<style scoped>
.container-descricao {
    display: flex;
    min-width: 0;
    width: 97%;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--padding-sm);
    padding: var(--padding-lg);
    background-color: var(--bg-surface);
}

.linha-superior {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--padding-sm);
}

.identificacao-imovel {
    min-width: 0;
}

.tipo-imovel {
    color: var(--text-muted);
    font-size: var(--text-xs);
}

.bairro-imovel {
    margin-top: var(--padding-3xs);
    color: var(--text-main);
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
    line-height: var(--leading-tight);
}

.btn-favorito {
    display: flex;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: var(--radius-full);
    background: var(--color-neutral-100);
    cursor: pointer;
    transition: background-color var(--transition-fast), transform var(--transition-fast);
}

.btn-favorito:hover {
    background: var(--color-neutral-200);
    transform: scale(1.05);
}

.icone-favoritar {
    width: 19px;
    height: 19px;
    color: var(--color-neutral-600);
}

.localizacao-imovel {
    display: flex;
    align-items: center;
    gap: var(--padding-2xs);
    color: var(--color-neutral-700);
    font-size: var(--text-sm);
}

.icone-localizacao {
    width: 17px;
    height: 17px;
    flex-shrink: 0;
    color: var(--color-neutral-500);
}

.caracteristicas-imovel {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--padding-xs);
    color: var(--color-neutral-600);
    font-size: var(--text-sm);
}

.caracteristica {
    display: inline-flex;
    min-width: 0;
    align-items: center;
    gap: var(--padding-3xs);
    white-space: nowrap;
}

.caracteristica :deep(svg) {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--color-neutral-600);
}

.footer-valor {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--padding-md);
    margin-top: var(--padding-lg);
    padding-top: var(--padding-md);
    border-top: 1px solid var(--color-neutral-200);
}

.bloco-preco {
    display: flex;
    flex-direction: column;
}

.label-venda {
    color: var(--text-muted);
    font-size: var(--text-xs);
}

.valor-imovel {
    color: var(--text-main);
    font-size: var(--text-2xl);
    font-weight: var(--font-semibold);
    line-height: var(--leading-tight);
}

.btn-contato {
    display: inline-flex;
    min-height: 44px;
    align-items: center;
    justify-content: center;
    padding: 0 var(--padding-md);
    border-radius: var(--radius-md);
    background-color: var(--color-accent-500);
    color: var(--color-neutral-0);
    font-size: var(--text-sm);
    font-weight: var(--font-semibold);
    text-align: center;
    text-decoration: none;
    transition: background-color var(--transition-fast);
}

.btn-contato:hover {
    background-color: var(--color-accent-600);
}

@media (max-width: 900px) {
    .container-descricao {
        padding: var(--padding-md);
    }

    .caracteristicas-imovel {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .footer-valor {
        align-items: stretch;
        flex-direction: column;
    }

    .btn-contato {
        width: 100%;
    }
}

@media (max-width: 480px) {
    .caracteristicas-imovel {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: var(--padding-3xs);
    }

    .caracteristica {
        gap: 3px;
        font-size: var(--text-xs);
    }
}

@media (max-width: 360px) {
    .caracteristicas-imovel {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: var(--padding-xs);
    }
}

.descricao-compacta {
    gap: var(--padding-xs);
    padding: var(--padding-sm);
}

.descricao-compacta .bairro-imovel {
    font-size: var(--text-base);
}

.descricao-compacta .btn-favorito {
    width: 32px;
    height: 32px;
}

.descricao-compacta .caracteristicas-imovel {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--padding-xs);
    font-size: var(--text-xs);
}

.descricao-compacta .caracteristica {
    gap: var(--padding-3xs);
}

.descricao-compacta .caracteristica :deep(svg) {
    width: 14px;
    height: 14px;
}

.descricao-compacta .footer-valor {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    gap: var(--padding-xs);
    margin-top: var(--padding-xs);
    padding-top: var(--padding-sm);
}

.descricao-compacta .bloco-preco {
    min-width: 0;
}

.descricao-compacta .valor-imovel {
    overflow: hidden;
    font-size: var(--text-lg);
    text-overflow: ellipsis;
    white-space: nowrap;
}

.descricao-compacta .btn-contato {
    width: 36px;
    min-width: 36px;
    height: 36px;
    min-height: 36px;
    flex: 0 0 36px;
    padding: 0;
}

.descricao-compacta .btn-contato svg {
    width: 17px;
    height: 17px;
}
</style>
