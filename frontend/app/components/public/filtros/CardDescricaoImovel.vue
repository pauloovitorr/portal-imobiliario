<script setup lang="ts">
import { Heart } from '@lucide/vue'

// Pronto para receber props no futuro, mantendo os dados padrão do seu mockup
</script>

<template>
    <div class="container-descricao">
        <!-- Metadados / Localização Macro -->
        <div class="meta-info">
            <div class="container-tags">
                <span class="tag-info">Venda</span>
                <span class="tag-info">Presidente Prudente</span>
            </div>
            <button class="btn-favorito" aria-label="Favoritar imóvel">
                <Heart class="icone-favoritar" />
            </button>
        </div>

        <!-- Título / Bairro (Usando Lora) -->
        <h3 class="bairro-imovel">Jardim América</h3>

        <!-- Especificações Enxutas -->
        <div class="caracteristicas-imovel">
            <span>462 m²</span>
            <span class="separador-ponto"></span>
            <span>4 dorms</span>
            <span class="separador-ponto"></span>
            <span>4 suítes</span>
            <span class="separador-ponto"></span>
            <span>6 vagas</span>
        </div>

        <!-- Preço e CTA -->
        <div class="footer-valor">
            <div class="bloco-preco">
                <span class="label-venda">Venda:</span>
                <span class="valor-imovel">R$ 18.000.000</span>
            </div>

            <a href="/moema-passaros/apartamento-4-dormitorios-4-suites-6-vagas-463-metros-cf364022" class="btn-ver-mais">
                Ver mais
            </a>
        </div>
    </div>
</template>

<style scoped>
.container-descricao {
    padding: var(--padding-md);
    display: flex;
    flex-direction: column;
    background-color: var(--bg-surface);
    border-radius: 0 0 var(--radius-lg) var(--radius-lg);
}

.meta-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    font-size: var(--text-xs);
    color: var(--text-muted);
    margin-bottom: var(--padding-3xs);
}

.container-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.btn-favorito {
    display: flex;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 0;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform var(--transition-fast), background var(--transition-fast);
}

.btn-favorito:hover {
    background: rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
}

.icone-favoritar {
    width: 16px;
    height: 16px;
    color: var(--text-muted);
}

.btn-favorito:hover .icone-favoritar {
    color: var(--color-neutral-0);
}

.tag-info {
    color: var(--color-neutral-600);
    padding: var(--padding-3xs) var(--padding-2xs);
    background-color: var(--color-neutral-100);
    border-radius: 8px;
    letter-spacing: 0.5px;
}


.localidade-macro {
    font-weight: var(--font-regular);
}

.bairro-imovel {
    font-family: var(--font-secondary);
    font-size: var(--text-xl);
    font-weight: var(--font-medium);
    color: var(--text-main);
    line-height: var(--leading-tight);
    margin-bottom: var(--padding-xs);
    margin-top: var(--padding-xs);
}

.caracteristicas-imovel {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    font-size: var(--text-xs);
    color: var(--text-muted);
    margin-bottom: var(--padding-md);
}

.separador-ponto {
    width: 3px;
    height: 3px;
    background-color: var(--text-muted);
    border-radius: 50%;
    flex-shrink: 0;
}

.footer-valor {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-top: 10px;
    border-top: 1px solid var(--border-color);
}

.bloco-preco {
    display: flex;
    flex-direction: column;
}

.label-venda {
    font-size: var(--text-xs);
    color: var(--text-muted);
}

.valor-imovel {
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
    color: var(--text-main);
    line-height: var(--leading-tight);
}

.btn-ver-mais {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 2.25rem;
    padding: 0 var(--padding-sm);
    font-size: 13px;
    font-weight: var(--font-medium);
    color: var(--color-neutral-0);
    background-color: var(--color-accent-500);
    border-radius: var(--radius-md);
    text-decoration: none;
    transition: background-color var(--transition-fast), transform var(--transition-fast);
}

.btn-ver-mais:hover {
    background-color: var(--color-accent-600);
    transform: translateY(-1px);
}
</style>