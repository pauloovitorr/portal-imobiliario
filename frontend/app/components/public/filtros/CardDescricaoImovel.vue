<script setup lang="ts">
// Pronto para receber props no futuro, mantendo os dados padrão do seu mockup
</script>

<template>
    <div class="container-descricao">
        <!-- Metadados / Localização Macro -->
        <div class="meta-info">
            <span class="tag-finalidade">Venda</span>
            <span class="separador-meta"></span>
            <span class="localidade-macro">Presidente Prudente</span>
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
    padding: var(--padding-md) var(--padding-lg) var(--padding-lg) var(--padding-lg);
    display: flex;
    flex-direction: column;
    background-color: var(--bg-surface);
    border-radius: 0 0 var(--radius-lg) var(--radius-lg);
}

.meta-info {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: var(--text-xs);
    color: var(--text-muted);
    margin-bottom: 2px;
}

.tag-finalidade {
    font-weight: var(--font-semibold);
    color: var(--color-accent-600);
    background-color: var(--color-neutral-100);
    padding: 2px 6px;
    border-radius: 4px;
}

.separador-meta {
    width: 3px;
    height: 3px;
    background-color: var(--text-muted);
    border-radius: 50%;
}

.localidade-macro {
    font-weight: var(--font-regular);
}

.bairro-imovel {
    font-family: var(--font-secondary);
    font-size: var(--text-lg);
    font-weight: var(--font-medium);
    color: var(--text-main);
    line-height: var(--leading-tight);
    margin-bottom: 4px;
}

.caracteristicas-imovel {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--text-sm);
    color: var(--text-muted);
    margin-bottom: 12px;
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
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    color: var(--text-main);
    line-height: var(--leading-tight);
}

.btn-ver-mais {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 2.25rem;
    padding: 0 var(--padding-md);
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