<script setup lang="ts">
import { Heart } from '@lucide/vue'
</script>


<template>
    <div class="container-descricao">
        <div class="finalidade-imovel-container">
            <div class="container-tags">
                <span>Venda</span>
                <span>Presidente Prudente</span>
            </div>
            <Heart class="icone-favoritar" />
        </div>

        <h2 class="bairro-imovel">
            Jardim América
        </h2>

        <div class="caracteristicas-imovel">
            <div>462 m²</div>
            <div class="separador"></div>
            <div>4 dorms</div>
            <div class="separador"></div>
            <div>4 suítes</div>
            <div class="separador"></div>
            <div>6 vagas</div>
        </div>

        <div class="info-valor">
            <div>
                <div class="ds-tech">Venda:</div>
                <div class="ds-price">R$ 18.000.000</div>
            </div>

            <a href="/moema-passaros/apartamento-4-dormitorios-4-suites-6-vagas-463-metros-cf364022"
                class="ds-btn-primary">
                Ver mais
            </a>
        </div>
    </div>
</template>


<style scoped>
/* --- Detalhes do Imóvel --- */
.container-descricao {
    width: 100%;
    padding: var(--padding-lg);
}

.finalidade-imovel-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* font-family: var(--font-secondary); */
    font-size: var(--text-xs);
    font-weight: var(--font-medium);
    color: var(--text-main);
    margin-bottom: var(--padding-sm);
}

.container-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.container-tags span {
    color: var(--color-neutral-600);
    padding: var(--padding-3xs) var(--padding-2xs);
    background-color: var(--color-neutral-100);
    border-radius: 8px;
    letter-spacing: 0.5px;
}

.icone-favoritar {
    color: var(--text-muted);
}

.bairro-imovel {
    font-size: var(--text-2xl);
    font-weight: var(--font-medium);
    line-height: var(--leading-tight);
    color: var(--text-main);
    margin-bottom: var(--padding-sm);
    font-family: var(--font-tertiary);
}

.caracteristicas-imovel {
    display: flex;
    align-items: center;
    gap: var(--padding-sm);
    padding-bottom: var(--padding-xl);
    margin-bottom: var(--padding-xl);
    border-bottom: 1px solid var(--border-color);
}

.caracteristicas-imovel div {
    font-size: var(--text-sm);
    color: var(--text-muted);
}

.separador {
    width: 3px;
    height: 3px;
    flex-shrink: 0;
    border-radius: var(--radius-full);
    background-color: var(--text-muted);
}

.info-valor {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--padding-sm);
    margin-top: auto;
}

.ds-tech {
    margin-bottom: var(--padding-3xs);
    font-size: var(--text-sm);
    color: var(--text-muted);
}

.ds-price {
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    line-height: var(--leading-tight);
    color: var(--text-main);
}


.ds-btn-primary {
    /* Alinhamento e Layout */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    padding: 0 var(--padding-lg);

    font-family: var(--font-primary);
    font-size: 13px;
    font-weight: var(--font-medium);
    line-height: var(--leading-tight);
    text-decoration: none;

    background-color: var(--color-accent-500);
    color: var(--color-neutral-0);
    border: none;
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: background-color var(--transition-fast),
        box-shadow var(--transition-fast),
        transform var(--transition-fast);
}


.ds-btn-primary:hover {
    background-color: var(--color-accent-600);
    transform: translateY(-1px);
}
</style>
