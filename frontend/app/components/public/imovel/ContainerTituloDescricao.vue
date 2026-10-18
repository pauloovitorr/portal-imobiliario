<script setup lang="ts">
import { BedDouble, CarFront, Ruler, ShowerHead } from '@lucide/vue'
</script>


<template>
    <div class="titulo-descricao">
        <h1>Apartamento para aluguel em São Paulo / SP, Vila Nair, 2 dormitórios, 1 banheiro</h1>
    </div>

    <div class="container-preco-caracteristicas">
        <div class="bloco-preco">
            <div class="preco-venda">
                <span class="rotulo-preco">Venda</span>
                <strong class="valor-venda">R$ 200.000.000</strong>
            </div>
            <div class="encargos-imovel">
                <span>Condomínio <strong>R$ 150/mês</strong></span>
                <span>IPTU <strong>R$ 15.000</strong></span>
            </div>
        </div>

        <div class="caracteristicas" aria-label="Características do imóvel">
            <div class="caracteristica">
                <span class="rotulo-caracteristica">Área útil</span>
                <span class="valor-caracteristica">
                    <Ruler aria-hidden="true" />
                    <strong>68 m²</strong>
                </span>
            </div>
            <div class="caracteristica">
                <span class="rotulo-caracteristica">Quartos</span>
                <span class="valor-caracteristica">
                    <BedDouble aria-hidden="true" />
                    <strong>2</strong>
                </span>
            </div>
            <div class="caracteristica">
                <span class="rotulo-caracteristica">Suítes</span>
                <span class="valor-caracteristica">
                    <BedDouble aria-hidden="true" />
                    <strong>1</strong>
                </span>
            </div>
            <div class="caracteristica">
                <span class="rotulo-caracteristica">Banheiros</span>
                <span class="valor-caracteristica">
                    <ShowerHead aria-hidden="true" />
                    <strong>2</strong>
                </span>
            </div>
            <div class="caracteristica">
                <span class="rotulo-caracteristica">Garagens</span>
                <span class="valor-caracteristica">
                    <CarFront aria-hidden="true" />
                    <strong>1</strong>
                </span>
            </div>
        </div>
    </div>
</template>


<style scoped>
.titulo-descricao {
    width: 100%;
}

.titulo-descricao h1 {
    font-size: var( --text-2xl);
    font-weight: var(--font-medium);
    color: var(--color-neutral-900);
}

.container-preco-caracteristicas {
    display: grid;
    grid-template-columns: minmax(220px, 0.85fr) minmax(0, 2.15fr);
    align-items: center;
    gap: 32px;
    margin-top: 32px;
    margin-bottom: 32px;
    padding: 24px 0;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
}

.bloco-preco {
    display: flex;
    min-width: 0;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    padding-right: 24px;
    border-right: 1px solid var(--border-color);
}

.preco-venda {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.rotulo-preco,
.rotulo-caracteristica {
    color: var(--text-muted);
    font-size: var(--text-sm);
}

.valor-venda {
    color: var(--text-main);
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
    line-height: var(--leading-tight);
}

.encargos-imovel {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: var(--color-neutral-600);
    font-size: var(--text-sm);
}

.encargos-imovel strong {
    color: var(--color-neutral-700);
    font-weight: var(--font-medium);
}

.caracteristicas {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 12px;
}

.caracteristica {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 8px;
}

.valor-caracteristica {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--text-main);
}

.valor-caracteristica svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    color: var(--color-neutral-700);
    stroke-width: 2;
}

.valor-caracteristica strong {
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
}

@media (max-width: 900px) {
    .container-preco-caracteristicas {
        grid-template-columns: minmax(180px, 0.8fr) minmax(0, 2.2fr);
        gap: 20px;
    }

    .bloco-preco {
        padding-right: 16px;
    }

    .caracteristicas {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        row-gap: 16px;
    }
}

@media (max-width: 640px) {
    .container-preco-caracteristicas {
        grid-template-columns: minmax(0, 1fr);
        gap: 20px;
        margin-top: 20px;
        padding: 20px 0;
    }

    .bloco-preco {
        gap: 8px;
        padding-right: 0;
        padding-bottom: 16px;
        border-right: 0;
        border-bottom: 1px solid var(--border-color);
    }

    .valor-venda {
        font-size: var(--text-2xl);
    }

    .caracteristicas {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
    }
}
</style>
